function Routeimg(imgs) {
  const expandImg = document.getElementById('container__img--big');
  expandImg.src = imgs.src;
}

const imgs = document.querySelector('.row');
imgs.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    Routeimg(e.target);
  }
});

// References
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp ,https://www.cssscript.com/simple-tab-gallery-with-pure-css-css3/,https://codepen.io/Razzbrazz/pen/wKYbEE, https://www.sliderrevolution.com/resources/css-gallery/
