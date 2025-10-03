let rotaryUI = document.getElementById("rotaryUI");

// Get & mark origin of rotary
var rotaryRectangle = rotaryUI.getBoundingClientRect();

let center = {
    x: rotaryRectangle.x + (rotaryRectangle.width / 2),
    y: rotaryRectangle.y + (rotaryRectangle.height / 2),
}

let origin = {
    x: rotaryRectangle.x,
    y: rotaryRectangle.y
}

// Information about Touch interaction
let touch = {
    on: false,
    start:    { x: 0, y: 0 },
    position: { x: 0, y: 0 } // current position
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

    let touchWidth = touch.position.x - origin.x;
    let touchHeight = touch.position.y - origin.y;
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

/*
    Toggle `touch.on` when anywhere on document is touched.
    This allows us to check if a touch has already started.
*/
document.ontouchstart = () => touch.on = true;
document.ontouchend = () => touch.on = false;