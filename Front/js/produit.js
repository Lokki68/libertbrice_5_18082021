// Récupération de l'_id de l'ouson dans l'URL
let params = new URL(document.location).searchParams;
let id = params.get("id");


let urlTeddy = `http://localhost:3000/api/teddies/${id}`;
// Affichage de l'urlTeddy pour la demande au backend dans la console (pour vérification)
 
// Demande au backend les informations de l'ourson séléctionné par l'utilisateur
fetch(urlTeddy)
  .then(response =>
    response.json()
      .then(data => {
        // Affichage des informations de l'ourson séléctionné par l'utilisateur dans la console (pour vérification)

        // passage du prix en €
        let price = data.price / 100;
        
        // Insertion Name
      document.querySelector('.card_product-name').innerHTML = `<h3>${data.name}</h3> `;  

        // Insertion Photo  URL
        document.querySelector('.card_product-img').innerHTML = `<img src="${data.imageUrl}" alt= "Photo ${data.name}">`;

        // Insertion Description + Prix
        document.querySelector('.card_product-description').innerHTML = `
        <p>${data.description}</p>
        <p class="prix">${price} €</p>`;
        
        // Affichage des selections de couleurs possible sur la page html
        for (let i = 0; i < data.colors.length; i++) {
          document.querySelector('#select_color').innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
        }

        // récupération de la quantité
        let quantity = 1;

        // récupération de la couleurs choisi

        let colors = document.querySelector('#select_color').value;

        // Récupération des informations à rajouter dans le panier

        let product = {
          id_ourson: data._id,
          nom_ourson: data.name,
          prix : price,
          couleur : colors,
          quantité : quantity,
        };

        // Déclaration du tableau "oursons"
        let products = [];

       
        // Afficher le LocalStorage
        let oldCart = JSON.parse(localStorage.getItem('teddie'));
        //  vérifier si le localStorage est vide

        // Au click sur le bouton validate
        document.querySelector('.validate').addEventListener('click', function() {
        if (oldCart == null) 
        {
          // Si il est vide
                  //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau products
                  
                  products.push(product);

                  //  passer le tableau en JSON et le mettre dans le localStorage
                  localStorage.setItem('teddie', JSON.stringify(products));
          }
          else
          {
          //  Si il n'est pas vide
                  //  rajouter les informations de l'ancien panier au tableau products
                  for (let i = 0 ; i < oldCart.length ; i++){
                    products.push(oldCart[i]);
                  }
                  //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau oursons
                  products.push(product);
                  //  passer le tableau en JSON et le mettre dans le localStorage
                  localStorage.setItem('teddie', JSON.stringify(products));
         }     
          alert(`${data.name} est rajouté au panier`);
          document.documentElement.scrollTop = 0;
        });
      })
  )
  .catch(
    (error) => console.log('erreur : ' + error)
    );

  