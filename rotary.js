let markers = document.getElementsByClassName("marker");
let rotaryUI = document.getElementById("rotaryUI");

let touch = {
    on: false,
    start:    { x: 0, y: 0 },
    position: { x: 0, y: 0 } // current position
}

var rotaryCoordinates = rotaryUI.getBoundingClientRect();
let origin = {
    x: rotaryCoordinates.x + (rotaryCoordinates.width / 2),
    y: rotaryCoordinates.y + (rotaryCoordinates.height / 2)
}
setMarkerPosition(markers[2], origin.x, origin.y);

/*
    Toggle `touch.on` when anywhere on document is touched.
    This allows us to check if a touch has already started.
*/
document.ontouchstart = () => {
    touch.on = true;
}
document.ontouchend = () => {
    touch.on = false;
}


// Touching within the rotary
rotaryUI.ontouchstart = (event) => {
    if (!touch.on) {
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
    setMarkerPosition(markers[1], touch.position.x, touch.position.y);
}

function setTouchStart(event) {
    firstTouch = event.touches[0];
    touch.start.x = firstTouch.clientX;
    touch.start.y = firstTouch.clientY;

    setMarkerPosition(markers[0], touch.start.x, touch.start.y); // Start
    setMarkerPosition(markers[1], touch.start.x, touch.start.y); // Current
}

function setRotaryBackgroundColor(r, g, b) {
    let middleOfSpectrum = 256 / 2;

    r += middleOfSpectrum;
    g += middleOfSpectrum;
    b += middleOfSpectrum;

    rotaryUI.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function setMarkerPosition(marker, x, y) {
    marker.style.translate = `${x}px ${y}px`;
}