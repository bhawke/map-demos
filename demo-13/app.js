$(document).ready(function(){

    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
            '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
            'Imagery © <a href="http://mapbox.com">Mapbox</a>',
        mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

    var grayscale = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr}),
        streets = L.tileLayer(mbUrl, {id: 'examples.map-i875mjb7', attribution: mbAttr});

    var map = L.map('map', {
        center: [39.7, -104],
        zoom: 8
    });

    /** Base Layers **/
    var baseLayers = [
        {name:'Gray Scale',layer:grayscale, active:true},
        {name:'Streets',layer:streets, active:false}
    ];

    for (var i = 0; i < baseLayers.length; ++i) {
        var l = baseLayers[i];
        addLayer(l.layer, l.name, 1, 'basemaps', true, l.active);
    }

    /** Feature Layers **/
    var cities = new L.LayerGroup();
    L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.').addTo(cities),
        L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.').addTo(cities),
        L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.').addTo(cities),
        L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.').addTo(cities);
    var parks = new L.LayerGroup();
    L.marker([39.65, -105.44]).bindPopup('Park 1').addTo(parks),
        L.marker([39.82, -104.66]).bindPopup('Park 2').addTo(parks),
        L.marker([39.83, -104.42]).bindPopup('Park 3').addTo(parks),
        L.marker([39.85, -105]).bindPopup('Park 4').addTo(parks);
    addLayer(cities, 'Cities', 1, 'features', false, false);
    addLayer(parks, 'Parks', 2, 'features', false, false);

    var shops = new L.LayerGroup();
    L.marker([40.61, -105.02]).bindPopup('Shop 1').addTo(shops),
        L.marker([40.74, -104.99]).bindPopup('Shop 2').addTo(shops),
        L.marker([40.73, -104.8]).bindPopup('Shop 3').addTo(shops),
        L.marker([40.77, -105.23]).bindPopup('Shop 4').addTo(shops);
    var restaurants = new L.LayerGroup();
    L.marker([40.65, -105.44]).bindPopup('Restaurant 1').addTo(restaurants),
        L.marker([40.82, -104.66]).bindPopup('Restaurant 2').addTo(restaurants),
        L.marker([40.83, -104.42]).bindPopup('Restaurant 3').addTo(restaurants),
        L.marker([40.85, -105]).bindPopup('Restaurant 4').addTo(restaurants);
    addLayer(shops, 'Shops', 1, 'features2', false, false);
    addLayer(restaurants, 'Restaurants', 1, 'features2', false, false);

    var fishing = new L.LayerGroup();
    L.marker([40.61, -104.02]).bindPopup('fishing 1').addTo(fishing),
        L.marker([40.74, -103.99]).bindPopup('fishing 2').addTo(fishing),
        L.marker([40.73, -103.8]).bindPopup('fishing 3').addTo(fishing),
        L.marker([40.77, -104.23]).bindPopup('fishing 4').addTo(fishing);
    var camping = new L.LayerGroup();
    L.marker([40.65, -104.44]).bindPopup('camping 1').addTo(camping),
        L.marker([40.82, -103.66]).bindPopup('camping 2').addTo(camping),
        L.marker([40.83, -103.42]).bindPopup('camping 3').addTo(camping),
        L.marker([40.85, -104]).bindPopup('camping 4').addTo(camping);
    addLayer(fishing, 'Fishing', 1, 'subfeatures', false, false);
    addLayer(camping, 'Camping', 1, 'subfeatures', false, false);

    function addLayer(layer, name, zIndex, groupId, exclusive, active) {
        var selectClass = '';

        if (exclusive)
            selectClass = 'fa fa-dot-circle-o';
        else
            selectClass = 'fa fa-check';

        if (active) {s
            /* the zindex may come in handy if we want to pass in an opaque layer */
            layer
                .setZIndex(zIndex)
                .addTo(map);
        }

        // Create a simple layer switcher that
        // toggles layers on and off.

        var link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.innerHTML = name;

        link.onclick = function(e) {
            var evt = e || window.event; // IE compatibility
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
                evt.cancelBubble=true;
            }

            if (map.hasLayer(layer) && !exclusive) {
                map.removeLayer(layer);
                $(this).prev().removeClass('active');
                $(this).prev().removeClass(selectClass);
            } else {
                if (exclusive) {
                    // loop through base layers and remove all but this one
                    for (var i = 0; i < baseLayers.length; ++i) {
                        var l = baseLayers[i];
                        if (layer.name !== l.name) {
                            if (map.hasLayer(l.layer))
                                map.removeLayer(l.layer);
                        }
                    }
                    // remove all classes with this groupId
                    $("#" + groupId).find("i").removeClass('active ' + selectClass);

                }
                map.addLayer(layer);
                $(this).prev().addClass('active');
                $(this).prev().addClass(selectClass);
            }
        };

        var group = $("#" + groupId);
        var li;
        if (active)
            li = $("<li><i class='"+selectClass+"'></i></li>");
        else
            li = $("<li><i class=''></i></li>");
        li.append(link);
        group.append(li);
    }

});

