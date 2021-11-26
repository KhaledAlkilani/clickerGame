let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let timerEl = document.getElementById("timer-count")

let count = 0
let aikaCount = 60;
let time = aikaCount;// * 60;

function clicker(){
    if(aikaCount <= 0){
        saveEl.textContent = "Your score: " + count
        return;
    }       
    countEl.textContent = ++count
    }
    

function reload(){
    window.location.reload()
}

let timeId = setInterval(aloitaTimer, 200)

function aloitaTimer(){
    console.log(--aikaCount)
    
    let seconds = aikaCount % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    timerEl.innerHTML =  "00" + ":" +  seconds;
    time--;
    //timerEl.innerHTML = aikaCount;
    
    if(seconds === "00"){
        clearInterval(timeId)
        timerEl.innerHTML = ("00:00") 
    }
}