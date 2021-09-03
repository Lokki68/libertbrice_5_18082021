
// Récupération de la réponse du backend
let order = JSON.parse(localStorage.getItem('order'));


// Extraction du contact

let contact = order.contact

console.log(contact)

// Extraction du produit

let products = order.products

console.log(products)


// Extraction de l'order Id

let orderId = order.orderId;

console.log(orderId)


// Calcul du prix Total

    let totalPrice = []

        products.forEach(ourson => {
            totalPrice.push(ourson.price/100)
        })

    let sumPrice = 0

        for (let i = 0; i < totalPrice.length; i++){
            sumPrice += totalPrice[i]
        }

    let sumPriceEuro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(sumPrice)

    console.log(sumPriceEuro)


    // Affichage de informations
let affichage = `
    <div class="alert alert-success mt-5" role="alert">
        <h4 class="alert-heading">Confirmation d'achat</h4>
        <p>M/Mme <strong>${contact.lastName} ${contact.firstName}</strong>, nous vous confirmons bonne réception de votre achat pour un montant de <strong>88 €</strong></p>
        <hr>
        <p class="mb-0">Voici votre identifiant de commande : <strong>${orderId}</strong>  <br>
        Conservez-le pour toute demande concernant votre achat</p>
    </div>
`

document.querySelector('#confirmation').innerHTML = affichage

document.querySelector('.validate').addEventListener('click', function (){
    localStorage.clear()
    location.href = 'index.html'
})