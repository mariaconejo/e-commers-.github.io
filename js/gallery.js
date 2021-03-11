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
