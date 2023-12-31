var time_in_minutes = 1.10;
var current_time = Date.parse(new Date());
var deadline = new Date(current_time + time_in_minutes*60*1000);


function time_remaining(endtime){
	var t = Date.parse(endtime) - Date.parse(new Date());
	var seconds = Math.floor( (t/1000) % 60 );
	var minutes = Math.floor( (t/1000/60) % 60 );
	var hours = Math.floor( (t/(1000*60*60)) % 24 );
	var days = Math.floor( t/(1000*60*60*24) );
	return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
}

var timeinterval;
function run_clock(id,endtime){
	var clock = document.getElementById(id);
	function update_clock(){
		var t = time_remaining(endtime);
		clock.innerHTML = t.minutes+' : '+t.seconds;
		
		if(t.total<=0){ 

			document.getElementById("time").innerHTML = `The game finished ,It took you ${guesses} guesses and you did not guess the answer was ${answer}.`;
     
          document.getElementById("head").style.display="none"; 
		}
	}
	update_clock(); // run function once at first to avoid delay
	timeinterval = setInterval(update_clock,1000);
}
run_clock('time',deadline);


var paused = false; // is the clock paused?
var time_left; // time left on the clock when paused
document.getElementById("resume").style.display="none";

function pause_clock(){
	if(!paused){
		paused = true;
		clearInterval(timeinterval); // stop the clock
		time_left = time_remaining(deadline).total; // preserve remaining time
		document.getElementById("head").style.display="none";
		document.getElementById("pause").style.display="none";
		document.getElementById("resume").style.display="block";
	}
}

function resume_clock(){
	if(paused){
		paused = false;

		// update the deadline to preserve the amount of time remaining
		deadline = new Date(Date.parse(new Date()) + time_left);

		// start the clock
		run_clock('time',deadline);
		document.getElementById("head").style.display="block";
		document.getElementById("pause").style.display="block";
		document.getElementById("resume").style.display="none";
	}
}

// handle pause and resume button clicks
document.getElementById('pause').onclick = pause_clock;
document.getElementById('resume').onclick = resume_clock;

/*
function hideButton(){
	if(paused==true){
		document.getElementById("pause").style.display="none";
	}else{
		document.getElementById("resume").style.display="none";
	}
}
*/

