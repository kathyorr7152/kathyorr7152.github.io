
function initMap() {
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
        center: {lat: 47.648, lng: -122.348},
        zoom: 16
        });
  }

function addMarker(feature) {
    var marker = new google.maps.Marker({
    position: feature.position,
    icon: icons[feature.type].icon,
    map: map
        });
  }

    var features = [
      {
        position: new google.maps.LatLng(47.648055, -122.348490),
        type: 'info'
      }, {
  ];

    for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }

function initMap() {
    var myLatLng = {lat: 47.648, lng: -122.348};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatLng
        });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Hello World!'
              });
            }

    var myLatlng = new google.maps.LatLng(47.648055, -122.348490);
    var mapOptions = {
          zoom: 4,
          center: myLatlng
        }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    var marker = new google.maps.Marker({
        position: myLatlng,
        title:"Hello World!"
        });

// To add the marker to the map, call setMap();
marker.setMap(map);
