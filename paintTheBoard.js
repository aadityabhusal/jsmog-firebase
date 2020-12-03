import { path, innerPaths, stars, colors, tileSize } from "./constants.js";

export const paintTheBoard = (context) => {
  let height = context.canvas.height;
  let width = context.canvas.width;

  context.clearRect(0, 0, width, height);

  context.strokeStyle = "#bdc3c7";
  context.lineWidth = 5;
  context.strokeRect(0, 0, width, height);
  context.lineWidth = 2;

  // for (let i = 0; i < 15; i++) {
  //   for (let j = 0; j < 15; j++) {
  //     context.strokeStyle = "#dddddd";
  //     context.strokeRect(i * tileSize, j * tileSize, tileSize, tileSize);
  //     context.strokeText(i + "," + j, i * tileSize + 10, j * tileSize + 10);
  //   }
  // }

  for (const tile of path) {
    context.strokeRect(
      tile[0] * tileSize,
      tile[1] * tileSize,
      tileSize,
      tileSize
    );
  }

  for (const tile of stars) {
    let x = tile[0] * tileSize;
    let y = tile[1] * tileSize;

    let star = new Image();
    star.src = "assets/star.png";
    context.drawImage(star, x + 5, y + 5, tileSize - 10, tileSize - 10);
  }

  paintInnerPath(context, "blue");
  paintInnerPath(context, "red");
  paintInnerPath(context, "green");
  paintInnerPath(context, "yellow");
};

function paintInnerPath(context, color) {
  let path = innerPaths[color];
  for (const tile of path) {
    let x = tile[0] * tileSize;
    let y = tile[1] * tileSize;

    context.strokeStyle = colors[color];
    context.strokeRect(x, y, tileSize, tileSize);
  }
}
