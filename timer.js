
const greetings = document.getElementById('Start')
timerButton.addEventListener('click',changeText)

const timerButton = document.getElementById('timer-button')
const hourElement = document.getElementById('hour')
const minElement = document.getElementById('min')
const secondsElement = document.getElementById('seconds')
const timelogsElement =document.getElementById('timelogs')
function runTimer() {
    if(timerButton.textContent === 'Start') { //Start
        timerButton.textContent = 'Stop'
        timerButton.style.setProperty('background-color', 'tomato')
        startTimer()
    } else { // Stop
        timerButton.textContent = 'Start'
        timerButton.style.setProperty('background-color', 'rgb(9, 159, 9)')
        stopTimer()
    }
}
function startTimer() {
    let s = 1 // seconds
    let m = 0 // minutes
    let h = 0 // hours
    setInterval(function() {
        secondsElement.textContent = (s++).toString().padStart(2, '0')
    },1000)

    if (s == 59) {
        s = 0;
        if (m == 59) {
            m = 0;
            hourelement.textContent = (h++).toString().padStart(2, '0');
            h++;
        } else {
            m++;
        }
    }
    minutelement.textContent = m.toString().padStart(2, '0'); // Display minutes outside the if block
    s++;
} 1000;


    

function stopTimer() {
    clearInterval(timerInterval);
     timelogsElement.innerHTML=
     <p>${hourElement.yt</p>
}
function resetTimer() {
    clearInterval(timerInterval);
    h = 0;
    m = 0;
    s = 0;
    hourelement.textContent = '00';
    minutelement.textContent = '00';
    secondscelement.textContent = '00';
}
timerButton.addEventListener('click', runTimer)





