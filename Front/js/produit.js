let params = new URL(document.location).searchParams
let id = params.get("id")


console.log(id)

let urlTeddy = `http://localhost:3000/api/teddies/${id}`
console.log(urlTeddy)
 
fetch(urlTeddy)
  .then(response =>
    response.json()
      .then(data => {

        console.log(data)
        // passage du prix en €
        let price = data.price / 100

      document.querySelector('.card_product').innerHTML = `
      <div class="card_product-name">
      ${data.name}
    </div>
    <div class="card_product-img">
      <!-- implémenté par Js -->
      <img src="${data.imageUrl}" alt="Photo ${data.name}">
    </div>
    <div class="card_product-description">
      <!-- implémenté par Js -->
      <p>${data.description}</p>
      <p class="prix"> ${price} €</p>
    </div>
    <div class="option_achat">
    <label for="select_color"> Couleur : </label>
    <select id="select_color">
      
    </select>
    <form class="form">
      <label for="nombre">Nb :</label>
      <input type="number" id="nombre" name="name" required min="1" max="10" size="10">
    </form>
    <button class="btn validate" data-id="test" type="submit">C'est toi que je veux</button>
    </div>
      `  
        })
  )
  .catch((error) => console.log('erreur : ' + error));
