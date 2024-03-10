const myCarouselElement = document.querySelector('.carousel-item')


const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 10,

});


const apiKey = 'PqBGHH6pfZu6p7JfG518FeUuhqyMj8hD';

const location = 'Gdańsk';

const url = `http://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=${apiKey}`;


async function fetchWeather() {
  try {
      const response = await fetch(url);
      const data = await response.json();

      // Manipular los datos de respuesta
      const weatherInfo = data[0];
      const temperature = weatherInfo.Temperature.Metric.Value;
      const weatherText = weatherInfo.WeatherText;

      // Mostrar la información en la página web
      document.getElementById('weather-info').innerHTML = `
          <p>Temperature: ${temperature}°C</p>
          <p>Weather: ${weatherText}</p>
      `;
  } catch (error) {
      console.error('Error fetching data:', error);
      document.getElementById('weather-info').innerHTML = '<p>Error fetching weather data</p>';
  }
}

fetchWeather();


