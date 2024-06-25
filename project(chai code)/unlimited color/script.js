let body = document.querySelector("body");
let color;
const randomColor = function(){
    const hex = "0123456789ABCDEF";
    color = "#";
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)]; 
    }
    return color;
};
let interval;
const startChangingColor = function(){
    interval = setInterval(changeColor,1000);  
    
    function changeColor(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangingColor = function(){
    clearInterval(interval);    
};

document.querySelector(".start").addEventListener("click",startChangingColor);
document.querySelector(".stop").addEventListener("click",stopChangingColor);