const closeButtonEl = document.getElementById("modal-close");
const cryptoContainer = document.getElementById("crypto-container");

// Load Local storage Here
var favoriteStatus = [];
var currentCoinObject;
var cryptoData;

// Init function to get "favorites" from local storage when loading page
function init() {
  (keys = Object.keys(localStorage)), (i = keys.length);

  if (localStorage.getItem("coins")) {
    favoriteStatus = JSON.parse(localStorage.getItem("coins"));
  }

  return favoriteStatus;
}

// Card Images
const cardImg0 = document.getElementById("img0");
const cardImg1 = document.getElementById("img1");
const cardImg2 = document.getElementById("img2");
const cardImg3 = document.getElementById("img3");
const cardImg4 = document.getElementById("img4");
const cardImg5 = document.getElementById("img5");
const cardImg6 = document.getElementById("img6");
const cardImg7 = document.getElementById("img7");
const cardImg8 = document.getElementById("img8");

// Card Text Content
const cardText0 = document.getElementById("card-text0");
const cardText1 = document.getElementById("card-text1");
const cardText2 = document.getElementById("card-text2");
const cardText3 = document.getElementById("card-text3");
const cardText4 = document.getElementById("card-text4");
const cardText5 = document.getElementById("card-text5");
const cardText6 = document.getElementById("card-text6");
const cardText7 = document.getElementById("card-text7");
const cardText8 = document.getElementById("card-text8");

// joke content
const joke = document.getElementById("joke");
const punch = document.getElementById("punch");

fetch("https://api.coinstats.app/public/v1/coins")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    cryptoData = data.coins;

    // This Sets the name of the card.
    cardText0.textContent = data.coins[0].id;
    cardText1.textContent = data.coins[1].id;
    cardText2.textContent = data.coins[2].id;

    // This sets the picture of the card.
    cardImg0.src = data.coins[0].icon;
    cardImg1.src = data.coins[1].icon;
    cardImg2.src = data.coins[2].icon;

    // This Sets the name of the card.
    cardText3.textContent = data.coins[3].id;
    cardText4.textContent = data.coins[4].id;
    cardText5.textContent = data.coins[5].id;

    // This sets the picture of the card.
    cardImg3.src = data.coins[3].icon;
    cardImg4.src = data.coins[4].icon;
    cardImg5.src = data.coins[5].icon;

    // This Sets the name of the card.
    cardText6.textContent = data.coins[6].id;
    cardText7.textContent = data.coins[7].id;
    cardText8.textContent = data.coins[8].id;

    // This sets the picture of the card.
    cardImg6.src = data.coins[6].icon;
    cardImg7.src = data.coins[7].icon;
    cardImg8.src = data.coins[8].icon;
  }); //End of fetch function

  // Function to close modal using the X
closeButtonEl.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("is-active");
});

  // Fetch function to add jokes to page
fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    const setupEl = document.getElementById("setup");
    const deliveryEl = document.getElementById("delivery");

    setupEl.textContent = data.setup;

    deliveryEl.textContent = data.delivery;
  });

  // Function to open modal and display cryptocurrency to modal
cryptoContainer.addEventListener("click", function (event) {
  document.getElementById("modal").classList.add("is-active");

  //Grabbing coin by user click
  let index = event.target.id[event.target.id.length - 1];
  console.log(index);
  // Geting Crypto name and adding it to modal
  currentCoinObject = cryptoData[index];
  let name = currentCoinObject.name;
  let cardTitleEl = document.getElementById("coin-name");
  cardTitleEl.textContent = name;

  //Current price
  let price = currentCoinObject.price;
  let priceEl = document.getElementById("price");
  priceEl.textContent = "$" + price; 

  //Price Change over 1 hr
  let hourChange = currentCoinObject.priceChange1h;
  let hourChangeEl = document.getElementById("1hr");
  hourChangeEl.textContent = "$" + hourChange;

  //Price Change over 1 Day
  let dayChange = currentCoinObject.priceChange1d;
  let dayChangeEl = document.getElementById("1d");
  dayChangeEl.textContent = "$" + dayChange;
  // console.log(dayChange);

  //Price Change over 1 Week
  let weekChange = currentCoinObject.priceChange1w;
  let weekChangeEl = document.getElementById("1w");
  weekChangeEl.textContent = "$" + weekChange;
  // console.log(weekChange);

  // Starts modal with blank star
  if (favoriteStatus.indexOf(currentCoinObject.name) > -1) {
    favoriteImage.dataset.state = "full";
    favoriteImage.setAttribute("src", favoriteImage.dataset.full);

  } else {
    favoriteImage.dataset.state = "empty";
    favoriteImage.setAttribute("src", favoriteImage.dataset.empty);
  }
});

  // esc key to close modal
window.addEventListener("keydown", function keyPress(e) {
  if (e.key === "Escape") {
    document.getElementById("modal").classList.remove("is-active");
  }
});

var imageContainer = document.getElementById("imageContainer");
var favoriteImage = document.getElementById("favorite");

  // function to save  cryptocurrency to "favorite"
imageContainer.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("img")) {
    var state = element.getAttribute("data-state");

    if (state === "empty") {
      element.dataset.state = "full";
      element.setAttribute("src", element.dataset.full);
      favoriteStatus.push(currentCoinObject.name);
    } else {
      element.dataset.state = "empty";
      element.setAttribute("src", element.dataset.empty);
      var currentArr = favoriteStatus.indexOf(currentCoinObject.id);
      console.log(currentArr);
      favoriteStatus.splice(currentArr, 1);
    }
    console.log(favoriteStatus);
    window.localStorage.setItem("coins", JSON.stringify(favoriteStatus));
    console.log(localStorage);
  }
});
init();
