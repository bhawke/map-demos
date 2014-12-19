(function() {
  'use strict';

  document.addEventListener('polymer-ready', function() {
    console.log('Polymer is ready to rock!');
    var t = document.querySelector('#t');

    t.toggleSearch = function() {
      this.$.search.toggle();
    };

    t.addEventListener('template-bound', function() {
      var titleStyle = document.querySelector('.title').style;
      this.$.drawerPanel.addEventListener('core-header-transform', function(e) {
        var d = e.detail;
        t.touchAction = d.y === 0 ? 'none' : 'pan-y';
        var m = d.height - d.condensedHeight;
        var scale = Math.max(0.5, (m - d.y) / (m / 0.25)  + 0.5);
        titleStyle.transform = titleStyle.transform = 'scale(' + scale + ') translateZ(0)';
      });
    });

    t.selectedPage = 0;
    t.mapReady = false;
    t.toggleMap = function() {
      if (t.selectedPage === 0) {
        t.selectedPage = 1;
      }
      else {
        t.selectedPage = 0;
      }
    };

    t.transitionend = function() {
      t.mapReady = true;
      if (t.selected === 1) {
        if (t.$.mymap) {
          t.$.mymap.toggle();
        }
      } else {
        t.$.mymap.toggle();
      }
    };

    t.back = function() {
      t.toggleMap();
    };

    t.geoLat = function(geo) {
      return geo.split(',')[0];
    };

    t.geoLon = function(geo) {
      return geo.split(',')[1];
    };
  });



})();
