const API_KEY = "1891b5a6"
const BASE_API_URL = `http://www.omdbapi.com/?`

document.querySelector("#btnSearch").addEventListener('click', async function() {
    let title = document.querySelector("#title").value
    // let response = await axios.get(BASE_API_URL + "&s=" + title + "&type=movie")
    let params = {
        'apikey' : API_KEY,
        's' : title
    }
    let response = await axios.get(BASE_API_URL, {'params': params})
    for (i of response.data.Search) {
        document.querySelector('#titles').innerHTML += `<li>${i.Title}</li>`
    }
})
