const BASE_API = "https://api.data.gov.sg/v1/"

window.addEventListener('DOMContentLoaded', async function (){
    let response = await axios.get(BASE_API + "transport/taxi-availability")
    console.log(response)
    let taxis = response.data.features[0].geometry.coordinates;
    count = 0;
    results = document.querySelector("#taxis")
    for (i of taxis) {
        count ++;
        results.innerHTML += `<li>${count}: ${i[1]}, ${i[0]}</li>` 
    }
})