var cities = new L.LayerGroup();

L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
    L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
    L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
    L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);

var esriFeatures = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0');

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

var grayscale   = L.esri.basemapLayer("Gray"),
    streets  = L.tileLayer(mbUrl, {id: 'examples.map-i875mjb7',   attribution: mbAttr}),
    estreets = L.esri.basemapLayer('Streets');

var map = L.map('map', {
    center: [20.2802281, 38.4755791],
    zoom: 2,
    layers: [grayscale, cities]
});


var baseLayers = {
    "Esri Grayscale": grayscale,
    "OSM Streets": streets,
    "Esri Streets": estreets
};
/**
var overlays = {
    "Cities": cities,
    "ESRI FeatureLayer": esriFeatures
};
**/

var groupedOverlays = {
    "Functional 1": {
        "Cities": cities
    },
    "Functional 2": {
        "ESRI FeatureLayer": esriFeatures
    }
};

L.control.groupedLayers(baseLayers, groupedOverlays).addTo(map);

/**
L.control.layers(baseLayers, overlays).addTo(map);
**/
