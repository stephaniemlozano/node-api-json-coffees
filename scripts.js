// copy JSON DATA from https://api.sampleapis.com/coffee/hot 
// create JSON file in local API with all Coffees

// fetch local API and render coffee list here
const menuCoffee = document.querySelector('.menu-items')

fetch('http://localhost:4001/')
    .then(response => response.json())
    .then(coffeeMenu => {
        let html = ''
        coffeeMenu.forEach(items => {
            let htmlSegment = `<div class="menu-items__item">
            <img src=${items.image}>
            <h3>${items.id}. ${items.title}</h3>
            <p>${items.description}</p>
            <p>${items.ingredients}</p>
            </div>`
        html += htmlSegment
        })
        menuCoffee.innerHTML = html
    })

    .catch(error => console.error(error))
