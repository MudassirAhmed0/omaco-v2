
function myMap() {
    var mapProp = {  
         center: { lat:21.5533311, lng: 39.1716305 },  
        //  center: ( ),  
        zoom: 14,
        draggable: true
    };

 
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

   
 
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(21.5533311,39.1716305) ,
        map: map,
    });
}
   
