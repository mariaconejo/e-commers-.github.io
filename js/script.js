const btnItems = document.querySelectorAll('.item__boton');

function removeClass() {
  btnItems.forEach((button) => {
    button.classList.remove('active');
  });
}

btnItems.forEach((button) => {
  button.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.className === 'item__boton active') {
      removeClass();
    } else {
      removeClass();
      btn.classList.add('active');
    }
  });
});

/*
const btnItems = document.querySelector('.item__boton');

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
*/
