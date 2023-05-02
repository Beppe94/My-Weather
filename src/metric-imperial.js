
function switchTempF(celsius) {
    const precision = 1;
    const newC = (celsius * 9 / 5) + 32;
    return newC.toFixed(precision)
}

function switchTempC(fahrenheit) {
    const precision = 1;
    const newF = (fahrenheit - 32) * 5 / 9;
    return newF.toFixed(precision)
}

function switchKm(km) {
    const precision = 1;
    const miles = km * 0.621371192;
    return miles.toFixed(precision);
}

function switchMi(miles) {
    const precision = 1;
    const km = miles * 1.6;
    return km.toFixed(precision);
}

async function imperial() {
    const currTemp = document.getElementById('temp-celsius');
    const feelsLike = document.getElementById('feels-like');
    const windSpd = document.getElementById('wind-speed');
    const maxTemp = document.getElementById('max-temp');
    const minTemp = document.getElementById('min-temp');
    const forecastMaxTemp = document.querySelectorAll('.forecast-max-temp');
    const forecastMinTemp = document.querySelectorAll('.forecast-min-temp');
    
    let fCurrTemp = currTemp.textContent.split(' °C')[0];
    let fFeelsLike = feelsLike.textContent.split(' °C')[0];
    let fWindSpd = windSpd.textContent.split(' Km/h')[0];
    let fMaxTemp = maxTemp.textContent.split(' °C')[0];
    let fMinTemp = minTemp.textContent.split(' °C')[0];

    currTemp.textContent = switchTempF(fCurrTemp) + ' °F';
    feelsLike.textContent = switchTempF(fFeelsLike) + ' °F';
    windSpd.textContent = switchKm(fWindSpd) + ' Mph';
    maxTemp.textContent = switchTempF(fMaxTemp) + ' °F';
    minTemp.textContent = switchTempF(fMinTemp) + ' °F';

    forecastMaxTemp.forEach(element =>{
        let newTempF = element.textContent.split(' °C')[0];
        element.textContent = switchTempF(newTempF) + ' °F';
    });

    forecastMinTemp.forEach(element => {
        let newTempF = element.textContent.split(' °C')[0];
        element.textContent = switchTempF(newTempF) + ' °F';
    })
}

async function metric() {
    const currTemp = document.getElementById('temp-celsius');
    const feelsLike = document.getElementById('feels-like');
    const windSpd = document.getElementById('wind-speed');
    const maxTemp = document.getElementById('max-temp');
    const minTemp = document.getElementById('min-temp');
    const forecastMaxTemp = document.querySelectorAll('.forecast-max-temp');
    const forecastMinTemp = document.querySelectorAll('.forecast-min-temp');

    let cCurrTemp = currTemp.textContent.split(' °F')[0];
    let cFeelsLike = feelsLike.textContent.split(' °F')[0];
    let cWindSpd = windSpd.textContent.split(' Mph')[0];
    let cMaxTemp = maxTemp.textContent.split(' °F')[0];
    let cMinTemp = minTemp.textContent.split(' °F')[0];

    forecastMaxTemp.forEach(element =>{
        let newTempF = element.textContent.split(' °F')[0];
        element.textContent = switchTempC(newTempF) + ' °C';
    });

    forecastMinTemp.forEach(element => {
        let newTempF = element.textContent.split(' °F')[0];
        element.textContent = switchTempC(newTempF) + ' °C';
    })

    currTemp.textContent = switchTempC(cCurrTemp) + ' °C';
    feelsLike.textContent = switchTempC(cFeelsLike) + ' °C';
    windSpd.textContent = switchMi(cWindSpd) + ' Km/h';
    maxTemp.textContent = switchTempC(cMaxTemp) + ' °C';
    minTemp.textContent = switchTempC(cMinTemp) + ' °C';
}

export { imperial, metric }