const auth = firebase.auth();
const db = firebase.database();
const userRef = db.ref("users");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let roomId = urlParams.get("room");

const loginDisplay = document.getElementById("login-display");
const signupDisplay = document.getElementById("signup-display");
const authform = document.getElementById("authform");
const authformContainer = document.getElementById("authform-container");
const gameContainer = document.getElementById("game-container");
const homeContainer = document.getElementById("home-container");

const loginContainer = document.getElementById("login-container");
const signupContainer = document.getElementById("signup-container");

loginDisplay.onclick = () => {
  signupDisplay.classList.remove("active");
  loginDisplay.classList.add("active");
  authform.style.transform = "translateX(0px)";
};

signupDisplay.onclick = () => {
  loginDisplay.classList.remove("active");
  signupDisplay.classList.add("active");
  authform.style.transform = "translateX(-400px)";
};

loginContainer.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = loginContainer.email.value;
  let password = loginContainer.password.value;

  auth.signInWithEmailAndPassword(email, password).then((snapshot) => {
    console.log(snapshot.user.uid);
    console.log("loggedIn");
  });
});

signupContainer.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = signupContainer.name.value;
  let email = signupContainer.email.value;
  let password = signupContainer.password.value;

  auth.createUserWithEmailAndPassword(email, password).then((snapshot) => {
    if (snapshot) {
      userRef.child(snapshot.user.uid).set({ name, email, status: 1 });
    }
  });
});

auth.onAuthStateChanged((user) => {
  if (user) {
    authformContainer.hidden = true;
    gameContainer.hidden = true;
    homeContainer.hidden = true;
    if (roomId) {
      gameContainer.hidden = false;
    } else {
      homeContainer.hidden = false;
    }
  } else {
    gameContainer.hidden = true;
    homeContainer.hidden = true;
    authformContainer.hidden = false;
  }
});

export function authState() {}
