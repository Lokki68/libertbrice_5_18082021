const urlTeddies = 'http://localhost:3000/api/teddies';


main()

async function main() {
  const Teddies = await getTeddies()
  
  Teddies.forEach(teddy => {
    displayTeddies(teddy)
  })
}


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


function displayTeddies(teddy) {
  document.querySelector('#presentations').innerHTML += `
    <div class="cards"> 
      <div class="card-img">
        <img src="${teddy.imageUrl}" alt="${teddy.name}">
      </div>
      <div class="card-description">
        <div class="description-name">
          <h3>${teddy.name}</h3>
        </div>
        <div class="description-discovert">
          <a href="produit.html?id=${teddy._id}"><button  class="btn">Découvre moi</button></a>
        </div>
      </div>
    </div>
  `  
};
