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
  let { days } = data;
  console.log(days);
  const weeklyForecast = days.slice(1, 5).map((day) => {
    return {
      title: formatToLocalTime(day.datetimeEpoch),
      temp: Math.round(day.temp),
      icon: day.icon,
    };
  });
  return weeklyForecast;
};

const getFormattedWeatherData = async (location, units) => {
  const weeklyWeather = await getWeatherData(location, units).then(formatForecastWeather);

  return { weeklyWeather };
};

const formatToLocalTime = (timeInSeconds) => {
  const options = { weekday: 'short' };

  const weekday = new Date(timeInSeconds * 1000).toLocaleDateString(undefined, options);
  return weekday;
};

export default getFormattedWeatherData;
