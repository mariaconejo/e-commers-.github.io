const url = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const cardsContainer = document.getElementById('cards-shop');
const checkboxes = document.querySelectorAll(".filter__item--content input[type=checkbox]");

fetch(url, {
  method: 'GET',
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const listaProductos = data;
    if(checkboxes.checked){
      const filteredContent = listaProductos.filter((Producto) => Producto.category.toLowerCase().includes(`${checkboxes.value}`));
      if (filteredContent) {
        createCards(filteredContent);
      }
    }else{
      createCards(data);
    }
  })
  .catch((err) => {
    console.error(err);
  });

  function createCards(product) {
    for (let i = 0; i < 10; i += 1) {
      const htmlCards = `
      <div data-id="${product[i].id}" class="product__card--container">
        <div class="product__card--shop">
          <div class= "product__card--medium--image">
            <img src="${product[i].medium}" alt="">
          </div>
          <div class= "product__card--large--image">
            <img src="${product[i].large}" alt="">
          </div>
          <div class="product__card--info--shop">
          <p class="product__card--name--shop">${product[i].name}</p>
          <p class="product__card--price--shop">¢${product[i].price}</p>
          </div>
          <div class="product__card--button--shop">
            <a data-id="${product[i].id}" class="anchor__button anchor__button--secondary anchor__button--small .js-add__drawer'" href="#">Agregar al carrito</a>
          </div>
        </div>
      </div>

      `;
      cardsContainer.innerHTML += htmlCards;
    }
  }
