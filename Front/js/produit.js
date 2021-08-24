// Récupération de l'_id de l'ouson dans l'URL
let params = new URL(document.location).searchParams
let id = params.get("id")

// Affichage de l'_id de l'ourson dans la console (pour vérification)
console.log(id)

let urlTeddy = `http://localhost:3000/api/teddies/${id}`
// Affichage de l'urlTeddy pour la demande au backend dans la console (pour vérification)
console.log(urlTeddy)
 
// Demande au backend les informations de l'ourson séléctionné par l'utilisateur
fetch(urlTeddy)
  .then(response =>
    response.json()
      .then(data => {
        // Affichage des informations de l'ourson séléctionné par l'utilisateur dans la console (pour vérification)
        console.log(data)

        // passage du prix en €
        let price = data.price / 100

        // Insertion Name
      document.querySelector('.card_product-name').innerHTML = `<h3>${data.name}</h3> `  
        
        // Insertion Photo  URL
        document.querySelector('.card_product-img').innerHTML = `<img src="${data.imageUrl}" alt= "Photo ${data.name}">`

        // Insertion Description + Prix
        document.querySelector('.card_product-description').innerHTML = `
        <p>${data.description}</p>
        <p class="prix">${price} €</p>`
        
        // Affichage des selections de couleurs possible sur la page html
        for (let i = 0; i < data.colors.length; i++) {
          console.log(data.colors[i])
          document.querySelector('#select_color').innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`
        }
        
        // contenu du panier
        let cart = data._id
        
        // Affichage du contenu du panier dans la console (pour vérification)
        console.log(cart)


        // Ecoute du click sur le bouton valider pour rajout de l'ourson au panier
        document.querySelector('.validate').addEventListener('click',function(){
          // Ajout de l'ourson dans le localStorage
          localStorage.setItem('addCart', cart)
          // Affichage de l'ajout sous forme d'alert dans le navigateur
          alert(`${data.name} est dans votre panier`)
          // Scroll Up
          document.documentElement.scrollTop=0
        })

      })
  )
  .catch((error) => console.log('erreur : ' + error));

  