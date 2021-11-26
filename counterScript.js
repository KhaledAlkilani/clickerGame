let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let timerEl = document.getElementById("timer-count")

let count = 0
let hScore = 10
let aikaCount = 60;
let time = aikaCount * 60;

function clicker(){
    countEl.textContent = count += 1
    for(let i = 0; i < count.length; i++){
    if(aikaCount === 0){
        let countStr = count
        saveEl.textContent = "You won, your score: " + countStr
        count++
        aloitaTimer()
        clearInterval()
    }        
    }
    }

function reload(){
    window.location.reload()
}

let timeId = setInterval(aloitaTimer, 200)

function aloitaTimer(){
    console.log(--aikaCount)
    
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timerEl.innerHTML =  "00" + ":" +  seconds;
    time--;
    //timerEl.innerHTML = aikaCount;
    
    if(seconds === 0){
        clearInterval(timeId)
        timerEl.innerHTML = ("00:00")
        
    
}
}