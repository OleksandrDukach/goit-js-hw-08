import throttle from 'lodash.throttle';

const dataInput = document.querySelector('.feedback-form');

let localData = {};

dataInput.addEventListener('input', throttle(onInputForm, 500));

function onInputForm(event) {
  localData = { email: dataInput[0].value, message: dataInput[1].value };
  localStorage.setItem('feedback-form', JSON.stringify(localData));
}
if (localStorage.getItem('feedback-form')) {
  const localDataSave = JSON.parse(localStorage.getItem('feedback-form')) || {};
  dataInput[0].value = localDataSave.email;
  dataInput[1].value = localDataSave.message;
}

dataInput.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form')));
  localStorage.clear();
  dataInput.reset();
}
