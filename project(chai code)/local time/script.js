const clock = document.querySelector(".clock");

// console.log(date.toLocaleTimeString());

setInterval( () =>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);