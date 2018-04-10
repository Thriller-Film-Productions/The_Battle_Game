let assets = {};
let randColor;

gameData = {
  page: 0
};

const load = (things, index = 0) => {
  if (things[index].type === "image") {
    assets[things[index].name] = loadImage(things[index].path, () => {
      if (things[index + 1] !== undefined) {
        load(things, index++);
      } else {
        gameData.page = 1;
      }
    })
  }
}

const changeColor = () => {
  let siny = abs(sin(millis() / 500));
  if (siny >= 0.5) {
    randColor = color((hue(randColor) + siny) % 360, 255, 127);
  }
}