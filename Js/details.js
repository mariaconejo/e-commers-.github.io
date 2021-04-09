const carButton = document.querySelector('.cards__container--buy--js');
const url1 = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const galleryMainImage = document.querySelector('#container__img--big');
const smallImages = document.querySelectorAll('.small-image--js');
const productName= document.querySelector('.product-details--title--js');
const productPrice= document.querySelector('.product-details--price-js span');
const tab1 = document.querySelector('#tab-1 p');
const tab2 = document.querySelector('#tab-2 p');
const acordeonDescription = document.querySelector('.item__content1--js');
const acordeonMaterials = document.querySelector('.item__content2--js');
const mobileImages = document.querySelectorAll('.mobile__img--js');
const buttonAddProduct = document.querySelector('.insert__data--set--js');
console.log(buttonAddProduct)
carButton.addEventListener('click',(e)=>{
  if(e.target.id === 'more__information'){
    bringDetails(e.target.dataset.id);
  }
})
function bringDetails(id){
  fetch(url1, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      especificProduct(data,id);
    })
    .catch((err) => {
      console.error(err);
    });
}
function addProductId(product){
  buttonAddProduct.dataset.name = `${product.name}`;
  buttonAddProduct.dataset.img = `${product.small[0]}`;
  buttonAddProduct.dataset.price = `${product.price}`;
}
function ProductDescription(product){
  productName.textContent = `${product.name}`;
  productPrice.textContent = `${product.price}`;
  tab1.textContent = `${product.description}`;
  acordeonDescription.textContent = `${product.description}`;
}
function infoProductGallery(product){
  galleryMainImage.src = `${product.extraLarge[0]}`;
  for(let i = 0; i < smallImages.length; i++){
    smallImages[i].src = `${product.small[i]}`;
    smallImages[i].dataset.src = `${product.extraLarge[i]}`;
  }
  for(let i = 0; i < mobileImages.length; i++){
    mobileImages[i].src = `${product.extraLarge[i]}`;
  }
}
function especificProduct(data,id){
  data.forEach(product => {
    if(product.id===id){
      infoProductGallery(product);
      ProductDescription(product);
      addProductId(product);
    }
  });
}

