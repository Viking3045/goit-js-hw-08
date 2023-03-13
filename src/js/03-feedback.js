import throttle from 'lodash.throttle';

const form = document.querySelector('form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let dataForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};
const { email, message } = form.elements;
reloadPage();

function onFormInput(e) {
  dataForm = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataForm));
}

function reloadPage() {
  if (dataForm) {
    email.value = dataForm.email || '';
    message.value = dataForm.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log({ email: email.value, message: message.value });

  localStorage.removeItem('feedback-form-state');
  e.currentTarget.reset();
  dataForm = {};
}



