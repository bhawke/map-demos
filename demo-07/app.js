var leaflet = function(result) {

    // add results from source 1 as layer
    //var source1 = new L.LayerGroup();
    var source1 = L.markerClusterGroup();

    $.each(result.response.docs,function(i,doc){
        var coord = doc.store;
        if (coord && coord != null) {
            var coords = coord.split(",");
            var title = doc.name;
            L.marker(coords).bindPopup("<b>"+ title + "</b>").addTo(source1);
        }
    });

    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

    var grayscale   = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'examples.map-i875mjb7',   attribution: mbAttr});

    var map = L.map('map', {
        center: [20.2802281, 38.4755791],
        zoom: 2,
        layers: [grayscale, source1]
    });

    var baseLayers = {
        "Grayscale": grayscale,
        "Streets": streets
    };

    var overlays = {
        "Source 1": source1
    };

    L.control.layers(baseLayers, overlays).addTo(map);

}

$(document).ready(function(){
    $.ajax({
        url: 'http://cloudfortressinc.com:8983/solr/collection1/select',
        data: {'wt':'json', 'q':'*:*', 'fl':'name,store'},
        success: leaflet,
        dataType: 'jsonp',
        jsonp: 'json.wrf'
    });
});