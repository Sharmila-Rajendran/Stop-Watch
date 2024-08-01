var strt = document.getElementById('start');
var lap = document.getElementById('lap');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var time = false;
var hours = 0;
var minu = 0;
var sec = 0;
var count=0;
var interval_time;

function Timer() {
    if (time) {
        sec++;
        if (sec == 60) {
            minu++;
            sec = 0;
        }
        if (minu == 60) {
            hours++;
            minu = 0;
        }

        let hour = hours < 10 ? '0' + hours : hours;
        let minute = minu < 10 ? '0' + minu : minu;
        let second = sec < 10 ? '0' + sec : sec;

        document.getElementById('hour').innerHTML = hour;
        document.getElementById('min').innerHTML = minute;
        document.getElementById('sec').innerHTML = second;
    }
}

function Start() {
    if (!time) {
        time = true;
        interval_time = setInterval(Timer, 1000);
    }
}

function Lap() {
    if (time) {
        let lapTime = document.getElementById('hour').innerHTML + ':' + document.getElementById('min').innerHTML + ':' + document.getElementById('sec').innerHTML;
        let laps = document.getElementById('laps');
        let lapElement = document.createElement('p');
        count++;
        lapElement.innerText ="Laps "+count+" : "+lapTime;
        laps.appendChild(lapElement);
    }
}

function Stop() {
    time = false;
    clearInterval(interval_time);
}

function Reset() {
    Stop();
    hours = 0;
    minu = 0;
    sec = 0;
    count=0;
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('min').innerHTML = '00';
    document.getElementById('sec').innerHTML = '00';
    document.getElementById('laps').innerHTML = '';
}
