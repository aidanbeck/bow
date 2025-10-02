let touchOn = false;

let rotaryUI = document.getElementById("rotaryUI");
var rotaryCoordinates = rotaryUI.getBoundingClientRect();

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
        setTouchStart(event);
    }
}
rotaryUI.ontouchend = () => {
    rotaryUI.style.backgroundColor = "black";
}
rotaryUI.ontouchmove = (event) => {
    
    touch.position.x = event.touches[0].clientX;
    touch.position.y = event.touches[0].clientY;

    let touchWidth = touch.position.x - rotaryCoordinates.x;
    let touchHeight = touch.position.y - rotaryCoordinates.y;
    let touchDifference = touch.position.x - touch.position.y;

    setRotaryBackgroundColor(touchWidth, touchHeight, touchDifference);
}

function setTouchStart(event) {
    firstTouch = event.touches[0];
    touch.start.x = firstTouch.clientX;
    touch.start.y = firstTouch.clientY;
}

function setRotaryBackgroundColor(r, g, b) {
    let middleOfSpectrum = 256 / 2;

    r += middleOfSpectrum;
    g += middleOfSpectrum;
    b += middleOfSpectrum;

    rotaryUI.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}