// variable globales
let count = 0;
const leftArrow = document.querySelector('.arrow-left');
const rightArrow = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slide-desktop');
const point = document.querySelectorAll('.point');

// funcion para mostrar las imagenes
function showImage(numberSlide) {
  if (numberSlide >= slides.length) {
    count = 0;
  }
  if (numberSlide < 0) {
    count = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
    point[i].innerHTML = '<img src=".././img/white-point.png" alt="punto clickeable para cambiar de imagen">';
  }
  slides[count].style.display = 'block';
  point[count].innerHTML = '<img src=".././img/green-point.png" alt="punto indicador de la imagen seleccionada">';
}
showImage(count);

// cando se le de click a cada boton de flecha pasan las imagenes ya sea la anterior o la siguiente
leftArrow.addEventListener('click', () => {
  showImage(--count);
});
rightArrow.addEventListener('click', () => {
  showImage(++count);
});
point.forEach((element) => {
  element.addEventListener('click', () => {
    showImage(count = parseInt(element.dataset.number) - 1);
  });
});
