const btnItems = document.querySelectorAll('.btn-item');

function removeClass() {
  btnItems.forEach((button) => {
    button.classList.remove('active');
  });
}

btnItems.forEach((button) => {
  button.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.className === 'btn-item active') {
      removeClass();
    } else {
      removeClass();
      btn.classList.add('active');
    }
  });
});

// References
// https://www.w3schools.com/howto/howto_js_accordion.asp. ,https://www.youtube.com/watch?v=VyaALRSbhOQ&ab_channel=J%26GProyectosWeb
