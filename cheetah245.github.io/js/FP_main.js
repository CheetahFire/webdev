



const uno = document.getElementById("blue-gradient-uno");
const uno_back = document.getElementById("red-gradient-uno");
const dos = document.getElementById("blue-gradient-dos");
const tres = document.getElementById("blue-gradient-tres");
let currentRotate_uno = 0;
let nextRotate_uno = 0;
let currentRotate_dos = 0;
let nextRotate_dos = 0;
let currentRotate_tres = 0;
let nextRotate_tres = 0;

function rotateGradient_uno() {
    currentRotate_uno = nextRotate_uno;
    uno.style.transform = 'rotate(' + currentRotate_uno + 'deg)';
    uno_back.style.transform = 'rotate(' + currentRotate_uno/3.6 + 'deg)';

    nextRotate_uno = currentRotate_uno + 1;
}
function rotateGradient_dos() {
    currentRotate_dos = nextRotate_dos;
    dos.style.transform = 'rotate(' + currentRotate_dos + 'deg)';
    nextRotate_dos = currentRotate_dos + 1;
}
function rotateGradient_tres() {
    currentRotate_tres = nextRotate_tres;
    tres.style.transform = 'rotate(' + currentRotate_tres + 'deg)';
    nextRotate_tres = currentRotate_tres + 1;
}


var intervalID = window.setInterval(rotateGradient_uno, 5);
var intervalID = window.setInterval(rotateGradient_dos, 5);
var intervalID = window.setInterval(rotateGradient_tres, 5);

const alwan = new Alwan('#color-picker', {

});

alwan.on('change', (ev) => {
    ev.hex;
    console.log(ev.hex);
    for (const red of document.getElementsByClassName("red")) {
        red.style.setProperty('--gradient-color-1', `${ev.hex}`);
    };

});