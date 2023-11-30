



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
    uno.style['-moz-transform'] = 'rotate(' + currentRotate_uno + 'deg)';
    uno.style.transform = 'rotate(' + currentRotate_uno + 'deg)';
    
    uno_back.style.transform = 'rotate(' + currentRotate_uno / 3.6 + 'deg)';
  
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


var intervalID = setInterval(rotateGradient_uno, 5);
var intervalID = setInterval(rotateGradient_dos, 10);
var intervalID = setInterval(rotateGradient_tres, 15);

const alwan = new Alwan('#color-picker', {
    color: 'white'
});
const alwan2 = new Alwan('#color-picker2', {
    color: 'white'
});
const alwan3 = new Alwan('#color-picker3', {
    color: 'white'
});
const alwan4 = new Alwan('#color-picker4', {
    color: 'white'
});
const alwan5 = new Alwan('#color-picker5', {
    color: 'white'
});
const alwan6 = new Alwan('#color-picker6', {
    color: 'white'
});
const alwan7 = new Alwan('#color-picker7', {
    color: 'white'
});
const alwan8 = new Alwan('#color-picker8', {
    color: 'white'
});

alwan.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-1', `${ev.hex}`);
});
alwan2.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-2', `${ev.hex}`);
});
alwan3.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-3', `${ev.hex}`);
});
alwan4.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-4', `${ev.hex}`);
});
alwan5.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-5', `${ev.hex}`);
});
alwan6.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-6', `${ev.hex}`);
});
alwan7.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-7', `${ev.hex}`);
});
alwan8.on('change', (ev) => {
    ev.hex;
    document.documentElement.style.setProperty('--gradient-color-8', `${ev.hex}`);
});

