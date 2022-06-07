// let colorPicker;
let color;
color = '#000000';
let previousState;
let stateIndex = 0;


function setup() {
  createCanvas(500, 500);
  strokeWeight(10);
    // save state at the beginning for blank canvas 
    // saveState();

}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(color);
  return false;
}

const handleUndoClick = e => {
    e.preventDefault(); 
    console.log('undo')
    const $text = document.querySelector('.clicked');
    $text.textContent= 'clicked'
}

// const handlePencilClick = e => {
//     e.preventDefault();
//     console.log('pencil');
//     touchMoved();
// }

const handleColorChange = e => {
    e.preventDefault();
    console.log(e.target.value);
    color= e.target.value;
}

const init = () => {
    const $undo = document.querySelector('.undo')
    $undo.addEventListener('click', handleUndoClick);
    const $color = document.querySelector('.color');
    $color.addEventListener('touch', handleColorChange);
    // const $pencil = document.querySelector('.pencil');
    // $pencil.addEventListener('click', handlePencilClick);
}

init();