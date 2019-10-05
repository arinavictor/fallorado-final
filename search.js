const body = document.body
const $container = document.querySelector('.event-container')

function createCategoryOptions(categories){
    const categoryDropDown = document.getElementById('category_dropdown')
    categories.forEach(category => {
        const option = document.createElement('option')
        option.innerText = category.name
        option.value = category.id
        categoryDropDown.appendChild(option)
    })
}

function createEventCards(events){
    events.forEach(event => {
        const div2 = document.createElement('div')
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
    const categoryList = document.getElementById('filter-buttons')
    categories.forEach(category => {
        const li = document.createElement('li')
        li.innerText = `${category.name}`
        li.addEventListener("click", function(){
            while ($container.firstChild) {
                $container.removeChild($container.firstChild)
            }
            const p = document.createElement('p')
            li.appendChild(p)
            createEventCards(category.events)  
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



