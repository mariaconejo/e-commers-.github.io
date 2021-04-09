const carButton = document.querySelector('.cards__container--buy--js');
const url1 = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const url2 = 'https://60414895f34cf600173c9bb5.mockapi.io/api/details';
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
  e.preventDefault();
  if(e.target.id === 'more__information'){
    deleteDetails();
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
      putInsideProduct(data,id);
    })
    .catch((err) => {
      console.error(err);
    });
}
function sendDetails(jsonObject){
  fetch(`${url2}`, {
    method: "POST",
    body: JSON.stringify(jsonObject),
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      especificProduct(data);
    })
}
function bringContentJson(){
  fetch(url2, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      especificProduct(data[0]);
    })
    .catch((err) => {
      console.error(err);
    });
}
function deleteDetails(){
  fetch(`${url2}/1`, {
    method: "DELETE"
  })
    .then((response) => {
      if (response.ok) {
      } else {
        throw new Error(response.status);
      }
    })
    .catch((err) => {
      alert(`Ocurrió un error de tipo ${err}`);
    });
}

function addProductId(product){
  buttonAddProduct.dataset.name = `${product.name}`;
  buttonAddProduct.dataset.img = `${product.small[0]}`;
  buttonAddProduct.dataset.price = `${product.price}`;
}
function ProductDescription(product){
  productName.innerHTML = `${product.name}`;
  productPrice.innerHTML = `${product.price}`;
  tab1.innerHTML = `${product.description}`;
  acordeonDescription.innerHTML = `${product.description}`;
  tab2.innerHTML = `${product.material}`;
  acordeonMaterials.innerHTML = `${product.material}`;
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
function putInsideProduct(data,id){
  data.forEach(product => {
    if(product.id===id){
      let jsonObject ={
        'name': `${product.name}`,
        'price':`${product.price}`,
        'extraLarge': [`${product.extraLarge[0]}` , `${product.extraLarge[1]}` , `${product.extraLarge[2]}` , `${product.extraLarge[3]}`],
        'small': [`${product.small[0]}` , `${product.small[1]}` , `${product.small[2]}` , `${product.small[3]}`],
        'description': `${product.description}`,
        'material': `${product.material}`
      }
      console.log(jsonObject)
      sendDetails(jsonObject);
    }
  });
}
function especificProduct(data){
  infoProductGallery(data);
  ProductDescription(data);
  addProductId(data);
}
window.onload = bringContentJson();
