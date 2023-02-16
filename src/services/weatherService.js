const API_KEY = '9LH4K3RP8GJJVLJYMTFUD9QG4';
const BASE_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]?key=YOUR_API_KEY

const getWeatherData = (location, units) => {
  const unitCode = `unitGroup=${units}`;
  const api = `&key=${API_KEY}`;

  const url = new URL(BASE_URL + location + '?' + unitCode + api);

  return fetch(url).then((res) => res.json());
};

const formatForecastWeather = (data) => {
  const { days, currentConditions, address, resolvedAddress } = data;
  const { datetimeEpoch, temp, feelslike, humidity, windspeed, sunrise, sunset } =
    currentConditions;

  const country = getCountry(resolvedAddress);
  const cityAndCountry = address + ', ' + country;

  const weeklyForecast = days.slice(1, 5).map((day) => {
    return {
      title: formatWeekday(day.datetimeEpoch),
      temp: Math.round(day.temp),
      icon: day.icon,
    };
  });

  const dateAndTemp = {
    temp: Math.round(temp),
    cityAndCountry: cityAndCountry,
    date: formatLocatDate(datetimeEpoch),
  };

  const weatherConditions = {
    feelsLike: Math.round(feelslike),
    humidity: humidity,
    wind: windspeed,
    sunrise: sunrise.slice(0, 5),
    sunset: sunset.slice(0, 5),
  };

  return {
    weeklyWeather: weeklyForecast,
    dateAndTemp: dateAndTemp,
    weatherConditions: weatherConditions,
  };
};

const getFormattedWeatherData = async (location, units) => {
  const formatedWeather = await getWeatherData(location, units).then(
    formatForecastWeather,
  );

  return { formatedWeather };
};

const formatWeekday = (timeInSeconds) => {
  const options = { weekday: 'short' };

  const weekday = new Date(timeInSeconds * 1000).toLocaleDateString(undefined, options);
  return weekday;
};

const formatLocatDate = (timeInSeconds) => {
  const options = { weekday: 'long', day: 'numeric', month: 'short' };

  const localDate = new Date(timeInSeconds * 1000).toLocaleDateString(undefined, options);
  return localDate;
};

const getCountry = (resolvedAddress) => {
  const addressArray = resolvedAddress.split(', ');
  const country = addressArray.pop();

  return country;
};

export default getFormattedWeatherData;
