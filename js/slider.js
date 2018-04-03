"use strict";

/* TWORZENIE SLIDÓW */
function sliderInit(sliders){
 for(let i = 1; i <= sliders; i++){
     let div = document.createElement("div");
     let header = document.getElementById("slider_container");
     div.id = "slider" + i;
     div.classList.add("slider");

     div.style.left = (100*i) - 100 +"%";
     div.style.position = "absolute";
     div.style.width = 100 + "%";
     div.style.height = 100 + "vh";
     div.style.cssFloat = "left"; 
       
     header.appendChild(div); 
 }
}
sliderInit(4);
moveLeft();

/* PRZESUWANE SLIDERA */
function moveLeft(){
    let start_time = Date.now(); 
    let interval = setInterval( function() {
    let passed_time = Date.now() - start_time;
    let sliders = document.querySelectorAll("div[class=slider]");
    let last = sliders[sliders.length-1];
    for(let i=1; i <= sliders.length; i++){
        let el = document.getElementById("slider" + i);
        el.style.left = el.offsetLeft - (passed_time / 100) + "px" ;
        if((el.offsetLeft + el.offsetWidth) <= 0){
           clearInterval(interval);
           setTimeout(function(){
               console.log(el.offsetLeft);
               console.log(sliders.length);
               console.log(el.offsetLeft + (sliders.length * el.offsetWidth));
            el.style.left = el.offsetLeft + (sliders.length * el.offsetWidth) + "px";
            moveLeft();
        }, 5000);
        }
    }
    
}, 10); 
}