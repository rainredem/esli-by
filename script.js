const firstScreen = document.querySelector(".screen-1");


firstScreen.addEventListener("mousemove",(e)=>{


const rect = firstScreen.getBoundingClientRect();


const x = e.clientX - rect.left;

const y = e.clientY - rect.top;



firstScreen.style.background =

`
radial-gradient(circle at ${x}px ${y}px,
rgba(255,120,40,.45),
transparent 18%),

#101010
`;


});







const star = document.getElementById("dragStar");

const leftPhoto = document.querySelector(".photo-left");

const rightPhoto = document.querySelector(".photo-right");


let drag = false;



star.addEventListener("mousedown",()=>{

drag=true;

});



window.addEventListener("mouseup",()=>{

drag=false;

});



window.addEventListener("mousemove",(e)=>{


if(!drag)return;


const section=document.querySelector(".screen-2");

const rect=section.getBoundingClientRect();



let x=e.clientX-rect.left;

let y=e.clientY-rect.top;



star.style.left=x+"px";

star.style.top=y+"px";



if(x>650){

leftPhoto.style.filter="grayscale(1)";

rightPhoto.style.filter="grayscale(0)";

}

else{

leftPhoto.style.filter="grayscale(0)";

rightPhoto.style.filter="grayscale(1)";

}


});
