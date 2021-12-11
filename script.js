fetch("https://api.coinstats.app/public/v1/coins")
  .then((response) => response.json())
  .then(function (data) {
    console.log(data);
  });
