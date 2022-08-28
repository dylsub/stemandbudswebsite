const center = [41.708728244062975, -88.20255163644597];

const map = L.map('map', {
    scrollWheelZoom: false,
    dragging: false,
    doubleClickZoom: false,
}).setView(center, 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '© OpenStreetMap'
}).addTo(map);

let popupContent = "3015 Cedar Glade Rd, Naperville, IL 60564";
const marker = L.marker(center).addTo(map);
marker.bindPopup(popupContent, { maxWidth: 200 }).openPopup();