import { DateTime } from './luxon.js';
// const dateContainer = document.querySelector('.top-info');
// const date = new Date();
// dateContainer.innerHTML = `<p><span class="date">${date.toLocaleString('en-US', { month: 'long' })} ${date.getDay()} ${date.getFullYear()}</span>, <span class="time">${date.toLocaleTimeString()}</span></p>`;

const time = document.getElementById('time')

const dt = DateTime.now()


const newDt = dt.toLocaleString(DateTime.DATETIME_MED)
console.log(newDt)
time.innerHTML = newDt;