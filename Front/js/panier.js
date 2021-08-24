// Récupération du LocalStorage
let cart = localStorage.getItem('addCart')

// Ajout de l'ID du localStorage à l'URL
let urlTeddy = `http://localhost:3000/api/teddies/${cart}`

// Affichage de l'URL dans la console (pour vérification)
console.log(urlTeddy)

// Récupération de l'ourson sur le backend
fetch(urlTeddy)
  .then(response =>
    response.json()
    .then(data =>{

      // Affichage de la récupération du backend dans la console (pour vérification)
      console.log(data)

      // passage du prix en Euros
      let price = data.price / 100

      // Préparation pour l'affichage dans le panier
      let affichage = "<ul class='list-group mt-3'>";

          // Récupération des informations à afficher dans le panier
          affichage += `
          <li class="list-group-item d-flex justify-content-between align-items-center">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${data.name}</div>
            ${price} - €
            </div>            
            <span class="badge bg-secondary rounded-pill"><i class="far fa-trash-alt"></i></span>
          </li>`;
          affichage += '</ul>';

          // Ajout des informations récupéré à la page html
      document.querySelector('#paniers').innerHTML = affichage;
      
      // Ecoute du click sur la corbeille (pour supprimer les éléments du panier et actualiser la page)
      document.querySelector('.badge').addEventListener('click', function(){
        localStorage.removeItem('addCart')
        location.reload()
      })

      // Vérification si le panier est vide (affiche une alerte en cas de panier vide)
      if (cart == null){
        document.querySelector('#paniers').innerHTML = `
        <div class="alert alert-danger mt-3" role="alert">
          Votre panier est vide !
        </div>
        `
      }

    })
    .catch((error)=> console.log('erreur :' + error)))


    const validEmail = function (inputEmail) {
  // Création de la RegExp pour validation Email
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  )};

    document.querySelector('#firstName').addEventListener('change',function (){
      var firstName = this.value
    })

    console.log(firstName)