function setup() {
  createCanvas(displayWidth, displayHeight);
  strokeWeight(10);
  stroke(0);
}

function draw() {
  line(mouseX, mouseY, pmouseX, pmouseY);
  return false;
}