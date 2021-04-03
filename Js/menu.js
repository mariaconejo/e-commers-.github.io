const menuIcon = document.getElementById('open-menu');
const closeBtn = document.getElementById('close-btn');
const menuContainer = document.getElementById('menu-close');
const menuCollapse = document.getElementById('menu-box');
const userIcon = document.getElementById('menu-user');

function openMenu() {
  menuCollapse.style.right = '0px';
}

function closeMenu() {
  menuCollapse.style.right = '-100px';
}

// Events
menuIcon.addEventListener('click', () => {
  openMenu();
  menuContainer.style.display = 'block';
  menuCollapse.style.display = 'block';
  closeBtn.style.display = 'block';
  menuIcon.style.display = 'none';
  userIcon.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
  closeMenu();
  menuCollapse.style.display = 'none';
  closeBtn.style.display = 'none';
  menuIcon.style.display = 'block';
  userIcon.style.display = 'block';
  menuContainer.style.display = 'none';
});
