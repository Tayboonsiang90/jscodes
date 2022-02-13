//callback function
axios.get('data.json').then(function(response){
    console.log("yo")
    movie = response.data
    document.querySelector("#title").innerHTML = movie.title;
    document.querySelector("#year_released").innerHTML = movie.year_released;
})
console.log("kekw")


async function main() {
    data = await axios.get('data.json')
    console.log("yo")
    movie = response.data
    document.querySelector("#title").innerHTML = movie.title;
    document.querySelector("#year_released").innerHTML = movie.year_released;
    console.log("kekw")

}
main()