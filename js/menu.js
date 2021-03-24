const burger = document.querySelector('.header__wrapper--menu button');
const close = document.querySelector('.header__wrapper--close button');
const menu = document.querySelector('.menu__box');

function openDrawer() {
  let right = -400;
  const animation = setInterval(() => {
    if (right < 0) {
      right += 2;
      menu.style.right = `${right}px`;
    } else {
      clearInterval(animation);
    }
  }, 5);

}

function closeDrawer() {
  const right = 0;
  if (right === 0) {
    menu.style.right = `${-520}px`;
  } else {
    openDrawer();
  }
}

// Events
burger.addEventListener('click', () => {
  openDrawer();
  menu.style.display = 'block';
});

close.addEventListener('click', () => {
  closeDrawer();
  menu.style.display = 'none';
});
