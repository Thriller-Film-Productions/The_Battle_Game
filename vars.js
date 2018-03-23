assets = {};

gameData = {
  page:0
};

const load = (things, index) => {
  if (things[index].type = "image") {
    assets[things[index].name] = loadImage(things[index].path, () => {
      if (index < things.length) {
        load(things, index++);
      } else {
        gameData.page = 1;
      }
    })
  }
}
