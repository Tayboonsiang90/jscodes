// We need a center position for our map
//lat long, long
console.log("hi")
let singapore = [1.29, 103.85]

//create the map
//L is the leaflet object in the global scope
//L is from leaflet js
//L.map() creates a map object
//takes 1 arg, the id to put the map in
let map = L.map('singaporeMap').setView(singapore, 13);

// setup the tile layers
// this setup a drawing of the map
//style and colors
//map box map style
//access token, need to get
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

//latlong marker
let singaporeMarker = L.marker([1.29, 103.85])
singaporeMarker.addTo(map)
let clementi = L.marker([1.3162, 103.7649])
clementi.addTo(map)
let sentosa = L.marker([1.2494, 103.8303])
sentosa.addTo(map)

//add a popup box
singaporeMarker.bindPopup(`<p>Singapore</p> Singapore is the only country in Asia with a AAA sovereign rating from all major rating agencies. It is a major financial and shipping hub, consistently ranked`)

clementi.addEventListener("click", function() {
    alert("I can see my house from here! ")
})

let circle = L.circle([1.3294,103.8021], {
    color: 'red',
    fillColor: 'orange',
    fillOpacity: 0.5,
    radius: 500 //meters
})

circle.addTo(map)