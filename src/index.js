import { getLocation } from './location'

const inputLocation = document.getElementById('location');
const searchBtn = document.getElementById('search');
const errText = document.getElementById('err-text');


inputLocation.addEventListener('keypress', (e) => {
    const query = inputLocation.value;

    if(e.key === 'Enter') {
        if(query === '') {
            errText.textContent = 'Invalid input'
        } else {
            getLocation(query);
            inputLocation.value = '';
            errText.textContent = ''
        }

    }

})

searchBtn.addEventListener('click', () => {
    const query = inputLocation.value;

    getLocation(query);
    inputLocation.value = '';
})
