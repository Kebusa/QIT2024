
const time = document.getElementById('time')
const startButton = document.getElementById('startButton')
const resetButton = document.getElementById('resetButton')

let countTime = 0
let isRuning = false

startButton.addEventListener('click', () => {
    if (!isRuning) {
        startTimer()
        startButton.textContent = "STOP"
    }else{
        stopTimer()
        startButton.textContent = "CONTINE"
    }
})

function startTimer() {
    isRuning = true
    intervalTime = setInterval(() => {
        countTime++
        displayTime()
    },1000)
}

function stopTimer() {
    isRuning = false
    clearInterval(intervalTime)
}

resetButton.addEventListener('click', () => {
    resetTimer()
})

function resetTimer() {
    stopTimer()
    startButton.textContent = "START"
    time.textContent = "00:00"
    countTime = 0
}
function displayTime() {
    const minutes = Math.floor(countTime / 60)
    const seconds = countTime % 60
    time.textContent = `${padZero(minutes)}:${padZero(seconds)}`
}
function padZero(number) {
    if (number < 10) {
        `0${number}`
    }
    else{
       number
    }
}