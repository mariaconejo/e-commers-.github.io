const btnItems = document.querySelector('.header__wrapper--acordeon');

function removeClass(e) {
  e.target.classList.remove('active');
}

btnItems.addEventListener('click', (e) => {
  if (e.target.className === 'item__boton active') {
    removeClass(e);
  } else {
    removeClass(e);
    e.target.classList.add('active');
  }
});
