var map = L.map('map', {
    center: [0, 0],
    zoom: 1,
    crs: L.CRS.EPSG4326
});

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/ESRI_StreetMap_World_2D/MapServer/tile/{z}/{y}/{x}.png', {
    maxZoom: 15
}).addTo(map);