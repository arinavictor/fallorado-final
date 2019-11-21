let map;
const image = src='tiny_pumpkin.png'
const BASE_URL = "https://fall-o-rado.herokuapp.com"

function initMap() {
    fetch(`${BASE_URL}/events`)
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
    const latitude = event.latitude
    const longitude = event.longitude
    const latLng = new google.maps.LatLng(latitude, longitude)
    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: image
    })
    marker.addListener('click', function(){
      const eventInfo = new google.maps.InfoWindow({
        content: `<a href= '${event.url}'>${event.name}</a>
        <p>${event.location}</p>
        `
      })
      eventInfo.open(map, marker)
}
    )}
    }
