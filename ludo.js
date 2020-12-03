import { paintTheBoard } from "./paintTheBoard.js";
import { moveItem, paintItem, clickItem } from "./Item.js";

const fb = firebase.database();
let roomsRef = fb.ref("ludo/pX3jY2");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
import { initialPlayers } from "./players.js";
roomsRef.child("players").set(initialPlayers);

let players;
let itemsPieces = [];
let currentScore = null;

document.getElementById("btn").addEventListener("click", function () {
  let val = Math.floor(Math.random() * 6) + 1;
  currentScore = val;
  document.getElementById("val").innerText = currentScore;
});

function initGame() {
  paintTheBoard(context);

  roomsRef.once("value", (snapshot) => {
    players = snapshot.val().players;
  });

  roomsRef.on("value", (snapshot) => {
    players = snapshot.val().players;
    paintTheBoard(context);
    itemsPieces = [];

    for (const playerKey in players) {
      if (players.hasOwnProperty(playerKey)) {
        let items = players[playerKey].items;

        for (const itemKey in items) {
          if (items.hasOwnProperty(itemKey)) {
            let item = items[itemKey];
            let finalItem = paintItem(context, playerKey, item, itemKey);
            itemsPieces.push(finalItem);
          }
        }
      }
    }
  });
}

canvas.addEventListener("click", function (event) {
  if (!currentScore) return;
  let rect = context.canvas.getBoundingClientRect();
  let x = rect.top + event.clientX;
  let y = rect.left + event.clientY;

  itemsPieces.forEach((element) => {
    if (clickItem(x, y, element)) {
      let finalElement = moveItem(element, currentScore);
      if (finalElement) {
        roomsRef
          .child("players")
          .child(finalElement.player)
          .child("items")
          .child(finalElement.item)
          .update({
            x: finalElement.x,
            y: finalElement.y,
            status: finalElement.status,
            steps: finalElement.steps,
          });
      }
    }
  });
});

window.addEventListener("load", initGame);
