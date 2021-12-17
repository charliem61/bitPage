const closeButtonEl = document.getElementById("modal-close");
const cryptoContainer = document.getElementById("crypto-container");

var cryptoData;
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

// Card Content
const cardContent0 = document.getElementById("card-content0");
const cardContent1 = document.getElementById("card-content1");
const cardContent2 = document.getElementById("card-content2");
const cardContent3 = document.getElementById("card-content3");
const cardContent4 = document.getElementById("card-content4");
const cardContent5 = document.getElementById("card-content5");
const cardContent6 = document.getElementById("card-content6");
const cardContent7 = document.getElementById("card-content7");
const cardContent8 = document.getElementById("card-content8");

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

// cardContent0.addEventListener("click", function () {
//   document.getElementById("modal0").classList.add("is-active");
// });

closeButtonEl.addEventListener("click", function () {
  document.getElementById("modal").classList.remove("is-active");
});

cryptoContainer.addEventListener("click", function (event) {
  document.getElementById("modal").classList.add("is-active");

  // let id = event.target.id;
  // let index;
  // for (var i = 0; i < cryptoData.length; i++) {
  //   console.log(cryptoData[i].id);
  //   if (cryptoData[i].id === id) {
  //     index = i;
  //     break;
  //   }
  // }
  // console.log(index);

  // assumes that you keep the fetched coin array the same on the page
  let index = event.target.id[event.target.id.length - 1];
  let myCryptoData = cryptoData[index];
  let name = myCryptoData.name;
  let cardTitleEl = document.getElementById("coin-name");
  cardTitleEl.textContent = name;
});
