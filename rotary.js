let markers = document.getElementsByClassName("marker");

setMarkerPosition(markers[2], origin.x, origin.y);

function setMarkerPosition(marker, x, y) {
    marker.style.translate = `${x}px ${y}px`;
}

function setRotaryBackgroundColor(r, g, b) {
    let middleOfSpectrum = 256 / 2;

    r += middleOfSpectrum;
    g += middleOfSpectrum;
    b += middleOfSpectrum;

    rotaryUI.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}