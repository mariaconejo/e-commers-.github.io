const carButton = document.querySelector('.cards__container--buy--js');
const url1 = 'https://60414895f34cf600173c9bb5.mockapi.io/api/product';
const url2 = 'https://60414895f34cf600173c9bb5.mockapi.io/api/details';

carButton.addEventListener('click',(e)=>{
  if(e.target.id === 'more__information'){
    e.preventDefault();
    actualobj(e.target.dataset.id);
  }
})

function RouteProduct(){
  location.href = 'product_details.html';
}

function actualobj(id){
  deleteDetails();
  bringDetails(id);
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
      RouteProduct()
    })
}
