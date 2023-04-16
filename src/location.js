import getWeather from "./weather";

export async function getLocation(city) {
    const promise = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
    const response = await promise.json();

    getLatLon(response)
}

async function getLatLon(data) {
    const latitude = data.results[0].latitude;
    const longitude = data.results[0].longitude;
    
    await getWeather(latitude, longitude)
}
