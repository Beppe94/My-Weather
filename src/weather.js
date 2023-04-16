export default async function getWeather(latitude, longitude) {
    const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}0&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,windspeed_10m,windspeed_80m,winddirection_10m&current_weather=true&start_date=2023-04-16&end_date=2023-04-22`);
    const response = await promise.json();

    console.log(response);
    getCurrentTime(response);
    getCurrentWeather(response);
    setWeatherInterpretation(response);
    
    return response;
}

const currWeather = document.getElementById('curr-weather');

async function getCurrentTime(data) {
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

const weatherCodesDescription = {
    'clear sky' : [0],
    'cloudy' : [1,2,3],
    'fog' : [45,48],
    'dizzle' : [51,53,55],
    'freezing dizzle' : [56,57],
    'rain' : [61,63,65],
    'freezing rain' : [66, 67],
    'snow' : [71,73,75],
    'snow grains' : [77],
    'rain shower' : [80, 81, 82],
    'snow shower' : [85, 86],
    'thunderstorm' : [95, '*'],
    'hail' : [96, 99, '*']
}

async function setWeatherInterpretation(data) {
    const currTemp = document.getElementById('curr-temp');
    const weatherPng = document.createElement('img');
    
    let weatherCode = await data.current_weather.weathercode;
    let isDay = await data.current_weather.is_day;

    if(weatherCode == 0 && isDay == 0) {
        weatherPng.src = 'icons/night.png'
    } else if(weatherCode == 1 || weatherCode == 2 || weatherCode == 3 && isDay == 1) {
        weatherPng.src = 'icons/cloudyDay.png'
    } else if(weatherCode == 1 && isDay == 0) {
        weatherPng.src = 'icons/cloudyNight.png'
    }
    
    currTemp.appendChild(weatherPng);
    currWeather.appendChild(currTemp);

    console.log(weatherCode, isDay);
}