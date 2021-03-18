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
