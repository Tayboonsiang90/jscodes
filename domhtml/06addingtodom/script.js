let btn = document.querySelector("#btnAdd");
btn.addEventListener("click", function () {
  let number = Math.floor(Math.random() * 100 + 1);

  //First method using innerHTML
  let numberList = document.querySelector("#numbers");
  numberList.innerHTML += `<li>${number}</li>`;
});

//Second method using ?????????????????
let names = ["a", "b", "c", "d", "e", "f", "g", "h"];
document.querySelector('#btnAddName').addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * names.length);
  let randomName = names[randomIndex];

  //tag name of the element
  let nameElement = document.createElement('li')
  nameElement.innerHTML = randomName;
  nameElement.addEventListener("click", function() {
    alert(randomName)
  })

  let parent = document.querySelector("#numbers")
  parent.appendChild(nameElement)

  console.log(randomName)

});
