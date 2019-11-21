const body = document.body
const $event = document.querySelector('#event-link')
const $search = document.querySelector('#search-link')
const $container = document.querySelector('.card-container')
const BASE_URL = "https://fall-o-rado.herokuapp.com"

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

fetch(`${BASE_URL}/events`)
    .then(response => response.json())
    .then(createEventCards)


    
    

