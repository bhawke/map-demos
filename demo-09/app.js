var map = L.map('map').setView([34.025, -116.203], 9);

L.esri.basemapLayer('Gray').addTo(map);

var federalLands = L.esri.dynamicMapLayer('http://maps1.arcgisonline.com/ArcGIS/rest/services/USA_Federal_Lands/MapServer', {
    opacity: 0.5,
    useCors: true
}).addTo(map);

federalLands.bindPopup(function (error, featureCollection) {
    if(error || featureCollection.features.length === 0) {
        return false;
    } else {
        return 'Name: ' + featureCollection.features[0].properties.NAME1;
    }
});