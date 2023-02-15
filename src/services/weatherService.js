import { DateTime } from 'luxon';

const API_KEY = '28befec0f26406b410b5cae9d63a3a54';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

const date = new Date();
const currentDate = date.getDate();

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + '/' + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

  return fetch(url).then((res) => res.json());
};

const getFormattedWeatherData = async (searchParams) => {
  const currentWeatherData = await getWeatherData('weather', searchParams);

  const {
    coord: { lat, lon },
  } = currentWeatherData;

  const forecastWeather = await getWeatherData('forecast', {
    lat,
    lon,
    exclude: 'current,minutely,alerts',
    units: searchParams.units,
  }).then(filterForecastWeather);

  return { ...currentWeatherData, ...forecastWeather };
};

const filterForecastWeather = (data) => {
  let {
    city: { timezone },
    list,
  } = data;
  const weeklyData = list.filter((dailyData) => {
    const day = new Date(dailyData.dt_txt).getDate();
    const hours = new Date(dailyData.dt_txt).getHours();
    if (day > currentDate && day < currentDate + 5 && hours === 12) {
      return dailyData;
    }
  });

  return { timezone, weeklyData };
};

const formatToLocalTime = (secs, zone, format = 'ccc') =>
  DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => `http://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export { formatToLocalTime, iconUrlFromCode };
