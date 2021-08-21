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

        // Insertion Name
      document.querySelector('.card_product-name').innerHTML = `<h3>${data.name}</h3> `  
        
        // Insertion Photo  URL
        document.querySelector('.card_product-img').innerHTML = `<img src="${data.imageUrl}" alt= "Photo ${data.name}">`

        // Insertion Description + Prix
        document.querySelector('.card_product-description').innerHTML = `
        <p>${data.description}</p>
        <p class="prix">${price} €</p>`
        

        for (let i = 0; i < data.colors.length; i++) {
          console.log(data.colors[i])
          document.querySelector('#select_color').innerHTML += `<option value="${data.colors[i]}">${data.colors[i]}</option>`
        }
        
        let cart = []
        cart = [data.name, price]
        console.log(cart)
        document.querySelector('validate').addEventListener('click',function(){
          localStorage.setItem('Nom',data.name)
          localStorage.setItem('Price', price)
        })

      })
  )
  .catch((error) => console.log('erreur : ' + error));

  document.querySelector('.validate').addEventListener('click',function(){
    document.querySelector('.notification').classList.toggle('active')
  })