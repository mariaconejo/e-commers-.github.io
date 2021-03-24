const modal = document.querySelector('.modal');
const botonAbrir = document.querySelector('.header__wrapper--user');
const botonCerrar = document.querySelector('.modal__cerrar');
const submit = document.querySelector('.modal__button');

botonAbrir.addEventListener('click', () => {
  modal.style.display = 'block';
});
botonCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});
submit.addEventListener('click', () => {
  modal.style.display = 'none';
});
