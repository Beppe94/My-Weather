export default async function getWeather(latitude, longitude) {
    const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}0&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,windspeed_10m,windspeed_80m,winddirection_10m&current_weather=true&start_date=2023-04-16&end_date=2023-04-22`);
    const response = await promise.json();

    console.log(response);
    getCurrentWeather(response);
    getCurrentTime(response);

    return response;
}

const currWeather = document.getElementById('curr-weather');

async function getCurrentWeather(data) {
    const currWeatherDiv = document.getElementById('curr-temp');
    currWeatherDiv.textContent = ''

    const currTemp = document.createElement('h2');
    const tempPng = document.createElement('img');
    
    tempPng.src = 'icons/thermostat.png'
    currTemp.textContent = data.current_weather.temperature;
    
    
    currWeatherDiv.appendChild(tempPng);
    currWeatherDiv.appendChild(currTemp);
    
    currWeather.appendChild(currWeatherDiv);
}

async function getCurrentTime(data) {
    const currDateDiv = document.getElementById('curr-time')
    currDateDiv.textContent = ''
    
    const datePng = document.createElement('img');
    const currDate = document.createElement('h2');

    datePng.src = 'icons/calendar.png'
    currDate.textContent = formatTime(data.current_weather.time);

    currDateDiv.appendChild(datePng)
    currDateDiv.appendChild(currDate);

    currWeather.appendChild(currDateDiv)
}

function formatTime(time) {
    const day = time.split('-')[2];
    const month = time.split('-')[1];
    const year = time.split('-')[0];

    return `${day[0]}${day[1]}/${month}/${year}`
}
