import { formatTime } from "./weather";

async function getForecast(data) {
    const maxTemp = await data.daily.temperature_2m_max;
    const minTemp = await data.daily.temperature_2m_min;  
    const days = await data.daily.time;
    const weatherCode = await data.daily.weathercode;

    setForecastDayOne(days, maxTemp, minTemp, weatherCode);
    setForecastDayTwo(days, maxTemp, minTemp, weatherCode);
    setForecastDayThree(days, maxTemp, minTemp, weatherCode);
    setForecastDayFour(days, maxTemp, minTemp, weatherCode);
    setForecastDayFive(days, maxTemp, minTemp, weatherCode);
    setForecastDaySix(days, maxTemp, minTemp, weatherCode);
}

function setForecastDayOne(day,maxTempFore,minTempFore,weatherCodeFore) {
    const dayId = document.getElementById('day-2');
    const date = document.createElement('h4');
    const maxTemp = document.createElement('h2');
    const minTemp = document.createElement('h3');
    const weatherCodeImg = document.createElement('img');

    dayId.textContent = '';
    
    maxTemp.className = 'forecast-max-temp';
    minTemp.className = 'forecast-min-temp';
    
    date.textContent = formatTime(day[1]);
    maxTemp.textContent = maxTempFore[1] + ' °C';
    minTemp.textContent = minTempFore[1] + ' °C';
    weatherCodeImg.src = setWeatherCode(weatherCodeFore[1]);
    
    dayId.appendChild(date);
    dayId.appendChild(maxTemp);
    dayId.appendChild(minTemp);
    dayId.appendChild(weatherCodeImg);
}

function setForecastDayTwo(day,maxTempFore,minTempFore,weatherCodeFore) {
    const dayId = document.getElementById('day-3');
    const date = document.createElement('h4');
    const maxTemp = document.createElement('h2');
    const minTemp = document.createElement('h3');
    const weatherCodeImg = document.createElement('img');

    dayId.textContent = '';

    maxTemp.className = 'forecast-max-temp';
    minTemp.className = 'forecast-min-temp';
    
    date.textContent = formatTime(day[2]);
    maxTemp.textContent = maxTempFore[2] + ' °C';
    minTemp.textContent = minTempFore[2] + ' °C';
    weatherCodeImg.src = setWeatherCode(weatherCodeFore[2]);

    dayId.appendChild(date);
    dayId.appendChild(maxTemp);
    dayId.appendChild(minTemp);
    dayId.appendChild(weatherCodeImg);
}

function setForecastDayThree(day,maxTempFore,minTempFore,weatherCodeFore) {
    const dayId = document.getElementById('day-4');
    const date = document.createElement('h4');
    const maxTemp = document.createElement('h2');
    const minTemp = document.createElement('h3');
    const weatherCodeImg = document.createElement('img');

    dayId.textContent = '';

    maxTemp.className = 'forecast-max-temp';
    minTemp.className = 'forecast-min-temp';
    
    date.textContent = formatTime(day[3]);
    maxTemp.textContent = maxTempFore[3] + ' °C';
    minTemp.textContent = minTempFore[3] + ' °C';
    weatherCodeImg.src = setWeatherCode(weatherCodeFore[3]);

    dayId.appendChild(date);
    dayId.appendChild(maxTemp);
    dayId.appendChild(minTemp);
    dayId.appendChild(weatherCodeImg);
}

function setForecastDayFour(day,maxTempFore,minTempFore,weatherCodeFore) {
    const dayId = document.getElementById('day-5');
    const date = document.createElement('h4');
    const maxTemp = document.createElement('h2');
    const minTemp = document.createElement('h3');
    const weatherCodeImg = document.createElement('img');

    dayId.textContent = '';

    maxTemp.className = 'forecast-max-temp';
    minTemp.className = 'forecast-min-temp';
    
    date.textContent = formatTime(day[4]);
    maxTemp.textContent = maxTempFore[4] + ' °C';
    minTemp.textContent = minTempFore[4] + ' °C';
    weatherCodeImg.src = setWeatherCode(weatherCodeFore[4]);

    dayId.appendChild(date);
    dayId.appendChild(maxTemp);
    dayId.appendChild(minTemp);
    dayId.appendChild(weatherCodeImg);
}

function setForecastDayFive(day,maxTempFore,minTempFore,weatherCodeFore) {
    const dayId = document.getElementById('day-6');
    const date = document.createElement('h4');
    const maxTemp = document.createElement('h2');
    const minTemp = document.createElement('h3');
    const weatherCodeImg = document.createElement('img');

    dayId.textContent = '';

    maxTemp.className = 'forecast-max-temp';
    minTemp.className = 'forecast-min-temp';
    
    date.textContent = formatTime(day[5]);
    maxTemp.textContent = maxTempFore[5] + ' °C';
    minTemp.textContent = minTempFore[5] + ' °C';
    weatherCodeImg.src = setWeatherCode(weatherCodeFore[5]);

    dayId.appendChild(date);
    dayId.appendChild(maxTemp);
    dayId.appendChild(minTemp);
    dayId.appendChild(weatherCodeImg);
}

function setForecastDaySix(day,maxTempFore,minTempFore,weatherCodeFore) {
    const dayId = document.getElementById('day-7');
    const date = document.createElement('h4');
    const maxTemp = document.createElement('h2');
    const minTemp = document.createElement('h3');
    const weatherCodeImg = document.createElement('img');

    dayId.textContent = '';

    maxTemp.className = 'forecast-max-temp';
    minTemp.className = 'forecast-min-temp';

    date.textContent = formatTime(day[6]);
    maxTemp.textContent = maxTempFore[6] + ' °C';
    minTemp.textContent = minTempFore[6] + ' °C';
    weatherCodeImg.src = setWeatherCode(weatherCodeFore[6]);

    dayId.appendChild(date);
    dayId.appendChild(maxTemp);
    dayId.appendChild(minTemp);
    dayId.appendChild(weatherCodeImg)
}

const cloudy = [1,2,3];
const foggy = [45, 48];
const rain = [51,53,55,56,57,61,63,65,66,67,80,81,82];
const snow = [71,73,75,77,85, 86];
const thunderstorm = [95,96, 99,'*'];

function setWeatherCode(weatherCode) {

    let weatherSvg;
    
    if(weatherCode === 0){
        weatherSvg = 'icons/sunny.svg';
    } else if(cloudy.includes(weatherCode)) {
        weatherSvg = 'icons/cloudyDay.svg';
    } else if(foggy.includes(weatherCode)) {
        weatherSvg = 'icons/foggy.svg';
    } else if(rain.includes(weatherCode)) {
        weatherSvg = 'icons/rainy.svg';
    } else if(snow.includes(weatherCode)) {
        weatherSvg = 'icons/snowy.svg';
    } else if(thunderstorm.includes(weatherCode)) {
        weatherSvg = 'icons/thunderstorm.svg';
    }

    return weatherSvg;
}


export { getForecast }