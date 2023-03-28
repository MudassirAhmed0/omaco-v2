
function myMap() {
    var mapProp = {  
         center: { lat:27.920091, lng: 34.903958 },  
        //  center: ( ),  
        zoom: 9.5,
        draggable: true
    };

 
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

   
 
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(27.934363695177673,34.904101026832535) ,
        map: map,
    });
}
   
