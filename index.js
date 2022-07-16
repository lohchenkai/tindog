// Remember to import the data and Dog class!
import Dog from "./Dog.js";
import dogData from "./data.js"

//initializing profile data of dogs
const dogList = [...dogData];

//variable to enable and disable button
let isWaiting = false;

//getting required DOM Elements
const main = document.querySelector("main");
const rejectBtn = document.querySelector("#reject");
const acceptBtn = document.querySelector("#accept");
const badgeImage = document.createElement("img");
badgeImage.classList.add("main-badge");

//adding event listeners to the buttons
rejectBtn.addEventListener("click", rejectClick)
acceptBtn.addEventListener("click", acceptClick);

//render function to render info on screen
function render() {
    main.innerHTML = currentPlayer.getDogHTML();
    currentPlayer.setBackground();
}

//function to get dog object
function getDog() {
    return dogList.length !== 0 ? new Dog(dogList.shift()) : {};
}

//gameLogic function
function gameLogic() {
    if (dogList.length !== 0) {
        isWaiting = true;
        setTimeout(function () {
            currentPlayer = getDog();
            isWaiting = false;
            render();
        }, 1500)
    }
    else {
        isWaiting = true;
        console.log("No more players")
    }
}

//function to handle each button click
function rejectClick(event) {
    if (!isWaiting) {
        //logic to generate the correct stamp
        badgeImage.src = "./images/badge-nope.png";
        main.append(badgeImage);
        gameLogic();
    }
}

function acceptClick(event) {
    if (!isWaiting) {
        //logic to generate the correct stamp
        badgeImage.src = "./images/badge-like.png";
        main.append(badgeImage);
        gameLogic();
    }
}

let currentPlayer = getDog();
render();