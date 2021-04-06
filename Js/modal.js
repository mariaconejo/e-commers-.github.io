const form = document.getElementById('form');
const modal = document.getElementById('form-background');
const close = document.getElementById('modal-close-btn');
const modalOpen = document.getElementById('menu-user');
const menu = document.getElementById('menu-close');

function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement('div');
  errorElemnt.classList.add('mensaje-error-desktop');

  // AQUI VAMOS A ESCRIBIR EL MENSAJE DE ERROR
  const mensajeInvalidoTitulo = document.createElement('h2');
  mensajeInvalidoTitulo.innerText =
    "Ocurrio un error, verifica los siguientes campos:";

  const listaInvalidoInput = document.createElement("ul");

  camposInvalidos.forEach((elementInvalido) => {
    const li = document.createElement("li");
    li.innerText = elementInvalido.getAttribute("name");

    listaInvalidoInput.appendChild(li);
  });

  errorElemnt.appendChild(mensajeInvalidoTitulo);
  errorElemnt.appendChild(listaInvalidoInput);

  form.parentNode.insertBefore(errorElemnt, form);
}

function agregarMensajeDeExito() {
  const validoElemnt = document.createElement("div");
  validoElemnt.classList.add("mensaje-valido-desktop");

  validoElemnt.innerText = "Inicio de sesión exitoso";

  form.parentNode.insertBefore(validoElemnt, form)
}

function dameLosCamposInvalidos(inputsRequeridos) {
  let invalidos = [];

  inputsRequeridos.forEach((actualInput) => {
    if (actualInput.value === "") {
      invalidos.push(actualInput);
      actualInput.style.border = "6px solid red";
    } else {
      actualInput.style.border = "";
    }
  });
  console.log(invalidos)
  return invalidos;
}

function reiniciarMensajesDeError() {
  const mensajeDeErrror = document.querySelector(".mensaje-error-desktop");
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector(".mensaje-valido-desktop");
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

form.addEventListener("submit", (e) => {
  reiniciarMensajesDeError();

  const inputsRequeridos = document.querySelectorAll(".required-desktop");

  e.preventDefault();

  const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  console.log(invalidos);
  // Si tenemos campos invalidos
  if (invalidos.length > 0) {
    agregarMensajeDeError(invalidos);
  } else {
    agregarMensajeDeExito();
  }
});


modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  menu.style.display = 'block';
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});
close.addEventListener('click', (event) => {
  event.preventDefault();
  menu.style.display = 'none';
  modal.style.display = 'none';
  body.style.overflow = 'visible';
});
