import {
  menuIcon, closeBtn, menuContainer, menuCollapse, body, openMenu, closeMenu, shopIcon, userIcon,
} from './modules/menu.js';

import {
  modal,
} from './modules/modal.js';

import {
  btnNext, btnPrev, cardsContainer,
} from './modules/cards.js';

import './modules/acordeons.js';

// Menu
menuIcon.addEventListener('click', () => {
  openMenu();
  menuContainer.style.display = 'block';
  menuCollapse.style.display = 'block';
  closeBtn.style.display = 'block';
  menuIcon.style.display = 'none';
  shopIcon.style.display = 'none';
  userIcon.style.display = 'none';
  body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', () => {
  closeMenu();
  menuCollapse.style.display = 'none';
  closeBtn.style.display = 'none';
  menuIcon.style.display = 'block';
  menuContainer.style.display = 'none';
  shopIcon.style.display = 'block';
  userIcon.style.display = 'block';
  body.style.overflow = 'visible';
  modal.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  userIcon.style.display = 'block';
});

// Carrito
import './modules/carrito-drawer.js';

// Model

userIcon.addEventListener('click', () => {
  modal.style.display = 'block';
  menuContainer.style.display = 'block';
  closeBtn.style.display = 'block';
  menuIcon.style.display = 'none';
  shopIcon.style.display = 'none';
  userIcon.style.display = 'none';
  body.style.overflow = 'hidden';
});

// carrucel

btnNext.addEventListener('click', () => {
  cardsContainer.scrollLeft += 150;
});
btnPrev.addEventListener('click', () => {
  cardsContainer.scrollLeft -= 150;
});

// acordion
