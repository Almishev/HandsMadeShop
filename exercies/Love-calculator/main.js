

var yourName = document.getElementById("your-name");
var crushName = document.getElementById("crush-name");
    document.getElementById("ok").style.display="none";
function calculateLove() {
       yourName = document.getElementById("your-name").value;
       crushName = document.getElementById("crush-name").value;

    if (yourName != "" && crushName != "") {
        let percentage = Math.floor(Math.random() * 101); //0-.99999
        // percentage = 3;
        
        document.getElementById("result-message").innerText = yourName + " and " + crushName + "'s chance of love:";
        document.getElementById("result-percentage").innerText = percentage.toString() + "%";
        document.getElementById("ok").style.display = "";
        
    }
      
}
/*
  let conf = confirm("Are you sure?");
  if(!conf){
    alert("you make mistake.");
  }else{
    alert("Brawo man.");
  }
  */
  let data = prompt("Enter your age");
  if(data<18){
    window.close();
  };