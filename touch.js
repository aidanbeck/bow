// Information about Touch interaction
let touch = {
    on: false,
    start:    { x: 0, y: 0 },
    position: { x: 0, y: 0 } // current position
}

class Rotary {

    constructor(element) {
        this.element = element;
        this.element.ontouchstart = (event) => this.onTouchStart(event);
        this.element.ontouchmove = (event) => this.onTouchMove(event);
        this.element.ontouchend = () => this.element.style.backgroundColor = "black";



        let rotaryRectangle = element.getBoundingClientRect();
        this.origin = {
            x: rotaryRectangle.left,
            y: rotaryRectangle.top
        }
        this.center = {
            x: rotaryRectangle.x + (rotaryRectangle.width / 2),
            y: rotaryRectangle.y + (rotaryRectangle.height / 2),
        }
    }

    getTouchCoordinates(event) {
        let firstTouch = event.touches[0];
        return {
            x: firstTouch.clientX,
            y: firstTouch.clientY
        }
    }

    onTouchStart(event) {
        if (touch.on) { return; }

        let touchCoordinates = this.getTouchCoordinates(event);
        touch.start.x = touchCoordinates.x;
        touch.start.y = touchCoordinates.y;

        setMarkerPosition(markers[0], touch.start.x, touch.start.y); // Start
        setMarkerPosition(markers[1], touch.start.x, touch.start.y); // Current

    }

    onTouchMove(event) {
        let touchCoordinates = this.getTouchCoordinates(event);
        touch.position.x = touchCoordinates.x;
        touch.position.y = touchCoordinates.y;

        setMarkerPosition(markers[1], touch.position.x, touch.position.y);
        setRotaryBackgroundColor(
            touch.position.x - this.center.x, // width
            touch.position.y - this.center.y, // height
            touch.position.x - touch.position.y // difference
        );
    }

}

/*
    Toggle `touch.on` when anywhere on document is touched.
    This allows us to check if a touch has already started.
*/
document.ontouchstart = () => touch.on = true;
document.ontouchend = () => touch.on = false;