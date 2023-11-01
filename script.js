const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")
const stopResetBtn = document.getElementById("stop-reset")

const showTimerSpan = document.getElementById("showTimer")
let seconds = 0
let interval 

function renderTimer() {
    let h = Math.floor(seconds/3600)
    let min = Math.floor(seconds/60)% 60
    let sec = seconds % 60

    if (sec < 10) sec = '0' + sec
    if (min < 10) min = '0' + min
    if (h < 10) h = '0' + h
    
    time = `${h}:${min}:${sec}`
   
    showTimerSpan.innerHTML = time

}

function timer () {
    seconds++

    renderTimer()
}

function start () {
    if(interval){
        return
    }
    interval = setInterval(timer, 10)
}

function stop() {
    clearInterval(interval);
    interval =null
}

function stopReset() {
    stop()
    seconds = 0
    renderTimer()
}


function reset() {
    seconds = 0 
    renderTimer()
    start()

}

startBtn.addEventListener("click", start)
stopBtn.addEventListener("click", stop)
resetBtn.addEventListener("click", reset)
stopResetBtn.addEventListener("click", stopReset)
