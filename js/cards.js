const url = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const cardsContainer = document.getElementById('cards-scroll');
const btnNext = document.querySelector('.btn__next--js');
const btnPrev = document.querySelector('.btn__prev--js');

btnNext.addEventListener('click', () => {
  cardsContainer.scrollLeft += 150;
});
btnPrev.addEventListener('click', () => {
  cardsContainer.scrollLeft -= 150;
});
function createCards(product) {
  for (let i = 0; i < 8; i += 1) {
    const htmlCards = `
    <div data-id="${product[i].id}" class="product__card">
      <div class= "product__card--image">
        <img src="${product[i].large}" alt="">
      </div>
      <div class="product__card--info">
        <p class="product__card--title">${product[i].name}</p>
        <p class="product__card--price">¢${product[i].price}</p>
      </div>
      <div class="product__card--button">
        <a data-id="${product[i].id}" class= "anchor__button anchor__button--secondary anchor__button--medium" id= "more__information" href= "product_details.html">Más información</a>
      </div>
      <div class="product__card--button">
        <button data-img="${product[i].small}"  data-name="${product[i].name}" data-price="${product[i].price}" class="anchor__button anchor__button--principal anchor__button--medium button__shop add__button--js " href="#">Agregar al carrito</button>
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
