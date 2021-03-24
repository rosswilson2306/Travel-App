import { openWeatherKeys } from '../Keys';

const OpenWeather = {
  getWeather(inputValue) {
    // Open Weather
    const weatherEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
    const weatherUrl = `${weatherEndpoint}?q=${inputValue}&appid=${openWeatherKeys.clientKey}&mode=json`;

    fetch(weatherUrl)
      .then(response => {
        if (!response) return;
        return response.json();
      })
      .then(data => {
        if (!data) return;
        console.log(data);
        const weather = data.weather[0].main;
        return weather;
      });
  }
};

export default OpenWeather;
