let box = document.querySelector("#box")
let count = 0;
box.addEventListener('mouseenter', function() {
    box.style.backgroundColor = 'blue';
    count ++;
    document.querySelector('#output').innerHTML = count;
});
box.addEventListener('mouseleave', function() {
    box.style.backgroundColor = 'white';
});
box.addEventListener('click', function() {
    box.style.backgroundColor = 'yellow';
});