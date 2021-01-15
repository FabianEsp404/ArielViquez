let gMapa;
let Position;
let gLatLonUser;
let marker;
10.010091069984993, -84.21787495228907
function initMap() {
    gMapa = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 10.010091069984993, lng: -84.21787495228907 },
        zoom: 15
    });
    Position = { lat: 10.010091069984993, lng:  -84.21787495228907};

    var config = {
        map: gMapa,
        animation: google.maps.Animation.DROP,
        position: Position,
        title: "Víquez y Asociados"
    }

    marker = new google.maps.Marker(config);
    
}

function fn_error() { }

function fn_ok(respuesta) {
    var lat = respuesta.coords.latitude;
    var lon = respuesta.coords.longitude;

    gLatLonUser = new google.maps.LatLng(lat, lon);
    marker.setMap(null);
    
   
    trazarRuta();
    
    

}
function comoLLegar() {
    navigator.geolocation.getCurrentPosition(fn_ok, fn_error);
}
function trazarRuta() {
    var configDR = {
        map: gMapa,
    }

    var configDS = {
        origin: gLatLonUser,
        destination: Position,
        travelMode: google.maps.TravelMode.DRIVING
    }

    var directionService = new google.maps.DirectionsService();
    var directionRenderer = new google.maps.DirectionsRenderer(configDR);
    directionService.route(configDS, fnRutear)

     function fnRutear(resultados,status){
         if(status == "OK"){
             directionRenderer.setDirections(resultados) ;
         }
         else{
             alert("Error" +status);
         }
     }
}


document.getElementById("ComoLlegar").addEventListener("click", comoLLegar); 