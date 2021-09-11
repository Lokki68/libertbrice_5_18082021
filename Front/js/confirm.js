
// Récupération de la réponse du backend
let order = JSON.parse(localStorage.getItem('order'));

// Extraction du contact

let contact = order.contact;

// Extraction du produit

let products = order.products;

// Extraction de l'order Id

let orderId = order.orderId;

// Calcul du prix Total

    let totalPrice = [];

        products.forEach(ourson => {
            totalPrice.push(ourson.price/100)
        });

    let sumPrice = 0;

        for (let i = 0; i < totalPrice.length; i++){
            sumPrice += totalPrice[i]
        };

    let sumPriceEuro = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(sumPrice);


// Affichage de informations
    let affichage = `
        <div class="alert alert-success mt-5" role="alert">
            <h4 class="alert-heading">Confirmation d'achat</h4>
            <p>M/Mme <strong>${contact.lastName} ${contact.firstName}</strong>, 
            <br>nous vous confirmons bonne réception de votre achat 
            <br>pour un montant de <strong>${sumPriceEuro}</strong></p>
            <hr>
            <p class="mb-0">Voici votre identifiant de commande : 
            <br><strong>${orderId}</strong>
            <br>Conservez-le pour toute demande concernant votre achat</p>
        </div>`;

    document.querySelector('#confirmation').innerHTML = affichage;


document.querySelector('.validate').addEventListener('click', () => {
    localStorage.clear();
    location.href = 'index.html';
});