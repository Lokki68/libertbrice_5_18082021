// Récupération du LocalStorage
let oursons = JSON.parse(localStorage.getItem('teddy'));

let affichage = "<ul class='list-group'>"

console.log(oursons)

let products = []

if (oursons !== null){
for (let ourson of oursons){
  

  // passage du prix en €

let nb = parseInt(ourson.quantité)

let priceTotal = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(ourson.prix);

// Récupération des informations à afficher dans le panier
affichage += `<li class='list-group-item d-flex justify-content-between align-item '> 
<div class='ms-2 me-auto'>
<div class='fw-bold'>${ourson.nom_ourson}</div>
${priceTotal}
</div>
<div class="detail">
<div>qte - ${ourson.quantité} </div>
<span><i class="far fa-trash-alt"></i></span>
</div>
</li>`     
}



  // Récupération de la somme total + affichage

  let totalPrice = []

  oursons.forEach(ourson => {
    totalPrice.push(ourson.prix)
  })

  let sumPrice = 0
  for (let i = 0; i < totalPrice.length; i++){
    sumPrice += totalPrice[i]
  }

  let sumPriceEuro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(sumPrice)

  console.log(sumPriceEuro)

  affichage += `
  <div class="alert alert-primary mt-1" role="alert">
  <i class="fas fa-check-circle"></i> Votre total s\'élève à <strong>${sumPriceEuro}</strong> 
  </div></>`

  document.querySelector('#paniers').innerHTML = affichage 
  document.querySelector('#paniers').innerHTML += ` 
  <div class="d-grid mt-3 col-6 mx-auto">
  <button class="btn btn-danger clear" > Vider le panier </button>
  </div>
  `       
      document.querySelector('.clear').addEventListener('click', () => {
        localStorage.removeItem('teddy')
        location.reload()
      })

  }else{
    //  Vérification si le panier est vide (affiche une alerte en cas de panier vide)
        document.querySelector('#paniers').innerHTML = `
        <div class="alert alert-danger mt-3" role="alert">
          Votre panier est vide !
        </div>
        `
      }

    // })
    // .catch((error)=> console.log('erreur :' + error)))

// Validation formulaire

let form = document.querySelector('#loginForm')
  

  
// Écouter la modification de lastName

form.lastName.addEventListener('change', function () {
  validLastName(this)
})

// Écoute de la modification de firstName

form.firstName.addEventListener('change', function () {
  validFirstName(this)

})

// Écoute de la modification de l'address
form.address.addEventListener('change', function (){
  validAddress(this)
})

// Écoute de la modification de City
form.city.addEventListener('change', function () {
  validCity(this)
})

// Écoute de la modification de l'email

form.email.addEventListener('change', function (){
  validEmail(this)
})


// Validation des informations

// validation lastName
const validLastName = function(inputLastName){
  // création de la RegExp pour validation LastName
  let lastNameRegExp = new RegExp(
    "^[A-Z a-z]{2,18}$",
    "g"
  )

  // Récupération de la balise Small
  let small = inputLastName.nextElementSibling

  // Test de l'expression régulière
  if (lastNameRegExp.test(inputLastName.value)){
    small.innerHTML = "Nom de famille valide"
    small.classList.remove('text-danger')
    small.classList.add("text-success")
    return true
  } else {
    small.innerHTML = "Nom de famille non valide"
    small.classList.remove('text-success')
    small.classList.add("text-danger")
    return false
  }
}

// validation firstName
const validFirstName = function(inputFirstName){
  // création de la RegExp pour validation FirstName
  let firstNameRegExp = new RegExp(
    "^([A-Z]|[a-z])[a-z]*(-)?[a-z]+",
    "g"
  )

  // Récupération de la balise Small
  let small = inputFirstName.nextElementSibling

  // Test de l'expression régulière
  if (firstNameRegExp.test(inputFirstName.value)){
    small.innerHTML = "Prénom valide"
    small.classList.remove('text-danger')
    small.classList.add("text-success")
    return true
  } else {
    small.innerHTML = "Prénom non valide"
    small.classList.remove('text-success')
    small.classList.add("text-danger")
    return false
  }
}

// validation Address
const validAddress = function(inputAddress){
  // création du test
  var msg
  var valid = false
  if (inputAddress.value.length < 3) {
    msg = "Veuillez saisir votre adresse"
  }else{
    msg = 'Adresse valide'
    valid = true
  }

  // Récupération de la balise Small
  let small = inputAddress.nextElementSibling

  // Test de l'expression régulière
  if (valid){
    small.innerHTML = msg
    small.classList.remove('text-danger')
    small.classList.add("text-success")
    return true
  } else {
    small.innerHTML = msg
    small.classList.remove('text-success')
    small.classList.add("text-danger")
    return false
  }
}

// validation city
const validCity = function(inputCity){
  // création du test
  var msg
  var valid = false
  if (inputCity.value.length < 3) {
    msg = "Veuillez saisir votre ville"
  }else{
    msg = 'Ville valide'
    valid = true
  }

  // Récupération de la balise Small
  let small = inputCity.nextElementSibling

  // Test de l'expression régulière
  if (valid){
    small.innerHTML = msg
    small.classList.remove('text-danger')
    small.classList.add("text-success")
    return true
  } else {
    small.innerHTML = msg
    small.classList.remove('text-success')
    small.classList.add("text-danger")
    return false
  }
}

//  Validation de l'adresse mail
const validEmail = function (inputEmail) {
  // Création de la RegExp pour validation Email
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
    "g"
  );

  // Récupération de la balise SMALL
  let small = inputEmail.nextElementSibling;

  // On test l'expression régulière
  if (emailRegExp.test(inputEmail.value)) {
    small.innerHTML = "Adresse Valide";
    small.classList.remove("text-danger");
    small.classList.add("text-success");
    return true;
  } else {
    small.innerHTML = "Adresse non Valide";
    small.classList.remove("text-success");
    small.classList.add("text-danger");
    return false;
  }
};

// Écoute du bouton envois

document.querySelector('.send').addEventListener('click',function (e) {
  e.preventDefault()

  // rajout des information contact

  if (validLastName(form.lastName) && validFirstName(form.firstName) &&  validAddress(form.address) && validCity(form.city) &&validEmail(form.email)) {

    // Ajout des informations du contact dans l'object contact
    let contact = {
      lastName : form.lastName.value,
      firstName : form.firstName.value,
      address : form.address.value,
      city : form.city.value,
      email : form.email.value,
    }
    // Ajout de "contact" dans le localStorage
    console.log(contact)


    // ------------------------------------------------------------


    // Ajout des id dans products
    let products = []

    oursons.forEach(ourson => {
      products.push(ourson.id)
    })

    console.log(products)


    // Envois de la request POST


    // Mise en place des variables

    let url = 'http://localhost:3000/api/teddies/order'

    let command = {
      contact : contact,
      products : products
    } 

    let myInit = {
      method : 'POST',
      body : JSON.stringify(command),
      headers : {
        'Content-Type': 'application/json'
      }
    }

    // Envois Fetch

    fetch(url, myInit)
      .then(response => response.json())
      .then(response => {
        let order = JSON.stringify(response)
        localStorage.setItem('order', order)

        // Changement de page
        location.href = 'confirm.html';
      })
      .catch(err => {
        alert('Envois Impossible, Vérifier les informations');
      })

  }
  
})