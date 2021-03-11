function myFunction(imgs) {
  const expandImg = document.getElementById('expandedImg');
  expandImg.src = imgs.src;
}

const imgs = document.querySelectorAll('.row img');

imgs.forEach((img) => {
  img.addEventListener('click', () => {
    myFunction(img);
  });
});

// References
// https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp ,https://www.cssscript.com/simple-tab-gallery-with-pure-css-css3/,https://codepen.io/Razzbrazz/pen/wKYbEE, https://www.sliderrevolution.com/resources/css-gallery/
