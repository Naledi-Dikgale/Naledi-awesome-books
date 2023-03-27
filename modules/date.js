import { DateTime } from './luxon.js';

const time = document.getElementById('time');

const dt = DateTime.now();

const newDt = dt.toLocaleString(DateTime.DATETIME_MED);

time.innerHTML = newDt;