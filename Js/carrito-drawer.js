const cartIcon = document.getElementById('menu-shopping');
const closeDrawer = document.getElementById('close-btn');
const shopContainer = document.getElementById('menu-close');
const user = document.getElementById('menu-user');
const burger = document.getElementById('open-menu');
const drawerCollapse = document.getElementById('drawer-box');
const urls = 'https://60414895f34cf600173c9bb5.mockapi.io/api/produc';
const listContainer = document.getElementById('drawer-product');
let list = [];

function openCart() {
  drawerCollapse.style.right = '0px';
}

function closeCart() {
  drawerCollapse.style.right = '-100px';
}

// Events
cartIcon.addEventListener('click', () => {
  openCart();
  closeDrawer.style.display = 'block';
  shopContainer.style.display = 'block';
  drawerCollapse.style.display = 'block';
  cartIcon.style.display = 'none';
  user.style.display = 'none';
  burger.style.display = 'none';
});

closeDrawer.addEventListener('click', () => {
  closeCart();
  closeDrawer.style.display = 'none';
  shopContainer.style.display = 'none';
  drawerCollapse.style.display = 'none';
  cartIcon.style.display = 'block';
  user.style.display = 'block';
  burger.style.display = 'block';
});

function itemDrawer(product) {
  return `
  <ul class="product__details" id="product-details">
    <li data-id="${product.id}">
      <div "class="drawer__item">
        <div class="drawer__item--image">
          <img src="${product.medium}" alt="">
        </div>
        <div>
          <p>${product.name}</p>
          <p>¢${product.price} </p>
        </div>
        <div>
          <button data-id="${product.id} id="delete-item"><img src="./img/close-icon.svg" alt="Cerrar-menu"></button>
        </div>
      </div>
    </li>
  </ul>
  `;
}

const addProductDrawer = (id, name, image, price) => {
  const product = {
    idProduct: id,
    imgProduct: image,
    nameProduct: name,
    priceProduct: price,
    items: 1,
  };

  fetch(`${urls}`, {
    method: 'POST',
    body: JSON.stringify(product),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      listContainer.innerHTML += itemDrawer(data);
    });
};
