"use strict";

function sliderInit(sliders){
 for(let i = 1; i <= sliders; i++){
     let div = document.createElement("div");
     let header = document.getElementById("slider_container");
     div.id = "slider" + i;
     div.classList.add("slider");
     header.appendChild(div); 
 }
}
sliderInit(2);
var slider = document.getElementById("slider1");

slider.addEventListener("click", function moveLeft(){
    let sliders = document.querySelectorAll("div[class=slider]");
    //console.log(sliders);
    for(let i=1; i <= sliders.length; i++){
       // console.log(sliders[i]);
        let el = document.getElementById("slider" +i);
        console.log(el);
       let slider_width = parseInt(window.getComputedStyle(el).getPropertyValue("width"));
       let slider_left = parseInt(window.getComputedStyle(el).getPropertyValue("left"));
       let slider_current_left = el.offsetLeft;
       el.style.left = slider_left - slider_width + "px" ;
    }
});