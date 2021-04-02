/*const modal = document.querySelector('.modal--js');
const botonAbrir = document.querySelector('.desktop--user--icon--js');
const botonCerrar = document.querySelector('.modal--ex--js');
const form = document.querySelector('.modal--form--js');
const check = document.querySelector('.showPassword--js');

function agregarMensajeDeError(camposInvalidos) {
  const errorElemnt = document.createElement('div');
  errorElemnt.classList.add('mensaje-error-desktop');

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
  validoElemnt.classList.add('mensaje-valido-desktop');

  validoElemnt.innerText = 'Inicio de sesión exitoso';

  form.parentNode.insertBefore(validoElemnt, form);
}

function dameLosCamposInvalidos(inputsRequeridos) {
  const invalidos = [];

  inputsRequeridos.forEach((actualInput) => {
    if (actualInput.value === '') {
      invalidos.push(actualInput);
      actualInput.style.border = '3px solid red';
    } else {
      actualInput.style.border = '';
    }
  });
  return invalidos;
}

function reiniciarMensajesDeError() {
  const mensajeDeErrror = document.querySelector('.mensaje-error-desktop');
  if (mensajeDeErrror) {
    mensajeDeErrror.remove();
  }

  const mensajeDeExito = document.querySelector('.mensaje-valido-desktop');
  if (mensajeDeExito) {
    mensajeDeExito.remove();
  }
}

form.addEventListener('submit', (e) => {
  reiniciarMensajesDeError();

  const inputsRequeridos = document.querySelectorAll('.required--js');

  e.preventDefault();

  const invalidos = dameLosCamposInvalidos(inputsRequeridos);
  // Si tenemos campos invalidos
  if (invalidos.length > 0) {
    agregarMensajeDeError(invalidos);
  } else {
    agregarMensajeDeExito();
  }
});

check.addEventListener('click', () => {
  show = document.getElementById('password');
  if (check.checked) {
    show.type = 'text';
  } else {
    show.type = 'password';
  }
});
botonAbrir.addEventListener('click', () => {
  modal.style.display = 'block';
});
botonCerrar.addEventListener('click', () => {
  modal.style.display = 'none';
});
*/
