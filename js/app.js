const playPauseButton = document.querySelector('#button-play-pause');
const resetButton = document.querySelector('#button-reset');
let [seconds, minutes, hours] = [0, 0, 0];
let timeInterval;
let timerStatus = 'paused';

const setTimeFormat = (timeUnit) => {
    return timeUnit < 10 ? '0' + timeUnit : timeUnit;
}

const updateTimer = () => {
    seconds++;
    if ((seconds / 60) === 1) {
        seconds =  0;
        minutes++;
        if ((minutes / 60) === 1) {
            minutes = 0;
            hours++;
        }
    }
    const formattedSeconds = setTimeFormat(seconds);
    const formattedMinutes = setTimeFormat(minutes);
    const formattedHours = setTimeFormat(hours);
    const timer = document.getElementById('timer');
    timer.innerText = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

playPauseButton.addEventListener('click', function() {
    if (timerStatus == 'paused') {
        timeInterval = window.setInterval(updateTimer, 1000);
        document.getElementById('button-play-pause').innerHTML = `<i class='bx bx-pause bx-md' id='button-play-pause'></i>`;
        playPauseButton.classList.remove('play');
        playPauseButton.classList.add('pause');
        timerStatus = 'on';
    } else {
        window.clearInterval(timeInterval);
        document.getElementById('button-play-pause').innerHTML = `<i class='bx bx-play bx-md' id='button-play-pause'></i>`;
        playPauseButton.classList.remove('pause');
        playPauseButton.classList.add('play');
        timerStatus = 'paused';
    }
});

resetButton.addEventListener('click', function() {
    window.clearInterval(timeInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('timer').innerHTML = '00:00:00';
    document.getElementById('button-play-pause').innerHTML = `<i class='bx bx-play bx-md' id='button-play-pause'></i>`;
    playPauseButton.classList.remove('pause');
    playPauseButton.classList.add('play');
    timer = 'paused';
});