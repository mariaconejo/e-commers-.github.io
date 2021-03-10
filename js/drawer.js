const carrito = document.querySelector('.carrito');
const close = document.querySelector('button');
const drawer = document.querySelector('.drawer-box');

// Referencias:Principal https://www.youtube.com/watch?v=NNjUIKrpT4U&ab_channel=ThirteeNov, https://codepen.io/gazjoy/pen/JLmExK,https://github.com/vckhanhitiu1/ShoppingCartWithVanillaJavascript/blob/master/js/app.js,https://codepen.io/irena-nojkova-angelova/pen/pogdaRNhttps://www.cssscript.com/demo/easy-sliding-drawer/

function openDrawer() {
  let right = -400;
  const animation = setInterval(() => {
    if (right < 0) {
      right += 5;
      drawer.style.right = `${right}px`;
    } else {
      clearInterval(animation);
    }
  }, 10);
}

function closeDrawer() {
  const right = 0;
  if (right === 0) {
    drawer.style.right = `${-600}px`;
  } else {
    openDrawer();
  }
}

// Events
carrito.addEventListener('click', () => {
  openDrawer();
});

close.addEventListener('click', () => {
  closeDrawer();
});
