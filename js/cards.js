const url = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const cardsContainer = document.getElementById('cards-scroll');

function createCards(product) {
  for (let i = 0; i < 8; i += 1) {
    const htmlCards = `
    <div class="product__card">
      <div class= "product__card--image">
        <img src="${product[i].large}" alt="${product[i].name}">
      </div>
      <div class="product__card--info">
        <p class="product__card--title">${product[i].name}</p>
        <p class="product__card--price">¢${product[i].price}</p>
      </div>
      <div class="product__card--button">
        <a class="anchor__button anchor__button--secondary anchor__button--medium" href="#">Más información</a>
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