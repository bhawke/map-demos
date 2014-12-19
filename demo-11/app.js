// Setup map
var map = L.map('map').setView([51.932994,4.509373], 14);

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr}).addTo(map);


// Add markers to map
// Font-Awesome markers
L.marker([51.941196,4.512291], {icon: L.AwesomeMarkers.icon({icon: 'spinner', markerColor: 'red', prefix: 'fa', spin:true}) }).addTo(map);
L.marker([51.927913,4.521303], {icon: L.AwesomeMarkers.icon({icon: 'coffee', markerColor: 'orange', prefix: 'fa', iconColor: 'black'}) }).addTo(map);
L.marker([51.936063,4.502077], {icon: L.AwesomeMarkers.icon({icon: 'cog',  prefix: 'fa', markerColor: 'purple', iconColor: '#6b1d5c' }) }).addTo(map);

// Glyphicons
L.marker([51.932835,4.506969], {icon: L.AwesomeMarkers.icon({icon: 'star',  prefix: 'glyphicon',markerColor: 'green'}) }).addTo(map);
L.marker([51.930295,4.515209], {icon: L.AwesomeMarkers.icon({icon: 'certificate', prefix: 'glyphicon', markerColor: 'blue'}) }).addTo(map);
L.marker([51.930083,4.507742], {icon: L.AwesomeMarkers.icon({icon: 'cog',  prefix: 'glyphicon', markerColor: 'cadetblue'}) }).addTo(map);