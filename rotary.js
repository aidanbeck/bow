let touchOn = false;

let rotaryUI = document.getElementById("rotaryUI");

let touch = {
    start:    { x: 0, y: 0 },
    position: { x: 0, y: 0 } // current position
}

/*
    Toggle `touchOn` when anywhere on document is touched.
    This allows us to check if a touch has already started.
*/
document.ontouchstart = () => {
    touchOn = true;
}
document.ontouchend = () => {
    touchOn = false;
}

// Touching within the rotary
rotaryUI.ontouchstart = (event) => {
    if (!touchOn) {
        rotaryUI.style.backgroundColor = "lightblue";
        touch.start.x = event.touches[0].clientX;
        touch.start.y = event.touches[0].clientY;
    }
}
rotaryUI.ontouchend = () => {
    rotaryUI.style.backgroundColor = "black";
}
rotaryUI.ontouchmove = (event) => {
    
    touch.position.x = event.touches[0].clientX;
    touch.position.y = event.touches[0].clientY;

    let touchWidth = touch.position.x - touch.start.x;
    let touchHeight = touch.position.y - touch.start.y;
    let touchDifference = touch.position.x - touch.position.y;

    let middle = 128; //middle of rgb spectrum

    touchWidth += middle;
    touchHeight += middle;
    touchDifference += middle;

    rotaryUI.style.backgroundColor = `rgb(${touchWidth}, ${touchHeight}, ${touchDifference})`;
    
}