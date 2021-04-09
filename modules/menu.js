const menuIcon = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-btn');
const menuContainer = document.getElementById('menu-close');
const menuCollapse = document.getElementById('menu-box');
const shopIcon = document.querySelector('.menu__shopping--js');
const userIcon = document.querySelector('.menu__user--js');
const body = document.querySelector('body');

function openMenu() {
  menuCollapse.style.right = '0px';
}
function closeMenu() {
  menuCollapse.style.right = '-100px';
}

export {
  menuIcon, closeBtn, menuContainer, menuCollapse, body, openMenu, closeMenu, shopIcon, userIcon,
};
