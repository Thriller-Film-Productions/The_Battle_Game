function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).parent("#container");
  load([{
    type: "image",
    name: "start",
    path: "assets/start.png"
  }])
}

function draw() {
  if (gameData.page === 0) {

  } else if (gameData.page === 1) {
    image(assets.start, 0, 0, width, height);
    fill("#c46200");
    rectMode(CENTER);
    noStroke();
    rect(width / 2, height / 2, width / 8, height / 12);
    fill("#c400c4");
    textSize(width / 54);
    text("Join game", width / 2 - textWidth("Join game") / 2, height / 2 + width / 108);
    fill("#c46200");
    rectMode(CENTER);
    noStroke();
    rect(width / 2, height / 2 - height / 8, width / 8, height / 12);
    fill("#c400c4");
    textSize(width / 54);
    text("Create game", width / 2 - textWidth("Create game") / 2, height / 2 - height / 8 + width / 108);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
