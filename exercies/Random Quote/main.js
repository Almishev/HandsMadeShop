var btn = document.getElementById("btn");
var prevBtn = document.querySelector('#btn1');
var nextBtn = document.querySelector('#btn2');
var output = document.getElementById("output");
var currentItem = 0;
var item;

var quotes = [
     "Albert Einstein- 'We cannot solve problems with the kind of thinking we employed when we came up with them'",
     "Mark Twain- 'Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.'",
     "Eleanor - 'When you give joy to other people, you get more joy in return. You should give a good thought to happiness that you can give out.'",
     "Norman Vincent Peale -' When you change your thoughts, remember to also change your world.'",
     "Walter -'It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest. '",
     "Diane McLaren - 'Nature has given us all the pieces required to achieve exceptional wellness and health, but has left it to us to put these pieces together.'",
     "Dale Carnegie -'Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.'",
     ];

    btn.addEventListener("click",function(){
          var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
          output.innerHTML = randomQuote;
    });  

    nextBtn.addEventListener('click', function () {
      currentItem++;
      if (currentItem > quotes.length - 1) {
        currentItem = 0;
      }
       item = quotes[currentItem];
      output.innerHTML = item;
    });

    prevBtn.addEventListener('click', function () {
      currentItem--;
      if (currentItem < 0) {
        currentItem = quotes.length - 1;
      }
         item = quotes[currentItem];
      output.innerHTML = item;
    });