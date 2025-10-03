let selectRotary = new Rotary(document.querySelector("#select"));
let moveRotary = new Rotary(document.querySelector("#move"));
let aimRotary = new Rotary(document.querySelector("#aim"));

let markers = document.getElementsByClassName("marker");

setMarkerPosition(markers[2], selectRotary.center.x, selectRotary.center.y);

function setMarkerPosition(marker, x, y) {
    marker.style.translate = `${x}px ${y}px`;
}