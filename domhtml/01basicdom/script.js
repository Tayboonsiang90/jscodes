// browser based javascript
// what is differences
// - no modules
// - no files io
// - no yarn npm

// alert('hello world') //sanity check

//document has been predefined by browser
//to be the DOM
//console.dir(document);


////////////////OPTTIONAL///////////////////////
// let title = document.getElementById('title')
// console.dir(title)
// title.innerHTML = "My Don't Dos"

// let li = document.getElementsByTagName("li")
// console.dir(li)

//CSS selection
//Will only give you the first match
let header = document.querySelector('#title');

let firstToDo = document.querySelector('.important');
firstToDo.style.backgroundColor = "red";
firstToDo.style.fontFamily = "Verdana";
firstToDo.style.fontSize = "32px";

//Selects all
let allToDos = document.querySelectorAll('li');

//Interactive button (click)
let btn = document.querySelector('#btn');
btn.addEventListener('click', function () {
    alert("button clicked");
    let title = document.querySelector('#title')
    title.innerHTML = "Goodbye World"
    title.style.color = "red"
})











