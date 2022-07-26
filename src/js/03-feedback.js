// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();

refs.form.addEventListener('input', throttle(saveData, 500));
refs.form.addEventListener('submit', submitData);

function saveData(event) {
  const { email, message } = event.currentTarget;
  const data = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
}

function submitData(event) {
  event.preventDefault();
  const saveddata = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseddata = JSON.parse(saveddata);
  console.log(parseddata);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}

function updateOutput() {
  const saveddata = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseddata = JSON.parse(saveddata);

  if (parseddata) {
    refs.input.value = parseddata.email;
    refs.textarea.value = parseddata.message;
  }
}
