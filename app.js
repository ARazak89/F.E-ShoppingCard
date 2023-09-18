let products = [
    {
        id: 1,
        name: 'PRODUCT NAME 1',
        image: 'Cake1.jpeg',
        categorie: 'Cake',
        price: 12000
    },
    {
        id: 2,
        name: 'PRODUCT NAME 2',
        image: 'Cake2.jpeg',
        categorie: 'Cake',
        price: 12000
    },
    {
        id: 3,
        name: 'PRODUCT NAME 3',
        image: 'Cake3.jpeg',
        categorie: 'Cake',
        price: 12000
    },
    {
        id: 4,
        name: 'PRODUCT NAME 4',
        image: 'Cake4.webp',
        categorie: 'Cake',
        price: 12000
    },
    {
        id: 5,
        name: 'PRODUCT NAME 5',
        image: 'Cupcake1.jpeg',
        categorie: 'Cupcake',
        price: 22000
    },
    {
        id: 6,
        name: 'PRODUCT NAME 6',
        image: 'Cupcake2.jpeg',
        categorie: 'Cupcake',
        price: 22000
    },
    {
        id: 7,
        name: 'PRODUCT NAME 7',
        image: 'Cupcake3.webp',
        categorie: 'Cupcake',
        price: 22000
    },
    {
        id: 8,
        name: 'PRODUCT NAME 8',
        image: 'Cupcake4.jpeg',
        categorie: 'Cupcake',
        price: 22000
    },
    {
        id: 9,
        name: 'PRODUCT NAME 9',
        image: 'Doughnut1.jpeg',
        categorie: 'Doughnut',
        price: 12300
    },
    {
        id: 10,
        name: 'PRODUCT NAME 10',
        image: 'Doughnut2.jpeg',
        categorie: 'Doughnut',
        price: 32000
    },
    {
        id: 11,
        name: 'PRODUCT NAME 11',
        image: 'Doughnut3.jpeg',
        categorie: 'Doughnut',
        price: 12000
    },
    {
        id: 12,
        name: 'PRODUCT NAME 12',
        image: 'Doughnut4.webp',
        // Hassane Abdel-Razak
        categorie: 'Doughnut',
        price: 12000
    }, {
        id: 13,
        name: 'PRODUCT NAME 13',
        image: 'Sweets1.webp',
        categorie: 'Sweet',
        price: 12300
    },
    {
        id: 14,
        name: 'PRODUCT NAME 14',
        image: 'Sweets2.jpeg',
        categorie: 'Sweet',
        price: 32000
    },
    {
        id: 15,
        name: 'PRODUCT NAME 15',
        image: 'Sweets3.jpeg',
        categorie: 'Sweet',
        price: 120000
    },
    {
        id: 16,
        name: 'PRODUCT NAME 16',
        image: 'Sweets4.webp',
        categorie: 'Sweet',
        price: 120000
    }
];
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let cakesButton = document.getElementById('Cakes');
let cupcakeButton = document.getElementById('Cupcakes');
let doughnutButton = document.getElementById('Doughnut');
let sweetButton = document.getElementById('Sweets');
// Hassane Abdel-Razak
let allButton = document.getElementById('All');
const barreDeRecherche = document.getElementById("search");

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let listCards = [];


// ===================  filtre Cakes ===============
cakesButton.addEventListener('click', () => {
    list.innerHTML = '';
    products.forEach((value, key) => {
        // Vérifiez si le nom du produit contient "Cake"
        if (value.categorie.toLowerCase() === 'cake') {
            // Si oui, affichez le produit
            let newDiv = document.createElement('div');
            newDiv.className = 'col-xl-4 col-lg-4 col-sm-6 col-12 my-2';
            newDiv.classList.add('item');
            newDiv.innerHTML = `
            <img src="image/${value.image}">
                <div class="price"><p>${value.name}</p> <p class="priceP">${value.price.toLocaleString()}</p></div>
                <div class="rating" id="rating-${key}">
                ${getRatingStars(value.rating, key)}
                </div> 
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        }
    });
});
// ===================  filtre Cakes ===============
// ===================  filtre Cupcakes ===============
cupcakeButton.addEventListener('click', () => {
    list.innerHTML = '';
    products.forEach((value, key) => {
        // Vérifiez si le nom du produit contient "Cake"
        if (value.categorie.toLowerCase().includes('cupcake')) {
            // Si oui, affichez le produit
            let newDiv = document.createElement('div');
            newDiv.className = 'col-xl-4 col-lg-4 col-sm-6 col-12 my-2';
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="image/${value.image}">
                <div class="price"><p>${value.name}</p> <p class="priceP">${value.price.toLocaleString()}</p></div>
                <div class="rating" id="rating-${key}">
                ${getRatingStars(value.rating, key)}
                </div> 
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        }
    });
});
// ===================  filtre Cupcakes ===============
// ===================  filtre Doughnut ===============
doughnutButton.addEventListener('click', () => {
    list.innerHTML = '';
    products.forEach((value, key) => {
        // Vérifiez si le nom du produit contient "Cake"
        if (value.categorie.toLowerCase().includes('doughnut')) {
            // Si oui, affichez le produit
            let newDiv = document.createElement('div');
            newDiv.className = 'col-xl-4 col-lg-4 col-sm-6 col-12 my-2';
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="image/${value.image}">
                <div class="price"><p>${value.name}</p> <p class="priceP">${value.price.toLocaleString()}</p></div>
                <div class="rating" id="rating-${key}">
                ${getRatingStars(value.rating, key)}
                </div> 
                <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        }
    });
});
// ===================  filtre Doughnut ===============
// ===================  filtre Sweets ===============
sweetButton.addEventListener('click', () => {
    list.innerHTML = '';
    products.forEach((value, key) => {
        // Vérifiez si le nom du produit contient "Cake"
        if (value.categorie.toLowerCase().includes('sweet')) {
            // Si oui, affichez le produit
            let newDiv = document.createElement('div');
            newDiv.className = 'col-xl-4 col-lg-4 col-sm-6 col-12 my-2';
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="image/${value.image}">
            <div class="price"><p>${value.name}</p> <p class="priceP">${value.price.toLocaleString()}</p></div>
            <div class="rating" id="rating-${key}">
            ${getRatingStars(value.rating, key)}
            </div>    
            <button onclick="addToCard(${key})">Add To Card</button>`;
            list.appendChild(newDiv);
        }
    });
});
// ===================  filtre Sweets ===============
// ===================  filtre All ===============
allButton.addEventListener('click', () => {
    initApp();
})
// ===================  filtre All ===============
// Hassane Abdel-Razak
// =================== search ===============
barreDeRecherche.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const texteRecherche = barreDeRecherche.value;
        console.log("Texte saisi dans la barre de recherche : " + texteRecherche);
        list.innerHTML = '';
        products.forEach((value, key) => {
            // Vérifiez si le nom du produit contient "Cake"
            if (value.categorie.toLowerCase().includes(texteRecherche)) {
                // Si oui, affichez le produit
                let newDiv = document.createElement('div');
                newDiv.className = 'col-xl-4 col-lg-4 col-sm-6 col-12 my-2';
                newDiv.classList.add('item');
                newDiv.innerHTML = `
                <img src="image/${value.image}">
            <div class="price"><p>${value.name}</p> <p class="priceP">${value.price.toLocaleString()}</p></div>
            <div class="rating" id="rating-${key}">
            ${getRatingStars(value.rating, key)}
            </div>   
            <button onclick="addToCard(${key})">Add To Card</button>`;
                list.appendChild(newDiv);
            }
        });
    }
});

// ===================  search ===============

function initApp() {
    list.innerHTML = '';
    products.forEach((value, key) => {
        createProductElementWithRating(value, key);
    });
}

// Crée un élément de produit avec notation
function createProductElementWithRating(product, index) {
    const newDiv = document.createElement('div');
    newDiv.className = 'col';
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src="image/${product.image}" >
        <div class="price"><p>${product.name}</p> <p class="priceP">${product.price.toLocaleString()}</p></div>
        <div class="rating" id="rating-${index}">
            ${getRatingStars(product.rating, index)}
        </div>
        <button onclick="addToCart(${index})">Add To Cart</button>`;
    list.appendChild(newDiv);

}

// Génère les étoiles de notation
function getRatingStars(rating, index) {
    let starsHtml = '';
    for (let i = 1; i <= 5; i++) {
        const filledStar = i <= rating ? 'filled' : '';
        starsHtml += `<span class="star ${filledStar}" data-value="${i}" onclick="rateProduct(${index}, ${i})">&#9733;</span>`;
    }
    return starsHtml;
}

// Ajoute un produit au panier
function addToCart(index) {
    if (listCards[index] == null) {
        // Copie le produit depuis la liste des produits vers le panier
        listCards[index] = JSON.parse(JSON.stringify(products[index]));
        // Définit la quantité à 1
        listCards[index].quantity = 1;
        // Calcule le prix total du produit
        listCards[index].price = listCards[index].quantity * listCards[index].price;
        // Sauvegarde le panier dans le stockage local
        saveCartToLocalStorage();
    } else {
        // Si le produit est déjà dans le panier, incrémente simplement la quantité
        listCards[index].quantity += 1;
        // Recalcule le prix total du produit
        listCards[index].price = listCards[index].quantity * listCards[index].price;
        // Sauvegarde le panier dans le stockage local
        saveCartToLocalStorage();
    }
    // Met à jour l'affichage du panier
    reloadCart();
}

// Met à jour l'affichage du panier
function reloadCart() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;

    for (const index in listCards) {
        if (listCards.hasOwnProperty(index)) {
            const product = listCards[index];

            if (product !== null) {
                totalPrice += product.price;
                count += product.quantity;

                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="image/${product.image}"/></div>
                    <div>${product.name}</div>
                    <div>${product.price.toLocaleString()}</div>
                    <div> 
                        <button onclick="changeQuantity(${index}, ${product.quantity - 1})">-</button>
                        <div class="count">${product.quantity}</div>
                        <button onclick="changeQuantity(${index}, ${product.quantity + 1})">+</button>
                    </div>` /* Hassane Abdel-Razak */;
                listCard.appendChild(newDiv);
            }
        }
    }

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

// Change la quantité d'un produit dans le panier
function changeQuantity(index, newQuantity) {
    if (listCards.hasOwnProperty(index)) {
        const product = products[index];

        newQuantity = Math.max(0, newQuantity);

        if (newQuantity <= 0) {
            delete listCards[index];
        } else {
            listCards[index].quantity = newQuantity;
            listCards[index].price = newQuantity * product.price;
        }

        saveCartToLocalStorage();
        reloadCart();
    }
}

// Sauvegarde le panier dans le stockage local
function saveCartToLocalStorage() {
    localStorage.setItem('shoppingCart', JSON.stringify(listCards));
}

// Charge le panier depuis le stockage local
function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('shoppingCart');
    if (cartData) {
        listCards = JSON.parse(cartData);
        reloadCart();
    }
}

// Charge les notations des produits depuis le stockage local
function loadProductRatingsFromLocalStorage() {
    const productRatingData = localStorage.getItem('productRatings');
    if (productRatingData) {
        const productRatings = JSON.parse(productRatingData);

        for (const index in productRatings) {
            if (productRatings.hasOwnProperty(index)) {
                const rating = productRatings[index];
                rateProduct(index, rating);
            }
        }
    }
}

// Initialise l'application
window.addEventListener('load', () => {
    loadCartFromLocalStorage(); /* Hassane Abdel-Razak */
    loadProductRatingsFromLocalStorage();
    initApp();
    initSlideshow();
});

// Noter un produit
function rateProduct(index, rating) {
    if (index >= 0 && index < products.length) {
        products[index].rating = rating;

        const ratingDiv = document.getElementById(`rating-${index}`);

        if (ratingDiv) {
            const stars = ratingDiv.querySelectorAll('.star');

            for (let i = 0; i < stars.length; i++) {
                if (i < rating) {
                    stars[i].classList.add('filled');
                } else {
                    stars[i].classList.remove('filled');
                }
            }
        }

        saveProductRatingToLocalStorage(index, rating);
    }
}
// Sauvegarder la notation d'un produit dans le stockage local
function saveProductRatingToLocalStorage(index, rating) {
    const productRatingData = localStorage.getItem('productRatings') || '{}';
    const productRatings = JSON.parse(productRatingData);

    productRatings[index] = rating;

    localStorage.setItem('productRatings', JSON.stringify(productRatings));
}
// ============================= slideshow ======================


function initSlideshow() {
    // Sélectionnez toutes les cards (ou éléments) qui ouvrent le diaporama
    const cards = document.querySelectorAll('.item');
    // Sélectionnez le conteneur du diaporama
    const slideshow = document.getElementById('slideshow');
    // Ajoutez un gestionnaire d'événement de clic à chaque card
    cards.forEach((card) => {
        card.addEventListener('click', () => {
            // Récupérez l'image à partir de la card
            const image = card.querySelector('img').cloneNode(true);
            // Effacez le contenu précédent du diaporama Hassane Abdel-Razak
            slideshow.innerHTML = '';
            // Ajoutez l'image au diaporama
            slideshow.appendChild(image);
            // Affichez le diaporama en le rendant visible
            slideshow.style.display = 'block';
        });
    });
    // Ajoutez un gestionnaire d'événement de clic au diaporama pour le fermer
    slideshow.addEventListener('click', () => {
        // Masquez le diaporama en le rendant invisible
        slideshow.style.display = 'none';
    });
}


// ============================= slideshow ======================

