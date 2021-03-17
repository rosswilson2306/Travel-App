import { openWeatherKeys } from './Keys';

const OpenWeather = {
  getWeather() {
    // Open Weather
    const weatherEndpoint = 'api.openweathermap.org/data/2.5/weather';
    const weatherUrl = `${weatherEndpoint}?q=${inputValue}&appid=${openWeatherKeys.clientKey}`;
  }
};

export default OpenWeather;
