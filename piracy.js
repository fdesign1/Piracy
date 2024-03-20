/*const myCarouselElement = document.querySelector('.carousel-item')


const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 10,

});*/


const apiKey = 'PqBGHH6pfZu6p7JfG518FeUuhqyMj8hD';

const cityName = 'Gdańsk'; // Nombre de la ciudad que queremos buscar
const countryCode = 'PL'; // Código del país (en este caso, Polonia)

// URL para la API de Autocompletado de Localización de AccuWeather
const autoCompleteUrl = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${cityName}&country=${countryCode}`;

async function fetchWeather() {
    try {
        // Realizar la solicitud para obtener el código de ubicación de Varsovia
        const autoCompleteResponse = await fetch(autoCompleteUrl);
        const locationData = await autoCompleteResponse.json();

        // Obtener el código de ubicación de Varsovia
        const cityData = locationData[0];
        const locationKey = cityData.Key;

        // Utilizar el código de ubicación para obtener el pronóstico del tiempo para Varsovia
        const weatherUrl = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;

        // Realizar la solicitud para obtener el pronóstico del tiempo
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        // Manipular los datos de respuesta del pronóstico del tiempo
        const temperature = weatherData[0].Temperature.Metric.Value;
        const weatherText = weatherData[0].WeatherText;
        const weatherIconData = weatherData[0].WeatherIcon;
        

        // Mostrar la información grados centigrados y si esta nublado o no
        document.getElementById('weather-info').innerHTML = `
            <p> Gdańsk: ${temperature}°C,${weatherText}</p>
        `;

       // Mostrar Icono del clima 

       const imagen = document.getElementById("miImagen");
       const urlImagen = `WeatherIcons/${weatherIconData}.png`
       imagen.src=urlImagen;
        
        
    

    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('weather-info').innerHTML = '<p>Error fetching data</p>';
    }
}

fetchWeather();



