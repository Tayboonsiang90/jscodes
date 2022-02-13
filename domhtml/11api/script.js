// async function main() {
//     let response = await axios.get("https://pokeapi.co/api/v2/pokemon/pikachu/")
//     console.log(response.data)
// }

// main()
const BASE_API = "https://pokeapi.co/api/v2"

document.querySelector("#btnSearch").addEventListener("click", async function (){
    let pokemon = document.querySelector("#pokemon").value
    let response = await axios.get(`${BASE_API}/pokemon/${pokemon}/`)
    let foundPokemon = response.data

    document.querySelector('#name').innerText = foundPokemon.name;
    document.querySelector('#image').src = foundPokemon.sprites.front_shiny;
})



