function myMap() {
  var mapProp = {
    center: { lat: 21.551913047921776, lng: 39.17393776073538 },
    //  center: ( ),
    zoom: 14,
    draggable: true,
  };

  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  marker = new google.maps.Marker({
    position: new google.maps.LatLng(21.551913047921776, 39.17393776073538),
    map: map,
  });
}
