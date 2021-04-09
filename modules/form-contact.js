const formulario = document.getElementById('formulario');

function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement('div');
  errorElemnt.classList.add('mensaje__error--contact--js');

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

  formulario.parentNode.insertBefore(errorElemnt, formulario);
}

function agregarMensajeDeExito() {
  const validoElemnt = document.createElement("div");
  validoElemnt.classList.add("mensaje__valido--contact--js");

  validoElemnt.innerText = "Inicio de sesión exitoso";

  formulario.parentNode.insertBefore(validoElemnt, formulario)
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
  const mensajeDeErrror = document.querySelector(".mensaje__error--contact--js");
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector(".mensaje__valido--contact--js");
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

formulario.addEventListener('submit', (e) => {
  reiniciarMensajesDeError();

  const inputsRequeridos = document.querySelectorAll(".required");

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
