const cartIcon = document.getElementById('menu-shopping-movil');
const cartIcon2 = document.getElementById('menu-shopping-desktop');
const btnDrawer = document.getElementById('close-drawer');
const closeDrawer = document.getElementById('close-btn');
const shopContainer = document.getElementById('menu-close');
const user = document.getElementById('menu-user');
const burger = document.getElementById('open-menu');
const drawerCollapse = document.getElementById('drawer-box');
const urlCart = 'https://60414895f34cf600173c9bb5.mockapi.io/api/productosdelcarrito';
const listContainer = document.getElementById('drawer-product');
let list = [];

function openCart() {
  drawerCollapse.style.right = '0px';
}

function closeCart() {
  drawerCollapse.style.right = '-100%';
}

// Events
cartIcon2.addEventListener('click', () => {
  openCart();
  closeDrawer.style.display = 'block';
  shopContainer.style.display = 'block';
  drawerCollapse.style.display = 'block';
  cartIcon.style.display = 'block';
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

cartIcon.addEventListener('click', () => {
  openCart();
  closeDrawer.style.display = 'block';
  shopContainer.style.display = 'block';
  drawerCollapse.style.display = 'block';
  cartIcon.style.display = 'none';
  user.style.display = 'none';
  burger.style.display = 'none';
});

btnDrawer.addEventListener('click', () => {
  closeCart();
});

function itemDrawer(product) {
  return `
    <div data-id="${product.id}">
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
    </div>
  `;
}

function productCreation(nameProduct, priceProduct , imageProduct, idProduct){
  let idProduct = {
    id: idProduct,
    name:nameProduct,
    price:priceProduct,
    image: imageProduct
  };
}



fetch(urlCart, {
  method: 'GET',
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.error(err);
  });

  fetch(urlCart, {
    method: 'POST',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
