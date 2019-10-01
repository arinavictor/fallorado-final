let queryParams = new URLSearchParams(window.location.search)
let id = queryParams.get('id')

const body = document.body
const $event = document.querySelector('#event-link')
const $search = document.querySelector('#search-link')
const $container = document.querySelector('.event-container')
console.log($container)

    
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




fetch("http://localhost:9000/events")
    .then(response => response.json())
    .then(createEventCards)


    

