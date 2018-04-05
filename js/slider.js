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
requestAnimationFrame(moveLeft);

/* PRZESUWANE SLIDERA */
function moveLeft(time){
    console.log(time);
    let start_time = Date.now();
    let el_left = [];
    let sliders = document.querySelectorAll("div[class=slider]");
    for(let i = 1; i <=sliders.length; i++){
        el_left[i-1] = document.getElementById("slider" + i).offsetLeft;
    }
   // console.log(el_left);

    let interval = setInterval( function() {
    let passed_time = (Date.now() - start_time) / 1000 ;
    console.log(passed_time);
    if (passed_time > 1) passed_time = 1;   
    
    for(let i=1; i <= sliders.length; i++){
        let el = document.getElementById("slider" + i);
        el.style.left = el_left[i-1] - (passed_time * el.offsetWidth) + "px" ;
        if((el.offsetLeft + el.offsetWidth) <= 0){
           clearInterval(interval);
           setTimeout(function(){
            el.style.left = el.offsetLeft + (sliders.length * el.offsetWidth) + "px";
            requestAnimationFrame(moveLeft);
        }, 5000);
        } 
    }
    
}, 10); 
}


