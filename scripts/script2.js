const products = [
    {
        id: 1,
        title: 'earth',
        price: 100,
        img: 'bulb.jpg'
    },
    {
        id: 2,
        title: 'mars',
        price: 100,
        img: 'bulb2.jpg'
    },
    {
        id: 3,
        title: 'neptune',
        price: 400,
        img: 'bulb3.jpg'
    },
    {
        id: 4,
        title: 'Venus',
        price: 150,
        img: 'bulb4.jpg'
    },

]


function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'card round-edge';

    card.innerHTML = `
      <div class="card-img">
        <img src="images/products/${product.img}" alt="${product.title}">
      </div>
      <div class="card-body">
        <div>
          <h3>${product.title}</h3>
          <span>Rs. ${product.price}</span>
          <p>${product.description}</p>
        </div>
        <button class="round-edge" id="add-to-cart-${product.id}">Add to Cart</button>
      </div>
    `;

    // Attach event listener to the button after it's in the DOM
    const button = card.querySelector(`#add-to-cart-${product.id}`);
    if (button) {
        button.addEventListener('click', () => {
            addToCart(product.id);
        });
    }

    return card;
}


function renderProducts(products, containerId = 'products-container') {
    const container = document.getElementById(containerId);
    if (!container) return console.error(`No container found with id #${containerId}`);

    container.innerHTML = ''; // Clear existing content

    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

function addToCart(productId) {
    console.log(`Added product ${productId} to cart`);
    // We'll replace this with code to request to API
    alert(`Product ${productId} add to cart!!!`);
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});



function vanish(objectId) {
    const item = document.getElementById(objectId);
    item.remove();
}


const acc_dropdown_button = document.getElementById('accounts-dropdown');
const dropdown_container = document.getElementById('acc-dropdown-data');

acc_dropdown_button.addEventListener('click', () => {
    let dis = dropdown_container.style.display;
    if (dis === 'none') {
        dropdown_container.style.display = 'flex';

    }
    else {
        dropdown_container.style.display = 'none';
    }

});
