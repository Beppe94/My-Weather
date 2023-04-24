import getWeather from "./weather";

const errText = document.getElementById('err-text');

export async function getLocation(city) {

    const promise = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=it&format=json`);
    const response = await promise.json();
    
    if(!response.results) {
        errText.textContent = 'Location Not Found';
    }

    getLatLon(response);
    setLocation(response);
}

async function getLatLon(data) {
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;
    
    await getWeather(latitude, longitude)
}


async function setLocation(data) {
    const locationName = document.getElementById('location-name');
    const locationRegion = document.getElementById('location-region');
    const locationCountry = document.getElementById('location-country');

    let admin1 = data.results[0].admin1;

    if(!admin1) {
        admin1 = '';
    }
    
    locationName.textContent = data.results[0].name;
    locationRegion.textContent = admin1
    locationCountry.textContent = data.results[0].country;
}

getLocation('Bergamo');