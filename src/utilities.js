function getTime(data) {
    const currDate = data.current_weather.time;
    const currTime = currDate.split('T')
    const time = currTime[1].split(':');
    const timeTwoDigits = time[0];

    if(timeTwoDigits === '00') {
        return '24';
    } else if(timeTwoDigits[0] === '0') {
        return timeTwoDigits[1];
    } else {
        return timeTwoDigits;
    }
}

function getApparentWeather(time, data) {
    const feelsLike = document.getElementById('feels-like');
    
    feelsLike.textContent= `${data.hourly.apparent_temperature[time]} °C`;
}

function getWindSpeed(data) {
    const windSpeed = document.getElementById('wind-speed');

    let wind = data.current_weather.windspeed;

    windSpeed.textContent = `${wind} Km/h`
}

function getPrecipitation(data) {
    const rainProb = document.getElementById('rain-prob');

    rainProb.textContent = `${data.daily.precipitation_probability_max[0]} %`; 
}

function getHumidity(time, data) {
    const humidity = document.getElementById('humidity');

    humidity.textContent = `${data.hourly.relativehumidity_2m[time]} %`
}

function getMaxTemp(data) {
    const maxTemp = document.getElementById('max-temp');

    maxTemp.textContent = `${data.daily.temperature_2m_max[0]} °C`;
}

function getMinTemp(data) {
    const maxTemp = document.getElementById('min-temp');

    maxTemp.textContent = `${data.daily.temperature_2m_min[0]} °C`;
}

export {getTime, getApparentWeather, getWindSpeed, getPrecipitation, getHumidity, getMaxTemp, getMinTemp}