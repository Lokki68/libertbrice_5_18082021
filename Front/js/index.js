const urlTeddy = 'http://localhost:3000/api/teddies'

fetch(urlTeddy)
  .then(response =>
    response.json()
      .then(data => {

        console.log(data)
        
        data.forEach(teddie => {


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

