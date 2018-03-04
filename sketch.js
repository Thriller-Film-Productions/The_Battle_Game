function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#container");
}

function draw() {
  background(random(0, 255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
