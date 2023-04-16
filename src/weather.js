export default async function getWeather(latitude, longitude) {
    const promise = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}0&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,visibility,windspeed_10m,windspeed_80m,winddirection_10m&current_weather=true&start_date=2023-04-16&end_date=2023-04-22`);
    const response = await promise.json();

    console.log(response);
    return response;
}