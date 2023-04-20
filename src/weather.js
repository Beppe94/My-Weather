export default async function getWeather(latitude, longitude) {
    const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,apparent_temperature,relativehumidity_2m&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,windspeed_10m_max&current_weather=true&timezone=auto`)
    const response = await promise.json();

    console.log(response);
    getCurrentDate(response);
    getCurrentWeather(response);
    setWeatherInterpretation(response);
    
    getTime(response)
    return response;
}

const currWeather = document.getElementById('curr-weather');

async function getCurrentDate(data) {
    const currDateDiv = document.getElementById('curr-date')
    currDateDiv.textContent = ''
    
    const datePng = document.createElement('img');
    const currDate = document.createElement('h2');
    
    datePng.src = 'icons/calendar.png'
    currDate.textContent = formatTime(data.current_weather.time);
    
    currDateDiv.appendChild(datePng)
    currDateDiv.appendChild(currDate);
    
    currWeather.appendChild(currDateDiv)
}

async function getCurrentWeather(data) {
    const currWeatherDiv = document.getElementById('curr-temp');
    currWeatherDiv.textContent = ''

    const currTemp = document.createElement('h2');
    const tempPng = document.createElement('img');
    
    tempPng.src = 'icons/thermostat.png'
    currTemp.textContent = data.current_weather.temperature + ' °C';
    
    
    currWeatherDiv.appendChild(tempPng);
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
    
    let weatherCode = await data.current_weather.weathercode;
    let isDay = await data.current_weather.is_day;

    if(weatherCode == 0 && isDay == 0) {
        weatherPng.src = 'icons/night.png';
    } else if(cloudy.includes(weatherCode) && isDay == 1) {
        weatherPng.src = 'icons/cloudyDay.png';
    } else if(cloudy.includes(weatherCode) && isDay == 0) {
        weatherPng.src = 'icons/cloudyNight.png';
    } else if(foggy.includes(weatherCode)) {
        weatherPng.src = 'icons/foggy.png';
    } else if(rain.includes(weatherCode)) {
        weatherPng.src = 'icons/rainy.png';
    } else if(snow.includes(weatherCode)) {
        weatherPng.src = 'icons/snowy.png';
    } else if(thunderstorm.includes(weatherCode)) {
        weatherPng.src = 'icons/thunderstorm.png'
    }
    
    currTemp.appendChild(weatherPng);
    currWeather.appendChild(currTemp);
}



async function getTime(data) {
    let currDate = data.current_weather.time;
    let currTime = currDate.split('T')

    console.log(currTime[1]);
}