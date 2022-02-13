let btn = document.querySelector("#loadBtn");

btn.addEventListener("click", async function () {
  //   axios.get("data.json").then(function (response) {
  //     movie = response.data;
  //     document.querySelector("#title").innerHTML = movie.title;
  //     document.querySelector("#year_released").innerHTML = movie.year_released;
  //   })

  //javascript will wait for it to return before moving on to next line
  //its a bookmark
  let response = await axios.get("data.json");
  let movie = response.data;
  document.querySelector("#title").innerHTML = movie.title;
  document.querySelector("#year_released").innerHTML = movie.year_released;
});


