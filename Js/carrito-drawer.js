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
const Containercards = document.querySelector('.cards__container--buy--js');
const alert = document.getElementById('alert');
const bodyContainer = document.querySelector('body');
const checkoutTotal = document.querySelector('.drawer__checkout--total span');

let list = [];

function getListElement(id) {
  return document.querySelector(`div[data-id="${id}"]`);
}

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
  bringProducts();
});

cartIcon.addEventListener('click', () => {
  openCart();
  closeDrawer.style.display = 'block';
  shopContainer.style.display = 'block';
  drawerCollapse.style.display = 'block';
  cartIcon.style.display = 'none';
  burger.style.display = 'none';
  bodyContainer.style.overflow = 'hidden';
  bringProducts();
});

closeDrawer.addEventListener('click', () => {
  closeCart();
  closeDrawer.style.display = 'none';
  shopContainer.style.display = 'none';
  drawerCollapse.style.display = 'none';
  cartIcon.style.display = 'block';
  burger.style.display = 'block';
  bodyContainer.style.overflow = 'visible';
});

btnDrawer.addEventListener('click', () => {
  closeCart();
});
function removeProduct(reducePrice){
  let texttest = parseInt(checkoutTotal.innerHTML);
  texttest -= reducePrice;
  checkoutTotal.innerHTML= texttest;
}
listContainer.addEventListener('click',(e)=>{
  let trashButton = document.querySelectorAll('.close__button--js');
  trashButton.forEach(button => {
    if(e.target === button){
      deleteProduct(e.target.dataset.id)
      removeProduct(e.target.dataset.price);
    }
  });
})
function deleteProduct(id){
  fetch(`${urlCart}/${id}`, {
    method: "DELETE"
  })
    .then((response) => {
      if (response.ok) {
        const liEliminado = getListElement(id);
        liEliminado.remove();
      } else {
        throw new Error(response.status);
      }
    })
    .catch((err) => {
      alert(`Ocurrió un error de tipo ${err}`);
    });
}

Containercards.addEventListener('click',(e) =>{
  const buybutton = document.querySelectorAll('.add__button--js');
  buybutton.forEach(button => {
    if(e.target === button){
      let obj = {
        'name': `${e.target.dataset.name}`,
        'price':`${e.target.dataset.price}`,
        'image': `${e.target.dataset.img}`
      }
      addProduct(obj)
    }
  });
})


function insertProduct(product){
  return `
  <div data-id="${product.id}" class="drawer__item--container--js">
    <div class="drawer__item">
      <div class="drawer__item--image">
        <img  class="details__product--img--js"src="${product.image}" alt="">
      </div>
      <div class="details__product--js">
        <p class="details__product--name--js">${product.name}</p>
        <p class="details__product--price--js">¢${product.price} </p>
      </div>
      <div class="delete__button--js">
        <button class= "close__button--js" data-id="${product.id}" data-price="${product.price}" id="delete-item"><img class="close__button--img" src="./img/basurero.svg" alt="Cerrar-menu"></button>
      </div>
    </div>
  </div>
  `
}
function closeAlert(){
  let alertButton = document.querySelector('.alert__button--js');
  let alertBox = document.querySelector('.alert__box--js');
  alertButton.addEventListener('click', () =>{
    alert.style.display = 'none';
    alertBox.remove();
  })
}

function addProduct(obj){
  fetch(`${urlCart}`, {
    method: "POST",
    body: JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      createAlert(data);
      closeAlert();
      bringProducts();
    })
}


function createAlert(data){
  const alertHtml = `
  <div class= "alert__box--js">
    <h3 class= "alert__title">Felicidades</h3>
    <p class= "alert__text">${data.name} Se agregó satisfactoriamente</p>
    <button class= "anchor__button anchor__button--secondary alert__button alert__button--js">Ok</button>
  </div>
  `
  alert.style.display = 'block';
  alert.innerHTML = alertHtml;
}

function getProductHtmlList(products) {
  return products
    .map((product) => {
      return  insertProduct(product)
    })
    .join("");
}
function subtotal(products){
  let priceTotal = 0;
  products.forEach(producto => {
    let currentPrice = parseInt(producto.price);
    priceTotal += currentPrice;
    const totalPrice = `
    ${priceTotal}
  `
  checkoutTotal.innerHTML= totalPrice;
  });
}
function bringProducts(){
  fetch(urlCart, {
    method: "GET"
  })
    .then((response) => {
      return response.json();
    })
    .then((products) => {
      const htmlListItems = getProductHtmlList(products);
      listContainer.innerHTML = htmlListItems;
      subtotal(products);
    })
    .catch((err) => {
      console.error(err);
    });
}


