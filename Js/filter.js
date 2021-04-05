const url = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const cardsContainer = document.getElementById('cards-shop');

function createCards(product) {
  for (let i = 0; i < 10; i += 1) {
    const htmlCards = `
    <div class="product__card--shop">
      <div class= "product__card--image--shop">
        <img src="${product[i].medium}" alt="${product[i].name}">
      </div>
      <div class="product__card--info--shop">
      <p class="product__card--name--shop">${product[i].name}</p>
      <p class="product__card--price--shop">¢${product[i].price}</p>
      </div>
      <div class="product__card--button--shop">
        <a class="anchor__button anchor__button--secondary .anchor__button--small" href="#">Agregar al carrito</a>
      </div>
    </div>
    `;
    cardsContainer.innerHTML += htmlCards;
  }
}

fetch(url, {
  method: 'GET',
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    createCards(data);
  })
  .catch((err) => {
    console.error(err);
  });
