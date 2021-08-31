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
        console.log("Affichage de l'ourson choisi par l'utilisateur")
        console.table(data)

        // passage du prix en €
        let price = data.price / 100
        console.log("prix en € - " + price)  
        
        // Insertion Name
      document.querySelector('.card_product-name').innerHTML = `<h3>${data.name}</h3> `  
        console.log("nom de l'ourson : " + data.name)

        // Insertion Photo  URL
        document.querySelector('.card_product-img').innerHTML = `<img src="${data.imageUrl}" alt= "Photo ${data.name}">`
        console.log("url de l'image : " + data.imageUrl)

        // Insertion Description + Prix
        document.querySelector('.card_product-description').innerHTML = `
        <p>${data.description}</p>
        <p class="prix">${price} €</p>`
        console.log("description de l'ourson : " + data.description)
        
        // Affichage des selections de couleurs possible sur la page html
        for (let i = 0; i < data.colors.length; i++) {
          document.querySelector('#select_color').innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`
        }
        console.table(data.colors)

        // récuperation de la quantité
        let quantity = 1

        // récuperation de la couleurs choisi

        let colors = document.querySelector('#select_color').value

        // Récupération des informations à rajouter dans le panier

        let product = {
          id_ourson: data._id,
          nom_ourson: data.name,
          prix : price,
          couleur : colors,
          quantité : quantity,
        }

        // Déclaration du tableau "oursons"
        let products = []

       
        // Afficher le LocalStorage
        let oldCart = JSON.parse(localStorage.getItem('teddie'))
        console.log(oldCart)
        //  vérifier si le localStorage est vide

        // Au click sur le bouton validate
        document.querySelector('.validate').addEventListener('click', function() {
        if (oldCart == null) 
        {
          // Si il est vide
                  //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau products
                  
                  products.push(product)
                  

                  //  passer le tableau en JSON et le mettre dans le localStorage
                  console.log("Affichage du tableau Oursons si pas d'ancien panier")
                  console.table(products)
                  localStorage.setItem('teddie', JSON.stringify(products))
          }
          else
          {
          //  Si il n'est pas vide
                  //  rajouter les inforamtions de l'ancien panier au tableau products
                  for (let i = 0 ; i < oldCart.length ; i++){
                    products.push(oldCart[i])
                  }
                  //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau oursons
                  products.push(product)
                  //  passer le tableau en JSON et le mettre dans le localStorage
                  console.log("Affichage du tableau Oursons si présence d'un élément dans ancien panier")
                  console.table(products)
                  localStorage.setItem('teddie', JSON.stringify(products))
         }     
          alert(`${data.name} est rajouté au panier`)
          document.documentElement.scrollTop = 0
        })
      })
  )
  .catch(
    (error) => console.log('erreur : ' + error)
    );

  