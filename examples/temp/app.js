const fb = firebase.database();
let roomsRef = fb.ref("rooms/x2xdzn");
let currentPlayerId = "ykV1xdKaHaSKNdEgpilzS2R5haF2";

function initGame() {
  let context = document.getElementById("canvas").getContext("2d");
  let height = context.canvas.height;
  let width = context.canvas.width;
  let players = [];
  let currentPlayer;
  let scores = [];

  roomsRef.once("value", (snapshot) => {
    let data = snapshot.val();
    let gamePlayers = data.players;

    for (const playerId in gamePlayers) {
      if (gamePlayers.hasOwnProperty(playerId)) {
        let player = new Player(context, playerId, gamePlayers[playerId]);
        if (playerId == currentPlayerId) {
          currentPlayer = player;
        }
        players.push(player);
        scores.push(player.score);
      }
    }
    play();
  });

  document.addEventListener("keydown", function (event) {
    let key = event.keyCode;
    if (key == 37) currentPlayer.x -= 5;
    if (key == 38) currentPlayer.y -= 5;
    if (key == 39) currentPlayer.x += 5;
    if (key == 40) currentPlayer.y += 5;

    roomsRef
      .child("players")
      .child(currentPlayerId)
      .child("position")
      .update({ left: currentPlayer.x, top: currentPlayer.y });
  });

  roomsRef.on("value", (snapshot) => {
    let data = snapshot.val();
    let gamePlayers = data.players;

    for (const playerId in gamePlayers) {
      let player = players.find((x) => x.id === playerId);
      if (player) {
        player.x = gamePlayers[player.id].position.left;
        player.y = gamePlayers[player.id].position.top;
      }
    }
    play();
  });

  function play() {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#dddddd";
    context.fillRect(0, 0, width, height);
    for (const player of players) {
      player.render();
    }
  }
}

function Player(context, id, data) {
  this.id = id;
  this.width = 50;
  this.height = 50;
  this.x = data.position.left;
  this.y = data.position.top;
  this.score = data.score;

  this.render = function () {
    context.fillStyle = data.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    console.log(this.id, this.x, this.y);
  };
}

window.addEventListener("load", initGame);
