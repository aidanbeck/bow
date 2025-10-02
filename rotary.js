let rotaryUI = document.getElementById("rotaryUI");
let movements = document.getElementById("movements");

let touchOn = false;

rotaryUI.ontouchstart = () => {
    !touchOn && (rotaryUI.style.backgroundColor = "lightblue");
}

rotaryUI.ontouchend = () => {
    rotaryUI.style.backgroundColor = "black";
}

rotaryUI.ontouchmove = () => {
    movements.innerHTML++;
}


document.ontouchstart = () => {
    touchOn = true;
}

document.ontouchend = () => {
    touchOn = false;
}