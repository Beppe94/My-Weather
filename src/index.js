import { getLocation } from './location'

const inputLocation = document.getElementById('location');
const searchBtn = document.getElementById('search');

inputLocation.addEventListener('keypress', (e) => {
    if(e.key == 'Enter') {
        const query = inputLocation.value;

        getLocation(query);
    }
})

searchBtn.addEventListener('click', () => {
    const query = inputLocation.value;

    getLocation(query);
})

