import { bluePath, greenPath, path, redPath, yellowPath } from "./path.js";

export const paintTheBoard = (context, tileSize, colors) => {
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

  for (const tile of bluePath) {
    let x = tile[0] * tileSize;
    let y = tile[1] * tileSize;

    context.fillStyle = colors["blue"];
    context.fillRect(x, y, tileSize, tileSize);
    context.strokeStyle = "#bdc3c7";
    context.strokeRect(x, y, tileSize, tileSize);
  }
  for (const tile of redPath) {
    let x = tile[0] * tileSize;
    let y = tile[1] * tileSize;

    context.fillStyle = colors["red"];
    context.fillRect(x, y, tileSize, tileSize);
    context.strokeStyle = "#bdc3c7";
    context.strokeRect(x, y, tileSize, tileSize);
  }
  for (const tile of greenPath) {
    let x = tile[0] * tileSize;
    let y = tile[1] * tileSize;

    context.fillStyle = colors["green"];
    context.fillRect(x, y, tileSize, tileSize);
    context.strokeStyle = "#bdc3c7";
    context.strokeRect(x, y, tileSize, tileSize);
  }
  for (const tile of yellowPath) {
    let x = tile[0] * tileSize;
    let y = tile[1] * tileSize;

    context.fillStyle = colors["yellow"];
    context.fillRect(x, y, tileSize, tileSize);
    context.strokeStyle = "#bdc3c7";
    context.strokeRect(x, y, tileSize, tileSize);
  }
};
