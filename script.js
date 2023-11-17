const display = document.querySelector('#display');  

const locationInput = document.querySelector('#location-input');  

const getWeatherBtn = document.querySelector('#get-weather-btn');  
getWeatherBtn.onclick = () => getWeather(locationInput.value);

const getWeather = async (location) => {
    try {
        const res = await fetch(`http://api.weatherapi.com/v1/current.json?key=edfe619e43de4db9839220900231511&q=${location}`);
        const weatherData = await res.json();
        const data = {
            curTemp: weatherData.current.temp_c,
            feelsLike: weatherData.current.feelslike_c,
            location: weatherData.location.name,
            country: weatherData.location.country,
        };
    
        display.textContent = 
        `Current location is ${data.location}, ${data.country} 
        Current temprature is ${data.curTemp}, feels like ${data.feelsLike}`;
        console.log(data);

    } catch (error) {
        console.log(error);
    }
};
