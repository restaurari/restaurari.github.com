google.load("maps", "3.x");
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(46.0696, 23.5716),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
      }
  window.onload = loadScript;
