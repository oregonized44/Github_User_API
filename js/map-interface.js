var maps = require('google-maps');
maps.KEY = require("./../.env").mapapiKey;

function initMap(x,y) {
  maps.load(function(google) {

    var myLatLng = {lat: x, lng: y};
    var markLatLng = {lat: x,
                      lng: y
                    };
    var map = new google.maps.Map(document.getElementById('map_canvas'), {
      zoom: 4,
      center: myLatLng,
      mapTypeId: google.maps.MapTypeId.SATELLITE

    });

    var marker = new google.maps.Marker({
      position: markLatLng,
      map: map,
      content: 'Hello World!'
    });
    console.log(marker);
    console.log(map);
  });
}
