document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '10a9026d31a10de1856be1bac5092395'; // Replace with your actual API key
    const videoElement = document.getElementById('background-video');
    const locationElement = document.getElementById('location');
    const countryElement = document.getElementById('country');
    const temperatureElement = document.getElementById('temperature');
    const mainElement = document.getElementById('main');
    const descriptionElement = document.getElementById('description');
    const locationForm = document.getElementById('location-form');
    const locationInput = document.getElementById('location-input');

    function setVideo(weatherCondition) {
        let videoSrc = 'videos/clear.mp4'; // default video
        if (weatherCondition.includes('cloud')) {
            videoSrc = 'videos/cloudy.mp4';
        } else if (weatherCondition.includes('rain')) {
            videoSrc = 'videos/rain.mp4';
        } else if (weatherCondition.includes('snow')) {
            videoSrc = 'videos/snow.mp4';
        }
        videoElement.src = videoSrc;
    }

    function updateWeatherData(data) {
        const { name, main, weather, sys } = data;
        locationElement.textContent = name;
        countryElement.textContent = sys.country;
        temperatureElement.textContent = `Temperature: ${main.temp}°C`;
        mainElement.textContent = weather[0].main;
        descriptionElement.textContent = weather[0].description;
        setVideo(weather[0].main.toLowerCase());
    }

    function fetchWeather(lat, lon) {
        fetch(`weather.php?lat=${lat}&lon=${lon}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => updateWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));
    }

    function fetchWeatherByLocation(location) {
        fetch(`weather.php?location=${location}&apiKey=${apiKey}`)
            .then(response => response.json())
            .then(data => updateWeatherData(data))
            .catch(error => console.error('Error fetching weather data:', error));
    }

    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        fetchWeather(latitude, longitude);
    });

    locationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const location = locationInput.value;
        fetchWeatherByLocation(location);
    });
});
