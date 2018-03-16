function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#container");
}

function draw() {
  image(assets.start, 0, 0, width, height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload() {
  assets.start = loadImage("assets/start.png");
}
