const modal = document.querySelector('.fondo');
const botonAbrir = document.querySelector('.boton');
const botonCerrar = document.querySelector('.modal_cerrar');

botonAbrir.addEventListener('click', () => {
  modal.style.display = 'block';
});
botonCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});

// References
// https://www.w3schools.com/w3css/w3css_modal.asp
