// Se adquieren por medio del JS los links que se encuentran en el HTML
const links = document.querySelectorAll('.tabs__list--menu');

// Se adquieren por medio del JS todos los div que se encuentran en  el HTML
const content = document.querySelectorAll('.tabs__info--content');

/* A todos los div con contenido se les va a hacer un display none para que no se muestren */
for (let i = 0; i < content.length; i++) {
  content[i].classList.add('js-content-hidden');
}

// Una vez el programa vaya por aqui, lo que va a pasar es que el primero de los div y
// el primero de los links seran mostrados en la pantalla
content[0].classList.remove('js-content-hidden');
links[0].classList.add('js-active');

/* Se utiliza un for para para aplicarle todos los "efectos" a cada link y se incluye el [i] */
for (let i = 0; i < links.length; i++) {
  // Se agrega un evento para todos los links el cual si le
  // da click pasa lo que esta dentro de la funcion */
  links[i].addEventListener('click', (event) => {
    event.preventDefault(); /* Esto lo que provoca es que no cambie el URL al darle click */
    const id = event.currentTarget.getAttribute('href').substring(1);
    // Se obtiene el atributo href y lo que esta dentro desde el digito 1
    for (let i = 0; i < content.length; i++) {
      // Se aplica un for para que cuando se ejecute una
      // y otra vez agregue o remueva la clase con sus efectos
      content[i].classList.add('js-content-hidden');
      // Eso si, si el id del div actual es el mismo al id
      // que se obtiene del currentarget se le remueve la clase
      if (content[i].getAttribute('id') === id) {
        content[i].classList.remove('js-content-hidden');
      }
    }
    // Se aplica un for a todos los links y se remueve
    // la clase o se agrega dependiendo de su condicion
    for (let i = 0; i < links.length; i++) {
      links[i].classList.remove('js-active');
    }
    event.currentTarget.classList.add('js-active');
  });
}
