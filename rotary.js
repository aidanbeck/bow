document.body.style.overflow = 'hidden'; // prevent scrolling

let rotaryUI = document.getElementById("rotaryUI");
let movements = document.getElementById("movements");

rotaryUI.ontouchstart = () => {
    rotaryUI.style.backgroundColor = "lightgray";
}

rotaryUI.ontouchend = () => {
    rotaryUI.style.backgroundColor = "black";
}

rotaryUI.ontouchmove = () => {
    movements.innerHTML++;
}