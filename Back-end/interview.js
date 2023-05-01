//timer

const beginTimer = document.getElementById("beginBtn");
const timer = document.getElementById("timer");
const finalAnswer = document.getElementById("finalAnswer");

let seconds = 0;
let minutes = 0;
let timerInterval;

function startTimer(){
    timerInterval = setInterval(() => {
        seconds++;
    
    if (seconds === 60){
        seconds = 0;
        minutes++;
    }

    timer.innerText = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);

    if(seconds === 00 && minutes == 20){
        stopTimer();
    }else if(finalAnswer == "clicked"){
        stopTimer();
    }
}

function stopTimer()

beginTimer.addEventListener("click", startTimer);

// document.getElementById('test').style.fontSize = "2em";
// let testElement = document.querySelector('#test');

//intervjuu koostamine

function selectQuestions(){

}

//next nupu vajutamisel järgmise küsimuse andmine

function getCheckedAnswer(){

}

function nextQuestion(){

}

//valitud vastuste salvestamine


// id: 1
// time: 00:00:00
// answers: [0001-1, 0002-3, ...]
// points: 86
