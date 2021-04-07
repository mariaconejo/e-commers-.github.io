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
const test = document.getElementById('cards-scroll');
const alert = document.getElementById('alert');
const bodyContainer = document.querySelector('body');

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
});

cartIcon.addEventListener('click', () => {
  openCart();
  closeDrawer.style.display = 'block';
  shopContainer.style.display = 'block';
  drawerCollapse.style.display = 'block';
  cartIcon.style.display = 'none';
  burger.style.display = 'none';
  bodyContainer.style.overflow = 'hidden';
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

listContainer.addEventListener('click',(e)=>{
  let trashButton = document.querySelectorAll('.close__button--js');
  console.log(trashButton);
  trashButton.forEach(button => {
    console.log(trashButton);
    if(e.target === button){
      deleteProduct(e.target.dataset.id)
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

test.addEventListener('click',(e) =>{
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
  <div class="drawer__item--container--js">
    <div class="drawer__item" data-id="${product.id}">
      <div class="drawer__item--image">
        <img  class="details__product--img--js"src="${product.image}" alt="">
      </div>
      <div class="details__product--js">
        <p class="details__product--name--js">${product.name}</p>
        <p class="details__product--price--js">¢${product.price} </p>
      </div>
      <div class="delete__button--js">
        <button class= "close__button--js" data-id="${product.id}" id="delete-item"><img class="close__button--img" src="./img/basurero.svg" alt="Cerrar-menu"></button>
      </div>
    </div>
  </div>
  `
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
      listContainer.innerHTML += insertProduct(data);
    })
}


function createAlert(data){
  const alertHtml = `
  <h3 class= "alert__title">Felicidades</h3>
  <p class= "alert__text">${data.name} Se agrego satisfactoriamente</p>
  <button class= "alert__button">Ok</button>
  `
  alert.innerHTML = alertHtml;
}

function getProductHtmlList(products) {
  return products
    .map((product) => {
      return  insertProduct(product)
    })
    .join("");
}

fetch(urlCart, {
  method: "GET"
})
  .then((response) => {
    return response.json();
  })
  .then((products) => {
    const htmlListItems = getProductHtmlList(products);
    listContainer.innerHTML = htmlListItems;
  })
  .catch((err) => {
    console.error(err);
  });

