const searchParams = new URLSearchParams(window.location.search)
const query = searchParams.get('events')
const body = document.body
const $container = document.querySelector('.event-container')

function createCategoryOptions(categories){
    let categoryDropDown = document.getElementById('category_dropdown')
    categories.forEach(category => {
        let option = document.createElement('option')
        option.innerText = category.name
        option.value = category.id
        categoryDropDown.appendChild(option)
    })
}

function createEventCards(events){
    events.forEach(event => {
        let div2 = document.createElement('div')
        div2.className = 'card' 

        div2.innerHTML = 
        `<a href= '${event.url}'>${event.name}</a>
        <p>${event.location}</p>
        <p>${event.description}</p>
        `
        $container.appendChild(div2)
    })
}

function filterByCategories(categories){
    let categoryList = document.getElementById('filter-buttons')
    categories.forEach(category => {
        let li = document.createElement('li')
        li.innerText = `${category.name}`
        li.addEventListener("click", function(){
            while ($container.firstChild) {
                $container.removeChild($container.firstChild)
            }
            let p = document.createElement('p')
            let events =  category.events.map(event => event)
            li.appendChild(p)
            createEventCards(events)  
        })
        categoryList.appendChild(li)
    })
   
}

fetch("http://localhost:9000/categories")
    .then(response => response.json())
    .then(createCategoryOptions)


fetch("http://localhost:9000/categories")
    .then(response => response.json())
    .then(filterByCategories)



//     function getEventLocation(events) {
//         const geocoder = new google.maps.Geocoder()
//         events.forEach(event => {
//                 codeAddress(event.location, geocoder)
//                 console.log(event.location)
            
//         })
//     }
// }

//     function codeAddress(address, geocoder) {
//         setTimeout(() => {

//             geocoder.geocode( {address:address}, function(results, status) 
//             {
//                 if (status == google.maps.GeocoderStatus.OK) 
//           {
//               map.setCenter(results[0].geometry.location);//center the map over the result
//             //place a marker at the location
//             var marker = new google.maps.Marker(
//             {
//                 map: map,
//                 position: results[0].geometry.location
//             });
//         }  else {
//             // alert('Geocode was not successful for the following reason: ' + status);
//             console.log('yea yea')
//         }
        
//         // return function(vPostCode) {
//         //     if (geocoder) setTimeout(geocoder.geocode.bind(geocoder, { 'address': "'" + vPostCode + "'"}, GeocodeCallback), index*delay);
//         //     index++;
//         // };
//     })
// }, 5000)
//     }