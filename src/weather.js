import { getForecast } from "./forecast";
import { getApparentWeather, getHumidity, getMaxTemp, getMinTemp, getPrecipitation, getTime, getWindSpeed } from "./utilities";

export default async function getWeather(latitude, longitude) {
    const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=apparent_temperature,relativehumidity_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`)
    const response = await promise.json();
    
    getCurrentDate(response);
    setWeatherInterpretation(response);
    getCurrentWeather(response);
    getApparentWeather(getTime(response), response);
    getWindSpeed(response);
    getPrecipitation(response);
    getHumidity(getTime(response), response);
    getMaxTemp(response);
    getMinTemp(response);
    getForecast(response);
    
    console.log(response);
    return response;
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

function getCurrentWeather(data) {
    const currWeatherDiv = document.getElementById('curr-temp');
    currWeatherDiv.textContent = ''

    const currTemp = document.createElement('h1');
    currTemp.id = 'temp-celsius';
    currTemp.textContent = data.current_weather.temperature + ' °C';
    
    currWeatherDiv.appendChild(currTemp);
    currWeather.appendChild(currWeatherDiv);
}

export function formatTime(time) {
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
    const weatherSvg = document.createElement('img');
    const weatherDescription = document.createElement('h2');
    
    let weatherCode = await data.current_weather.weathercode;
    let isDay = await data.current_weather.is_day;

    if(weatherCode === 0 && isDay === 1){
        weatherDescription.textContent = 'Clear Sky';
        weatherSvg.src = 'icons/sunny.svg';
    }else if(weatherCode === 0 && isDay === 0) {
        weatherDescription.textContent = 'Clear Sky';
        weatherSvg.src = 'icons/night.svg';
    } else if(cloudy.includes(weatherCode) && isDay === 1) {
        weatherDescription.textContent = 'Scattered Clouds'
        weatherSvg.src = 'icons/cloudyDay.svg';
    } else if(cloudy.includes(weatherCode) && isDay === 0) {
        weatherDescription.textContent = 'Scattered Clouds';
        weatherSvg.src = 'icons/cloudyNight.svg';
    } else if(foggy.includes(weatherCode)) {
        weatherDescription.textContent = 'Foggy';
        weatherSvg.src = 'icons/foggy.svg';
    } else if(rain.includes(weatherCode)) {
        weatherDescription.textContent = 'Rainy';
        weatherSvg.src = 'icons/rainy.svg';
    } else if(snow.includes(weatherCode)) {
        weatherDescription.textContent = 'Snowy';
        weatherSvg.src = 'icons/snowy.svg';
    } else if(thunderstorm.includes(weatherCode)) {
        weatherDescription.textContent = 'Thunderstorm';
        weatherSvg.src = 'icons/thunderstorm.svg'
    }
    
    currTemp.appendChild(weatherDescription);
    currTemp.appendChild(weatherSvg);
    currWeather.appendChild(currTemp);
}



