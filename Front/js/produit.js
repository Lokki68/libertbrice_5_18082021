// Déclaration des constantes

const params = new URL(document.location).searchParams;
const id = params.get("id");
const urlTeddy = `http://localhost:3000/api/teddies/${id}`

console.log(id);

main()

async function main() {
  const teddy = await getTeddy();

  displayTeddy(teddy);
  addCart(teddy);

}


function getTeddy() {
  return fetch(urlTeddy)
  .then((response) => {
    return response.json()
  })
  .then(function (teddy) {
    return teddy
  })
  .catch((error) => {
    document.querySelector('#notification').innerHTML = `
    <div class="notification_alert" role="alert">
      ${error}
    </div>`
  })
}

function displayTeddy(teddy) {

  // passage du prix en €
   let price = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(teddy.price / 100);
  
  // Insertion Name
  document.querySelector('.card_product-name').innerHTML = `<h3>${teddy.name}</h3> `;  

  // Insertion Photo  URL
  document.querySelector('.card_product-img').innerHTML = `<img src="${teddy.imageUrl}" alt= "Photo ${teddy.name}">`;

  // Insertion Description + Prix
  document.querySelector('.card_product-description').innerHTML = `
    <p>${teddy.description}</p>
    <p class="prix">${price}</p>`;
  
  // Affichage des selections de couleurs possible sur la page html
  for (let i = 0; i < teddy.colors.length; i++) {
    document.querySelector('#select_color').innerHTML += `<option value="${teddy.colors[i]}">${teddy.colors[i]}</option>`;
  }
}

 function addCart(teddy){
  let ourson = {
    id: teddy._id,
    nom_ourson: teddy.name,
    prix : teddy.price,
    couleur : teddy.colors, // Valeurs par default pour le MVP
    quantité : 1, // Valeurs par default pour le MVP
  };

      // Déclaration du tableau "oursons"
  let oursons = [];

      
      // Afficher le LocalStorage
  let oldCart = JSON.parse(localStorage.getItem('teddy'));
      //  vérifier si le localStorage est vide
      // Au click sur le bouton validate
  document.querySelector('#validate').addEventListener('click', () => {

      console.log(oldCart); 

    if (oldCart == null){
      // Si il est vide
        //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau oursons
        
        oursons.push(ourson);

        //  passer le tableau en JSON et le mettre dans le localStorage
        localStorage.setItem('teddy', JSON.stringify(oursons));
    } 
    else {
      // S'il n'est pas vide

      //  rajouter les informations de l'ancien panier au tableau oursons
      for (let i = 0 ; i < oldCart.length ; i++){
        oursons.push(oldCart[i]);
      }

      //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau oursons
      oursons.push(ourson);

      //  passer le tableau en JSON et le mettre dans le localStorage
      localStorage.setItem('teddy', JSON.stringify(oursons));
    }
      alert(`${teddy.name} est rajouté au panier`)
      document.documentElement.scrollTop = 0
  })
}

// Affichage de l'urlTeddy pour la demande au backend dans la console (pour vérification)
 
// Demande au backend les informations de l'ourson sélectionné par l'utilisateur
// fetch(urlTeddy)
//   .then(response =>
//      response.json().then((data) => {
//         // Affichage des informations de l'ourson sélectionné par l'utilisateur dans la console (pour vérification)
//           console.log(data);

//         // passage du prix en €
//         let price = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(data.price / 100);
        
//         // Insertion Name
//         document.querySelector('.card_product-name').innerHTML = `<h3>${data.name}</h3> `;  

//         // Insertion Photo  URL
//         document.querySelector('.card_product-img').innerHTML = `<img src="${data.imageUrl}" alt= "Photo ${data.name}">`;

//         // Insertion Description + Prix
//         document.querySelector('.card_product-description').innerHTML = `
//           <p>${data.description}</p>
//           <p class="prix">${price}</p>`;
        
//         // Affichage des selections de couleurs possible sur la page html
//         for (let i = 0; i < data.colors.length; i++) {
//           document.querySelector('#select_color').innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`;
//         }

//         // Récupération des informations à rajouter dans le panier
//         let ourson = {
//           id: data._id,
//           nom_ourson: data.name,
//           prix : price,
//           couleur : data.colors, // Valeurs par default pour le MVP
//           quantité : 1, // Valeurs par default pour le MVP
//         };

//         // Déclaration du tableau "oursons"
//         let oursons = [];

       
//         // Afficher le LocalStorage
//         let oldCart = JSON.parse(localStorage.getItem('teddy'));
//         //  vérifier si le localStorage est vide
//         // Au click sur le bouton validate
//         document.querySelector('#validate').addEventListener('click', () => {

//             console.log(oldCart); 

//             if (oldCart == null)
//             {
//               // Si il est vide
//                 //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau oursons
                
//                 oursons.push(ourson);

//                 //  passer le tableau en JSON et le mettre dans le localStorage
//                 localStorage.setItem('teddy', JSON.stringify(oursons));
//             } else {
//               //  Si il n'est pas vide
//                 //  rajouter les informations de l'ancien panier au tableau oursons
//                 for (let i = 0 ; i < oldCart.length ; i++){
//                   oursons.push(oldCart[i]);
//                 }

//                 //  Récupérer les informations de l'ourson affiché est le mettre dans un tableau oursons
//                 oursons.push(ourson);

//                 //  passer le tableau en JSON et le mettre dans le localStorage
//                 localStorage.setItem('teddy', JSON.stringify(oursons));
//             }

//           

//         })
//       })
//       .catch((err) => console.log('Erreur : ' + err))
//     )