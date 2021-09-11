const urlTeddies = 'http://localhost:3000/api/teddies';


main()

async function main() {
  const Teddies = await getTeddies()
  

  Teddies.forEach(teddy => {
    displayTeddies(teddy)
  })
  cartNumber()
}

// Afficher le nombre d'article dans le panier

function cartNumber() {

  let contentCart = JSON.parse(localStorage.getItem('teddy'))

    if (contentCart !== null){
    
      nb = contentCart.length;
      document.querySelector('.badge').innerHTML += `${nb}`;
    
    } else {
    
      document.querySelector('.badge').innerHTML += 0;
    
    }
}

// Récupère la base de données du backend

function getTeddies() {
  return fetch(urlTeddies)
  .then((response) => {
    return response.json()
  })
  .then(function (teddies) {
    return teddies
  })
  .catch((error) => {
    document.querySelector('#notification').innerHTML = `
    <div class="notification_alert" role="alert">
      ${error}
    </div>`
  })
}

// Affiche les produit sur la page

function displayTeddies(teddy) {
  document.querySelector('#presentations').innerHTML += `
    <div class="card mt-2" style="width: 70%;"> 
        <img src="${teddy.imageUrl}" class="card-img-top" alt="${teddy.name}">
      <div class="card-body d-flex flex-column justify-content-center">
        <h3 class="card-title">${teddy.name}</h3>
        <a href="produit.html?id=${teddy._id}" class="btn btn-secondary">Découvre moi</a>
      </div>
    </div>
  `  
};
