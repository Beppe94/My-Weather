
function switchTempF(celsius) {
    const newC = celsius * 9 / 5 + 32;
    return newC.toString().substring(0,4);
}

function switchTempC(fahrenheit) {
    const newF = (fahrenheit - 32) * 5 / 9;
    console.log(newF);
    return newF.toString().substring(0,4)
}

function switchKm(km) {
    return km * 0.621371192;
}

function switchMi(miles) {
    return miles * 1.6;
}

async function imperial() {
    const currTemp = document.getElementById('temp-celsius');
    const feelsLike = document.getElementById('feels-like');

    let newCurrTemp = currTemp.textContent.split(' °C')
    let newFeelsLike = feelsLike.textContent.split(' °C')[0];
    console.log(newFeelsLike);

    currTemp.textContent = switchTempF(newCurrTemp[0]) + ' °F';
    feelsLike.textContent = switchTempF(newFeelsLike) + ' °F'
}

async function metric() {
    const currTemp = document.getElementById('temp-celsius');
    const newCurrTemp = currTemp.textContent.split(' °F')

    currTemp.textContent = switchTempC(newCurrTemp[0]) + ' °C';
}

export { imperial, metric }