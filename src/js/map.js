      export default
      import $ from 'jquery';

      var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.751894, lng: -84.391327},
          zoom: 8
        });
      }

