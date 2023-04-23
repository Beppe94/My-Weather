export default async function getWeather(latitude, longitude) {
    const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`)
    const response = await promise.json();

    console.log(response);
    
    getCurrentDate(response);
    setWeatherInterpretation(response);
    getCurrentWeather(response);
    getTime(response)
}

const currWeather = document.getElementById('curr-weather');

async function getCurrentDate(data) {
    const currDateDiv = document.getElementById('curr-date')
    currDateDiv.textContent = ''
    
    const datePng = document.createElement('img');
    const currDate = document.createElement('h3');
    
    datePng.src = 'icons/calendar.png'
    currDate.textContent = formatTime(data.current_weather.time);
    
    currDateDiv.appendChild(datePng)
    currDateDiv.appendChild(currDate);
    
    currWeather.appendChild(currDateDiv)
}

async function getCurrentWeather(data) {
    const currWeatherDiv = document.getElementById('curr-temp');
    currWeatherDiv.textContent = ''

    const currTemp = document.createElement('h1');
    
    currTemp.textContent = await data.current_weather.temperature + ' °C';
    
    currWeatherDiv.appendChild(currTemp);
    
    currWeather.appendChild(currWeatherDiv);
}

function formatTime(time) {
    const day = time.split('-')[2];
    const month = time.split('-')[1];
    const year = time.split('-')[0];

    return `${day[0]}${day[1]}/${month}/${year}`
}

const cloudy = [1,2,3];
const foggy = [45, 48];
const rain = [51,53,55,56,57,61,63,65,66,67,80,81,82];
const snow = [71,73,75,77,85, 86];
const thunderstorm = [95,96, 99,'*'];

async function setWeatherInterpretation(data) {
    const currTemp = document.getElementById('curr-temp');
    const weatherPng = document.createElement('img');
    const weatherDescription = document.createElement('h2');
    
    let weatherCode = await data.current_weather.weathercode;
    let isDay = await data.current_weather.is_day;

    if(weatherCode === 0 && isDay === 1){
        weatherDescription.textContent = 'Clear Sky';
        weatherPng.src = 'icons/sunny.svg';
    }else if(weatherCode === 0 && isDay === 0) {
        weatherDescription.textContent = 'Clear Sky';
        weatherPng.src = 'icons/night.svg';
    } else if(cloudy.includes(weatherCode) && isDay === 1) {
        weatherDescription.textContent = 'Scattered Clouds'
        weatherPng.src = 'icons/cloudyDay.svg';
    } else if(cloudy.includes(weatherCode) && isDay === 0) {
        weatherDescription.textContent = 'Scattered Clouds';
        weatherPng.src = 'icons/cloudyNight.svg';
    } else if(foggy.includes(weatherCode)) {
        weatherDescription.textContent = 'Foggy';
        weatherPng.src = 'icons/foggy.svg';
    } else if(rain.includes(weatherCode)) {
        weatherDescription.textContent = 'Rainy';
        weatherPng.src = 'icons/rainy.svg';
    } else if(snow.includes(weatherCode)) {
        weatherDescription.textContent = 'Snowy';
        weatherPng.src = 'icons/snowy.svg';
    } else if(thunderstorm.includes(weatherCode)) {
        weatherDescription.textContent = 'Thunderstorm';
        weatherPng.src = 'icons/thunderstorm.svg'
    }
    
    currTemp.appendChild(weatherDescription);
    currTemp.appendChild(weatherPng);
    currWeather.appendChild(currTemp);
}

async function getTime(data) {
    let currDate = await data.current_weather.time;
    let currTime = currDate.split('T')

    console.log(currTime[1]);
}


getWeather(45.7, 9.66)


