/* eslint-disable no-param-reassign */
const form = document.getElementById('form');
const modal = document.getElementById('form-background');

function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement('div');
  errorElemnt.classList.add('mensaje__error--js');

  // AQUI VAMOS A ESCRIBIR EL MENSAJE DE ERROR
  const mensajeInvalidoTitulo = document.createElement('h2');
  mensajeInvalidoTitulo.innerText = 'Ocurrio un error, verifica los siguientes campos:';

  const listaInvalidoInput = document.createElement('ul');

  camposInvalidos.forEach((elementInvalido) => {
    const li = document.createElement('li');
    li.innerText = elementInvalido.getAttribute('name');
    listaInvalidoInput.appendChild(li);
  });

  errorElemnt.appendChild(mensajeInvalidoTitulo);
  errorElemnt.appendChild(listaInvalidoInput);

  form.parentNode.insertBefore(errorElemnt, form);
}

function agregarMensajeDeExito() {
  const validoElemnt = document.createElement('div');
  validoElemnt.classList.add('mensaje__valido--js');

  validoElemnt.innerText = 'Inicio de sesión exitoso';

  form.parentNode.insertBefore(validoElemnt, form);
}

function dameLosCamposInvalidos(inputsRequeridos) {
  const invalidos = [];

  inputsRequeridos.forEach((actualInput) => {
    if (actualInput.value === '') {
      invalidos.push(actualInput);
      actualInput.style.border = '6px solid red';
    } else {
      actualInput.style.border = '';
    }
  });
  return invalidos;
}

function reiniciarMensajesDeError() {
  const mensajeDeErrror = document.querySelector('.mensaje__error--js');
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector('.mensaje__valido--js');
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

form.addEventListener('submit', (e) => {
  reiniciarMensajesDeError();

  const inputsRequeridos = document.querySelectorAll('.required-desktop');

  e.preventDefault();

  const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  // Si tenemos campos invalidos
  if (invalidos.length > 0) {
    agregarMensajeDeError(invalidos);
  } else {
    agregarMensajeDeExito();
  }
});

export {
  modal,
};
