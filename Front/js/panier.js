
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

          affichage += `<li class="list-group-item"><strong>${data.name}</strong> - ${price} €</li>`;
          affichage += '</ul>';

      document.querySelector('#paniers').innerHTML = affichage;
      
    })
    .catch((error)=> console.log('erreur :' + error)))