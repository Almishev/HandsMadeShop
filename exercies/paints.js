var priceArray = document.getElementsByClassName("item");
var priceJews = document.getElementsByClassName("jew");

arr =[];


function buy(element){

            arr.push(element);

            document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
            if(element===19){
                const para = document.createElement("span");
                para.innerHTML = "LemonThree 19$.";
                var elem =  document.getElementById("totalBox").appendChild(para);
                priceArray[0].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceArray[0].style.display = "block";

                });
                

            }
            if(element===16){
                const para = document.createElement("span");
                para.innerHTML = "SmallLemon 16$.";
               var elem = document.getElementById("totalBox").appendChild(para);
                priceArray[1].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceArray[1].style.display = "grid";

                });
                
            }
            if(element===40){
                const para = document.createElement("span");
                para.innerHTML = "Pinkgirl 16$.";
              var elem = document.getElementById("totalBox").appendChild(para);
                priceArray[2].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceArray[2].style.display = "grid";

                });
            }
            if(element===12){
                const para = document.createElement("span");
                para.innerHTML = "RedPeper 12$.";
              var elem=  document.getElementById("totalBox").appendChild(para);
                priceArray[3].style.display = "none";
                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceArray[3].style.display = "grid";

                });
            }
            if(element===25){
                const para = document.createElement("span");
                para.innerHTML = "SmallТomates 25$.";
               var elem = document.getElementById("totalBox").appendChild(para);
                priceArray[4].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceArray[4].style.display = "grid";

                });
            }
            if(element===10){
                const para = document.createElement("span");
                para.innerHTML = "VillageHouse 10$.";
              var elem =  document.getElementById("totalBox").appendChild(para);
                priceArray[5].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceArray[5].style.display = "grid";

                });
            }
            if(element===17){
                const para = document.createElement("span");
                para.innerHTML = "JewerOne 17$.";
               var elem = document.getElementById("totalBox").appendChild(para);
                priceJews[0].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceJews[0].style.display = "grid";

                });

            }
            if(element===29){
                const para = document.createElement("span");
                para.innerHTML = "JewerTwo 29$.";
             var elem =   document.getElementById("totalBox").appendChild(para);
                priceJews[1].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);

                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceJews[1].style.display = "grid";

                });
            }
            if(element===21){
                const para = document.createElement("span");
                para.innerHTML = "JewerThree 21$.";
              var elem =  document.getElementById("totalBox").appendChild(para);
                priceJews[2].style.display = "none";

                const bt = document.createElement("button");
                bt.innerText = "x";
                document.getElementById("totalBox").appendChild(bt);
                bt.addEventListener('click',function(){
                    document.getElementById("totalBox").removeChild(para);
                    document.getElementById("totalBox").removeChild(bt);
                    arr.pop(element);
                    document.getElementById("total").innerHTML = `Yor total is ${sumTotal(arr)} $`;
                    priceJews[2].style.display = "grid";
                });
               
            }
              
    } 


 function sumTotal(arr) {
        let totalNumber = 0;
        for (let i=0 ; i< arr.length; i++) {
           totalNumber+=arr[i];
        }
        return totalNumber;
      }



function order(){
        if(sumTotal(arr) > 0){
            document.getElementById("formm").style.display = "block";
            

        } else{
            document.getElementById("total").innerHTML = "Your bag is empty."
        }
    }

    function end(){
        document.getElementById("total").style.width = "300px"
        document.getElementById("formm").style.display = "none";
        document.getElementsByClassName("items")[0].style.display="none";
        document.getElementById("order").style.display = "none";
        document.querySelector('nav').style.display = 'none';
        document.getElementById("total").innerHTML = `Thank you for shopping!!`;
        document.getElementsByClassName("jews")[0].style.display = "none";
        document.getElementById("totalBox").style.display = "none";
    }

    function showPaints (){
         document.getElementsByClassName("items")[0].style.display="grid";
         document.getElementsByClassName("jews")[0].style.display="none";
         

    }

    function showJews (){
        document.getElementsByClassName("jews")[0].style.display="grid";
        document.getElementsByClassName("items")[0].style.display="none";

   }
 
   function goHome(){
        document.getElementById("total").style.visibility = "visible";
        document.getElementById("formm").style.display = "none";
        document.getElementsByClassName("items")[0].style.display="none";
        document.querySelector('nav').style.display = "grid";
        document.getElementById("total").style.display="block";
        document.getElementsByClassName("jews")[0].style.display = "none";
   }

   function remove(el) {
    var element = el;
    element.remove();
  }


   
   