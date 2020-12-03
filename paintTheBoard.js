import {
  path,
  innerPaths,
  stars,
  colors,
  tileSize,
  startingPoints,
} from "./constants.js";

export const paintTheBoard = (context) => {
  let height = context.canvas.height;
  let width = context.canvas.width;

  context.clearRect(0, 0, width, height);

  context.strokeStyle = "#bdc3c7";
  context.lineWidth = 5;
  context.strokeRect(0, 0, width, height);
  context.lineWidth = 2;

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

    for (const key in startingPoints) {
      if (startingPoints.hasOwnProperty(key)) {
        if (
          startingPoints[key][0] == tile[0] &&
          startingPoints[key][1] == tile[1]
        ) {
          context.strokeStyle = colors[key];
          context.strokeRect(x, y, tileSize, tileSize);
        }
      }
    }
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
