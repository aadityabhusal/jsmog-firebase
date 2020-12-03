import {
  path,
  startingPoints,
  tileSize,
  colors,
  pathEnd,
  innerPaths,
  gameEnd,
} from "./constants.js";

function Item(data) {
  this.x = data.x;
  this.y = data.y;
  this.status = data.status;
  this.player = data.player;
  this.item = data.item;
  this.steps = data.steps;
}

export function paintItem(context, player, item, itemKey) {
  context.beginPath();
  context.fillStyle = colors[player];
  let padding = !item.status ? 20 : 0;
  let x = item.x * tileSize + 20 + padding;
  let y = item.y * tileSize + 20 + padding;
  context.arc(x, y, 16, 0, 2 * Math.PI);
  context.fill();

  return new Item({
    x,
    y,
    status: item.status,
    steps: item.steps,
    player: player,
    item: itemKey,
  });
}

export function moveItem(element, currentScore) {
  let padding = !element.status ? 20 : 0;
  element.x = (element.x - 20 - padding) / tileSize;
  element.y = (element.y - 20 - padding) / tileSize;

  if (element.status == 1) {
    let item = path.findIndex(
      (item) => item[0] == element.x && item[1] == element.y
    );
    let val = item + currentScore;
    if (element.steps + currentScore > pathEnd) {
      let remaining = element.steps + currentScore - pathEnd;
      element.x = innerPaths[element.player][remaining - 1][0];
      element.y = innerPaths[element.player][remaining - 1][1];
      element.status = 2;
      element.steps += currentScore;
    } else {
      element.x = path[val][0];
      element.y = path[val][1];
      element.steps += currentScore;
    }
  } else if (element.status == 0) {
    if (currentScore == 6) {
      element.status = 1;
      element.steps = 1;
      element.x = startingPoints[element.player][0];
      element.y = startingPoints[element.player][1];
    }
  } else if (element.status == 2) {
    if (element.steps + currentScore == gameEnd) {
      element.x = 7;
      element.y = 7;
      element.status = 3;
      element.steps = gameEnd;
    } else if (element.steps + currentScore < gameEnd) {
      let remaining = gameEnd - element.steps + currentScore;
      element.x = innerPaths[element.player][remaining - 1][0];
      element.y = innerPaths[element.player][remaining - 1][1];
      element.steps += currentScore;
    }
  }
  currentScore = null;
  return element;
}

export function clickItem(x, y, element) {
  if (
    y > element.y &&
    y < element.y + tileSize &&
    x > element.x &&
    x < element.x + tileSize
  ) {
    return true;
  }
  return false;
}
