let blueBx = [6, 8, 9, 14];
let redBx = [0, 5, 6, 8];
let greenBx = [6, 8, 0, 5];
let yellowBx = [9, 14, 6, 8];

if (i >= blueBx[0] && i <= blueBx[1] && j >= blueBx[2] && j <= blueBx[3]) {
  context.strokeStyle = colors["blue"];
} else if (i >= redBx[0] && i <= redBx[1] && j >= redBx[2] && j <= redBx[3]) {
  context.strokeStyle = colors["red"];
} else if (
  i >= greenBx[0] &&
  i <= greenBx[1] &&
  j >= greenBx[2] &&
  j <= greenBx[3]
) {
  context.strokeStyle = colors["green"];
} else if (
  i >= yellowBx[0] &&
  i <= yellowBx[1] &&
  j >= yellowBx[2] &&
  j <= yellowBx[3]
) {
  context.strokeStyle = colors["yellow"];
} else {
  context.strokeStyle = "#dddddd";
}

for (const initKey in initialPlayers) {
  if (initialPlayers.hasOwnProperty(initKey)) {
    let items = initialPlayers[initKey].items;

    for (const itemKey in items) {
      if (items.hasOwnProperty(itemKey)) {
        let item = items[itemKey];
        context.strokeStyle = colors[initKey];
        context.lineWidth = 5;

        // context.strokeRect(
        //   item.x * tileSize + 25,
        //   item.y * tileSize + 25,
        //   itemSize * 2,
        //   itemSize * 2
        // );

        // context.beginPath();
        // context.arc(
        //   item.x * tileSize + 40,
        //   item.y * tileSize + 40,
        //   30,
        //   0,
        //   2 * Math.PI
        // );

        context.stroke();
      }
    }
  }
}

/* Inside Play Function */

// for (let i = 0; i < tilesNumbers; i++) {
//   for (let j = 0; j < tilesNumbers; j++) {
//     context.strokeStyle = "#dddddd";
//     context.strokeRect(i * tileSize, j * tileSize, tileSize, tileSize);
//     context.strokeText(i + "," + j, i * tileSize + 10, j * tileSize + 10);
//   }
// }

/* IMAGES */

let blueItem = new Image();
blueItem.src = "assets/blue.png";
let redItem = new Image();
redItem.src = "assets/red.png";
let greenItem = new Image();
greenItem.src = "assets/green.png";
let yellowItem = new Image();
yellowItem.src = "assets/yellow.png";

const itemImages = {
  blue: blueItem,
  red: redItem,
  green: redItem,
  yellow: yellowItem,
};

/* INITIAL UPDATE */

// import { initialPlayers } from "./players.js";
// initialPlayers["blue"]["items"]["item1"].x = path[0][0];
// initialPlayers["blue"]["items"]["item1"].y = path[0][1];
// initialPlayers["blue"]["items"]["item1"].status = 1;
// roomsRef.child("players").set(initialPlayers);
