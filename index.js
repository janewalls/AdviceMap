var map = L.map('map').setView([-33.44829200321301, -70.67795850520007], 3);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var bagualesMarker = L.marker([-51.725432065540666, -72.50676064696684]).addTo(map);
bagualesMarker.bindPopup("This is a great pub with locally made beers, and a nice patio with a fire pit");
