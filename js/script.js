const btnItems = document.querySelector('.content');

function removeClass(e) {
  e.target.classList.remove('active');
}

btnItems.addEventListener('click', (e) => {
  if (e.target.className === 'item__boton active') {
    removeClass(e);
  } else {
    removeClass(e);
    e.target.classList.add('active');
  }
});

// References
// https://www.w3schools.com/howto/howto_js_accordion.asp. ,https://www.youtube.com/watch?v=VyaALRSbhOQ&ab_channel=J%26GProyectosWeb
