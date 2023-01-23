'use strict';

// selecting elements

const timeEl = document.getElementById('time');

const dateEl = document.getElementById('date');

const monthEl = document.getElementById('month');
const toDateEl = document.getElementById('to-date');

const dayEl = document.getElementById('day');
const yearEl = document.getElementById('year');

// time elements

const hour = document.getElementById('hours');

const minute = document.getElementById('mins');

const secs = document.getElementById('seconds');

const sessions = document.getElementById('session');

// global variables

let date = 0;
let time = 0;

// creating array

let daysName = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

function getTodayDate() {
  date = new Date();
  // console.log(date);

  let today = date.getDate();
  // console.log(today);

  let weekDay = date.getDay();
  let day = daysName[weekDay];
  // console.log(day);

  let month = date.toLocaleString('default', { month: 'short' });
  // console.log(month);

  let year = date.getFullYear();
  // console.log(year);

  monthEl.innerHTML = `${month} -`;
  toDateEl.innerHTML = today;
  dayEl.innerHTML = `${day} ,`;
  yearEl.innerHTML = year;
  // dayEl.innerHTML = weekDay;

  // console.log(getFullYear);
}
getTodayDate();

// functions

// time function

function getToTime() {
  let date = new Date();

  let hours = date.getHours();
  // console.log(hours);
  let minutes = date.getMinutes();
  // console.log(minutes);

  let seconds = date.getSeconds();
  // console.log(seconds);

  let session = 'am';

  session = hours >= 12 ? 'pm' : 'am';
  // console.log(session);
  hours = hours === 0 ? (hours = 12) : hours;

  hours = hours > 12 ? hours - 12 : hours;

  hours = hours < 10 ? `0${hours}` : 'hours';

  minutes = minutes < 10 ? `0${minutes}` : minutes;

  seconds = seconds < 10 ? `0${seconds}` : seconds;

  hour.innerHTML = hours;
  minute.innerHTML = `: ${minutes}`;
  secs.innerHTML = `: ${seconds}`;
  sessions.innerHTML = ` ${session}`;
}
setInterval(getToTime, 1000);
