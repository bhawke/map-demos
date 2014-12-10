var map = L.map('map').setView([45.526, -122.667], 13);

L.esri.basemapLayer('Streets').addTo(map);
var parks = L.esri.featureLayer('http://services.arcgis.com/rOo16HdIMeOBI4Mb/ArcGIS/rest/services/Portland_Parks/FeatureServer/0').addTo(map);

parks.bindPopup(function (feature) {
    return L.Util.template('<p>{NAME}<br>Acres: {ACRES}</p>', feature.properties);
});