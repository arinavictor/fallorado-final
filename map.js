
// var limit = require("simple-rate-limiter");
// var request = limit(require("request")).to(10).per(1000);

var map;
let image = 'https://image.flaticon.com/icons/png/128/2077/2077020.png'
function initMap() {
    fetch("http://localhost:9000/events")
    .then(response => response.json())
    .then(makeEventMarker)

    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 39.7392, lng: -104.9903},
    zoom: 10
});

function makeEventMarker(events) {
    events.forEach(event => {
        
        setEventCoords(event)
    })
}


function setEventCoords(event){
    let latitude = event.latitude
    let longitude = event.longitude
    let latLng = new google.maps.LatLng(latitude, longitude)
    let marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image
    })
    marker.addListener('click', function(){
      let eventInfo = new google.maps.InfoWindow({
        content:  `<a href= '${event.url}'>${event.name}</a>
        <p>${event.location}</p>
        `
    
        
      })
    //   eventInfo.classList.add('infoCard')
      eventInfo.open(map, marker)
      console.log(eventInfo)

}
    )}


//    function markerCard(event) {
//             let div2 = document.createElement('div')
//             div2.className = 'card' 

//             div2.innerHTML = 
//             `<a href= '${event.url}'>${event.name}</a>
//             <p>${event.location}</p>
//             <p>${event.description}</p>
//             `
//         }

    


    }
