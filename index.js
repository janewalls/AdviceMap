var map = L.map('map').setView([-16.494394315714516, -68.12160016241032], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var bagualesMarker = L.marker([-51.725432065540666, -72.50676064696684]).addTo(map);
bagualesMarker.bindPopup("This is a great pub with locally made beers, and a nice patio with a fire pit");
