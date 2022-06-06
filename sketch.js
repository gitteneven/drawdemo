// let colorPicker;
let color;
color = '#000000';

function setup() {
  createCanvas(500, 500);
  strokeWeight(10);
//   colorPicker = createColorPicker('#ed225d');
//   colorPicker.position(0, height + 5);
  
}

function touchMoved() {
  line(mouseX, mouseY, pmouseX, pmouseY);
    stroke(color);

  return false;
//   background(colorPicker.color());
}

const handleUndoClick = e => {
    e.preventDefault(); 
    console.log('undo')
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
    $color.addEventListener('change', handleColorChange);
    // const $pencil = document.querySelector('.pencil');
    // $pencil.addEventListener('click', handlePencilClick);
}

init();