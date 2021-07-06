const fb = firebase.database();
let roomsRef = fb.ref("ludo/pX3jY2");
import { paintTheBoard } from "./paintTheBoard.js";
let context = document.getElementById("canvas").getContext("2d");
import { Item } from "./Item.js";
import { path } from "./path.js";

let players;
const tileSize = 40;
const colors = {
  blue: "#3498db",
  red: "#e74c3c",
  green: "#2ecc71",
  yellow: "#f1c40f",
};
let itemsPieces = [];

let currentScore = null;

document.getElementById("btn").addEventListener("click", function () {
  let val = Math.floor(Math.random() * 6) + 1;
  currentScore = val;
  document.getElementById("val").innerText = currentScore;
});

function initGame() {
  paintTheBoard(context, tileSize, colors);

  roomsRef.once("value", (snapshot) => {
    let initPlayers = snapshot.val().players;
    players = initPlayers;
  });

  roomsRef.on("value", (snapshot) => {
    let updatePlayers = snapshot.val().players;
    players = updatePlayers;
    paintTheBoard(context, tileSize, colors);
    itemsPieces = [];

    for (const playerKey in players) {
      if (players.hasOwnProperty(playerKey)) {
        let items = players[playerKey].items;

        for (const itemKey in items) {
          if (items.hasOwnProperty(itemKey)) {
            let item = items[itemKey];
            context.beginPath();
            context.fillStyle = colors[playerKey];

            let x = item.x * tileSize + 20;
            let y = item.y * tileSize + 20;
            context.arc(x, y, 16, 0, 2 * Math.PI);
            context.fill();

            let finalItem = new Item({
              x,
              y,
              status: item.status,
              player: playerKey,
              item: itemKey,
            });
            itemsPieces.push(finalItem);
          }
        }
      }
    }
  });
}
document.getElementById("canvas").addEventListener("click", function (event) {
  if (!currentScore) return;
  let rect = context.canvas.getBoundingClientRect();

  let x = rect.top + event.pageX;
  let y = rect.left + event.pageY;

  itemsPieces.forEach((e) => {
    if (y > e.y && y < e.y + tileSize && x > e.x && x < e.x + tileSize) {
      if (e.status == 1) {
        let item = path.findIndex(
          (item) =>
            item[0] == (e.x - 20) / tileSize && item[1] == (e.y - 20) / tileSize
        );

        let val = item + currentScore;
        e.x = path[val][0];
        e.y = path[val][1];
        roomsRef
          .child("players")
          .child(e.player)
          .child("items")
          .child(e.item)
          .update({ x: e.x, y: e.y });
        currentScore = null;
      }
    }
  });
});

window.addEventListener("load", initGame);
