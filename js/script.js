const opcionAcordeon = document.querySelectorAll('.option');

opcionAcordeon.forEach((element) => {
  element.addEventListener('click', function acordeon() {
    this.classList.toggle('active');
    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});

// References
// https://www.w3schools.com/howto/howto_js_accordion.asp. ,https://www.youtube.com/watch?v=VyaALRSbhOQ&ab_channel=J%26GProyectosWeb
