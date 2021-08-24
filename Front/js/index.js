// Récupération de l'url pour la demande sur le backend
const urlTeddy = 'http://localhost:3000/api/teddies'

// Demande des informations au backend
fetch(urlTeddy)
  .then(response =>
    response.json()
      .then(data => {

        // Affichage du retour du backend dans la console (pour vérification)
        console.log(data)
        
        // Affichage de tous les oursons
        data.forEach(teddie => {

          // Récupération de l'id = presentations pour affichage sur la page html des oursons
      document.querySelector('#presentations').innerHTML += `
      <div class="cards"> 
      <div class="card-img">
          <img src="${teddie.imageUrl}" alt="${teddie.name}">
        </div>
        <div class="card-description">
          <div class="description-name">
            <h3>${teddie.name}</h3>
          </div>
          <div class="description-discovert">
          <a href="produit.html?id=${teddie._id}"><button  class="btn">Découvre moi</button></a>
          </div>
        </div>
        </div>
      `  
        })
      })
  )
  .catch((error) => console.log('erreur : ' + error));

