
const answer = Math.floor(Math.random() * 100 + 1);
let guesses = 0;

/*
const startedMinutes= 1;
const pauseBtn = document.querySelector("#btnPause");

let time = startedMinutes * 60;

const timer = document.getElementById("time");
var timerId = setInterval(updateTme,1000);



function updateTme(){
  if(time>0){
  const minutes = Math.floor(time/60);
  let seconds = time % 60;
  timer.innerHTML = (`${minutes} : ${seconds}`);
  time--;
  if(time<11){
    timer.style.color="red";
  }
  } else{
    timer.innerHTML = `The game finished ,It took you ${guesses} guesses and you did not guess the answer was ${answer}.`;
     
     document.getElementById("head").style.display="none";
  }
  
}
*/

document.getElementById("submitButton").onclick = function (){
  if(document.getElementById("guessField").value==""){
    document.getElementById("answer").innerHTML="You did not enter anything.";
  }
  else if(isNaN(document.getElementById("guessField").value)){
    document.getElementById("answer").innerHTML=" isn't a number!";
  }
  else{

  let guess = document.getElementById("guessField").value
  guesses+=1;
  
  if(guess == answer){
    document.getElementById("answer").innerHTML= (`${answer} is the Number. It took you ${guesses} guesses`);
    stopCount();
  }
  else if(guess < answer){
    document.getElementById("answer").innerHTML="TOO SMALL";
  }
  else{
    document.getElementById("answer").innerHTML="TOO BIG";
  }
}
}

function refresh(){
  window.location.reload();
}

function close(){
  window.top.close();
}

function stopCount() {
  clearInterval(timerId)
}


