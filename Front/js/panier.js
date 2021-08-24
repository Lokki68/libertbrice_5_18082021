
let cart = localStorage.getItem('addCart')

let urlTeddy = `http://localhost:3000/api/teddies/${cart}`

console.log(urlTeddy)

fetch(urlTeddy)
  .then(response =>
    response.json()
    .then(data =>{
      console.log(data)

      // passage du prix en Euros
      let price = data.price / 100

      let affichage = "<ul class='list-group mt-3'>";

          affichage += `
          <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${data.name}</div>
            ${price}
            </div>
            <span class="badge bg-primary rounded-pill"></span>
          </li>`;
          affichage += '</ul>';

      document.querySelector('#paniers').innerHTML = affichage;
      
    })
    .catch((error)=> console.log('erreur :' + error)))