const closeButtonEl = document.getElementById("modal-close");
const cryptoContainer = document.getElementById("crypto-container");

var cryptoData;

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

fetch("https://api.coinstats.app/public/v1/coins")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    cryptoData = data.coins;
    ////////////////////////////////////////////////
    // Mason Starts Here

    // This Sets the name of the card.
    cardText0.textContent = data.coins[0].id;
    cardText1.textContent = data.coins[1].id;
    cardText2.textContent = data.coins[2].id;

    // This sets the picture of the card.
    cardImg0.src = data.coins[0].icon;
    cardImg1.src = data.coins[1].icon;
    cardImg2.src = data.coins[2].icon;

    ////////////////////////////////////////////////
    // Alberto Starts Here

    // This Sets the name of the card.
    cardText3.textContent = data.coins[3].id;
    cardText4.textContent = data.coins[4].id;
    cardText5.textContent = data.coins[5].id;

    // This sets the picture of the card.
    cardImg3.src = data.coins[3].icon;
    cardImg4.src = data.coins[4].icon;
    cardImg5.src = data.coins[5].icon;

    ////////////////////////////////////////////////
    // Nate Starts Here
    // This Sets the name of the card.
    cardText6.textContent = data.coins[6].id;
    cardText7.textContent = data.coins[7].id;
    cardText8.textContent = data.coins[8].id;

    // This sets the picture of the card.
    cardImg6.src = data.coins[6].icon;
    cardImg7.src = data.coins[7].icon;
    cardImg8.src = data.coins[8].icon;
  }); //End of fetch function

closeButtonEl.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("is-active");
});

cryptoContainer.addEventListener("click", function (event) {
  document.getElementById("modal").classList.add("is-active");

  //Grabbing coin by user click
  let index = event.target.id[event.target.id.length - 1];
  console.log(index);
  // Geting Crypto name and adding it to modal
  let myCryptoData = cryptoData[index];
  let name = myCryptoData.name;
  let cardTitleEl = document.getElementById("coin-name");
  cardTitleEl.textContent = name;

  //Price Change over 1 hr
  let hourChange = myCryptoData.priceChange1h;
  let hourChangeEl = document.getElementById("1hr");
  hourChangeEl.textContent = hourChange;
  // console.log(hourChange);

  //Price Change over 1 Day
  let dayChange = myCryptoData.priceChange1d;
  let dayChangeEl = document.getElementById("1d");
  dayChangeEl.textContent = dayChange;
  // console.log(dayChange);

  //Price Change over 1 Week
  let weekChange = myCryptoData.priceChange1w;
  let weekChangeEl = document.getElementById("1w");
  weekChangeEl.textContent = weekChange;
  // console.log(weekChange);
});

window.addEventListener("keydown", function keyPress(e) {
  // console.log(e);
  if (e.key === "Escape") {
    document.getElementById("modal").classList.remove("is-active");
  }
});
