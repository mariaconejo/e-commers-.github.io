const burger = document.querySelector('.header__container--menu button');
const close = document.querySelector('.menu__close--container button');
const div = document.querySelector('.menu__close--container');
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
