import { getLocation } from './location';
import { imperial, metric } from './metric-imperial';

const inputLocation = document.getElementById('location');
const searchBtn = document.getElementById('search');
const errText = document.getElementById('err-text');
const switchBtn = document.getElementById('imperial');


inputLocation.addEventListener('keypress', (e) => {
    const query = inputLocation.value;

    if(e.key === 'Enter') {
        if(query === '') {
            errText.textContent = 'Invalid input';
        } else {
            getLocation(query);
            inputLocation.value = '';
            errText.textContent = '';
            switchBtn.textContent = 'Imperial';
        }
    }
})

searchBtn.addEventListener('click', () => {
    const query = inputLocation.value;

    if(query === '') {
        errText.textContent = 'Invalid Input';
    } else {
        getLocation(query);
        inputLocation.value = '';
        errText.textContent = '';
        switchBtn.textContent = 'Imperial';
    }
})

switchBtn.addEventListener('click', (e) => {
    if(switchBtn.textContent === 'Imperial') {
        switchBtn.textContent = 'Metric';
        imperial()
    } else {
        switchBtn.textContent = 'Imperial';
        metric()
    }
})