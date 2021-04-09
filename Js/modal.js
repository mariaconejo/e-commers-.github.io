const form = document.getElementById('form');
const modal = document.getElementById('form-background');
const close = document.getElementById('modal-close-btn');
const modalOpen = document.getElementById('menu-user-movil');
const modaldesktop = document.getElementById('menu-user-desktop');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('open-menu');
const shopping = document.getElementById('menu-shopping-movil');
const closeMenus = document.getElementById('close-btn');
const showPassword = document.getElementById('show-password');
const passwordInput = document.getElementById('contraseña-desktop');


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

modalOpen.addEventListener('click', (event) => {
  event.preventDefault();
  menu.style.display = 'none';
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
  shopping.style.display = 'none';
  closeMenus.style.display = 'none';
  modalOpen.style.display = 'none';
  menuClose.style.display = 'block';
});
close.addEventListener('click', (event) => {
  event.preventDefault();
  menu.style.display = 'block';
  modal.style.display = 'none';
  shopping.style.display = 'block';
  body.style.overflow = 'visible';
  closeMenus.style.display = 'none';
  modalOpen.style.display = 'block';
  menuClose.style.display = 'none';
});

modaldesktop.addEventListener('click', (event) => {
  event.preventDefault();
  menu.style.display = 'block';
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
});

showPassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('password--js');
});
