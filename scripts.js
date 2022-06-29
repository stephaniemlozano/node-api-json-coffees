const menu = document.querySelector('.menu-items')

// get data from local API, get JSON from here https://api.sampleapis.com/coffee/hot

fetch('https://api.sampleapis.com/coffee/hot')// it should fetch local fetch('http://localhost:4000')
  .then(myRes => myRes.json()) // handling promise then formatting to json
  .then(data => {
    let html = ''

    data.forEach(eachItem => {
      let htmlItem = `<div class="menu-items__item">
      <img src='${eachItem.image}'>
      <div> 
        <h3>${eachItem.id}. ${eachItem.title}</h3>
        <p>${eachItem.description}</p>
      </div>
    </div>`

      html += htmlItem
    })
    menu.innerHTML = html
  })
  .catch(err => console.error(err))
