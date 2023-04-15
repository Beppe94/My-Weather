const inputLocation = document.getElementById('location');
const searchBtn = document.getElementById('search');
const locationName = document.getElementById('location-name');
const countryName = document.getElementById('location-country');

async function getweather(cityName) {
    const promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=20f7632ffc2c022654e4093c6947b4f4`);
    const response = await promise.json();

    setName(response);
    console.log(response);
    return response;
}

function setName(data) {

    locationName.textContent = data.name;
    countryName.textContent = data.sys.country;
}

inputLocation.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        const query = inputLocation.value;

        getweather(query);
    }
})

searchBtn.addEventListener('click', () => {
    const query = inputLocation.value;

    getweather(query);
})
