const burger = document.querySelector('.header__conteiner--menu button');
const close = document.querySelector('.menu__close--conteiner button');
const div = document.querySelector('.menu__close--conteiner');
const menu = document.querySelector('.menu__box');

function openMenu() {
  let right = -400;
  const animation = setInterval(() => {
    if (right < 0) {
      right += 10;
      menu.style.right = `${right}px`;
    } else {
      clearInterval(animation);
    }
  }, 5);
}

function closeMenu() {
  const right = 0;
  if (right === 0) {
    menu.style.right = `${-520}px`;
  } else {
    openMenu();
  }
}

// Events
burger.addEventListener('click', () => {
  openMenu();
  div.style.display = 'block';
  menu.style.display = 'block';
  close.style.display = 'block';
  burger.style.display = 'none';
});

close.addEventListener('click', () => {
  closeMenu();
  menu.style.display = 'none';
  close.style.display = 'none';
  burger.style.display = 'block';
  div.style.display = 'none';
});

const modal = document.querySelector('.modal');
const botonAbrir = document.querySelector('.header__conteiner--user');
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
