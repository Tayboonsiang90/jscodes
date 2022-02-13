function getRandomLatLng(map) {
    //get boundaries
    let bounds = map.getBounds();

    //get upper right and lower left
    let southwest = bounds.getSouthWest();
    let northeast = bounds.getNorthEast();

    //calculate the length and width in lat long distance
    let lngSpan = northeast.lng - southwest.lng
    let latSpan = northeast.lat - southwest.lat

    let randomLng = Math.random() * lngSpan + southwest.lng
    let randomLat = Math.random() * latSpan + southwest.lat

    return [randomLat, randomLng]
}

// We need a center position for our map
//lat long, long
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

let markerClusterLayer = L.markerClusterGroup();

for (let i = 0; i<1000; i++) {
    let marker = L.marker(getRandomLatLng(map))
    marker.addTo(markerClusterLayer)
}

markerClusterLayer.addTo(map)

