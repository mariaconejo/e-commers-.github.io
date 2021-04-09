const searchBar = document.querySelector('.search__bar--js')

const ProductoEncontrado = arrayData.find((ProductoEspecifico) =>{
  if (ProductoEspecifico.category === searchBar.value){
    return true;
  }

  return false;
})
