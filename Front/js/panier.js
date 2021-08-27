// Récupération du LocalStorage
let oursons = JSON.parse(localStorage.getItem('teddie'));


console.table(oursons)

let affichage = "<ul class='list-group'>"

if (oursons !== null){
for (let ourson of oursons){

console.table(ourson)
// passage du prix en €
let price = ourson.price/100 

console.log(price)
console.log(ourson.name)
// Récupération des informations à afficher dans le panier
affichage += `<li class='list-group-item d-flex justify-content-between align-item '> 
<div class='ms-2 me-auto'>
<div class='fw-bold'>${ourson.name}</div>
${price} - €
</div>
<span></span>
</li>`     
}

affichage += '</ul>'

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


  //   const validEmail = function (inputEmail) {
  // // Création de la RegExp pour validation Email
  // let emailRegExp = new RegExp(
  //   "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$",
  //   "g"
  // )};

  //   document.querySelector('#firstName').addEventListener('change',function (){
  //     var firstName = this.value
  //   })

  //   console.log(firstName)