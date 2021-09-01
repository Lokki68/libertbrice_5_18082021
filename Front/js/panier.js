// Récupération du LocalStorage
let products = JSON.parse(localStorage.getItem('teddie'));

let affichage = "<ul class='list-group'>"

if (products !== null){
for (let product of products){

// passage du prix en €

let nb = parseInt(product.quantité)

let priceTotal = product.prix * nb;

// Récupération des informations à afficher dans le panier
affichage += `<li class='list-group-item d-flex justify-content-between align-item '> 
<div class='ms-2 me-auto'>
<div class='fw-bold'>${product.nom_ourson}</div>
${priceTotal} - €
</div>
<div class="detail">
<div>qte - ${product.quantité} </div>
<span><i class="far fa-trash-alt"></i></span>
</div>S
</li>`     
}

affichage += `</>`

  document.querySelector('#paniers').innerHTML = affichage 
  document.querySelector('#paniers').innerHTML += ` 
  <div class="d-grid mt-3 col-6 mx-auto">
  <button class="btn btn-danger clear" > Vider le panier </button>
</div>
  `       
      document.querySelector('.clear').addEventListener('click', () => {
        localStorage.removeItem('teddie')
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
  
let contact

// rajout du panier dans la commande
  
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

// Ecoute de la modification de City
form.city.addEventListener('change', function () {
  validCity(this)
})

// Ecoute de la modification de l'email

form.email.addEventListener('change', function (){
  validEmail(this)
})



// Écoute du bouton envois

document.querySelector('.send').addEventListener('click',function (e) {
  e.preventDefault()
  if (validLastName(form.lastName) && validFirstName(form.firstName) &&  validAddress(form.address) && validCity(form.city) &&validEmail(form.email)) {

    // Ajout des informations du contact dans l'object contact
    contact = {
      lastName : form.lastName.value,
      firstName : form.firstName.value,
      address : form.address.value,
      city : form.city.value,
      email : form.email.value,
    }
    // Ajout de "Contact" dans le localStorage
    localStorage.setItem('contact', JSON.stringify(contact))
  }
  href.location
})


// validation lastName
const validLastName = function(inputLastName){
  // création de la RegExp pour validation LastName
  let lastNameRegExp = new RegExp(
    "^[A-Z]+[a-z]{2,18}$",
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

