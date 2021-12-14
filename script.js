//Global Variables Here

// Card Elements
const cardEl0 = document.getElementById("card0");
const cardEl1 = document.getElementById("card1");
const cardEl2 = document.getElementById("card2");
const cardEl3 = document.getElementById("card3");
const cardEl4 = document.getElementById("card4");
const cardEl5 = document.getElementById("card5");
const cardEl6 = document.getElementById("card6");
const cardEl7 = document.getElementById("card7");
const cardEl8 = document.getElementById("card8");

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

// Card Header
const cardHeader0 = document.getElementById("card-header0");
const cardHeader1 = document.getElementById("card-header1");
const cardHeader2 = document.getElementById("card-header2");
const cardHeader3 = document.getElementById("card-header3");
const cardHeader4 = document.getElementById("card-header4");
const cardHeader5 = document.getElementById("card-header5");
const cardHeader6 = document.getElementById("card-header6");
const cardHeader7 = document.getElementById("card-header7");
const cardHeader8 = document.getElementById("card-header8");

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

    // Set Up Cards Here

    // This Sets the name of the card.
    cardText0.textContent = data.coins[0].id;

    // This sets the picture of the card.
    cardImg0.src = data.coins[0].icon;
  });
