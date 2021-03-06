      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: new google.maps.LatLng(47.614336,-122.319785),
          mapTypeId: 'roadmap',
        });
      // Note: This example requires that you consent to location sharing when
      // prompted by your browser. If you see the error "The Geolocation service
      // failed.", it means you probably did not give permission for the browser to
      // locate you.
      {
         var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 47.614336, lng: -122.319785},
          zoom: 6
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }
        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var icons = {
          parking: {
            icon: iconBase + 'parking_lot_maps.png'
          },
          library: {
            icon: iconBase + 'library_maps.png'
          },
          info: {
            icon: iconBase + 'info-i_maps.png'
          }
        };

        function addMarker(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon: icons[feature.type].icon,
            map: map
          });
        }
         var features = [
          {
          //The Lobby Bar
            position: new google.maps.LatLng(47.614336, -122.319785),
            type: 'info'
          }, {
          //Gay City Health Project
            position: new google.maps.LatLng( 47.613912,-122.324633),
            type: 'info'
          }, {
          //STARBUCKS
          //1
            position: new google.maps.LatLng(47.614028, -122.337109),
            type: 'info'
          }, {
          //2
            position: new google.maps.LatLng(47.61018,-122.342392),
            type: 'info'
          }, {
           //3
            position: new google.maps.LatLng(47.662128, -122.296273),
            type: 'info'
          }, {
          //4
            position: new google.maps.LatLng(47.608363,-122.338488),
            type: 'info'
          }, {
          //5
            position: new google.maps.LatLng(47.620481,-122.313144),
            type: 'info'
          }, {
          //6
            position: new google.maps.LatLng(47.618231,-122.303942),
            type: 'info'
          }, {
          //7
            position: new google.maps.LatLng(47.630489,-122.32231),
            type: 'info'
          }, {
          }
            //8
            position: new google.maps.LatLng(,47.607634,-122.310118
            ),
            //9
            position: new google.maps.LatLng(,47.661828,-122.33624
            ),
            //10
            position: new google.maps.LatLng(,47.691889,-122.359125
            ),
            //11
            position: new google.maps.LatLng(,47.637722,-122.356146
            ),
            //12
            position: new google.maps.LatLng(,47.68966,-122.376136
            ),
            //13
            position: new google.maps.LatLng(,47.66825,-122.374273
            ),
            //14
            position: new google.maps.LatLng(,47.617405,-122.344447
            ),
            //15
            position: new google.maps.LatLng(,47.622525,-122.321375
            ),
            //16
            position: new google.maps.LatLng(,47.623822,-122.355237
            ),
            //17
            position: new google.maps.LatLng(,47.579068,-122.299594
            ),
            //18
            position: new google.maps.LatLng(,47.579831,-122.38593
            ),
            //19
            position: new google.maps.LatLng(,47.718018,-122.311915
            ),
            //20
            position: new google.maps.LatLng(,47.559739,-122.385295
            ),
            //21
            position: new google.maps.LatLng(,47.677932,-122.354581
            ),
            //22
            position: new google.maps.LatLng(,47.649861,-122.35007
            ),
            //23
            position: new google.maps.LatLng(,47.679988,-122.325477
            ),
            //24
            position: new google.maps.LatLng(,,47.6814,-122.290689
            ),
            //25
            position: new google.maps.LatLng(,47.662626,-122.299708
            ),
            //26
            position: new google.maps.LatLng(,47.641021,-122.325562
            ),
            type: 'info'
          }, {
        ];
        for (var i = 0, feature; feature = features[i]; i++) {
          addMarker(feature);
        }
      }
      