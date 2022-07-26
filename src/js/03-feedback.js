import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};
updateForm();

refs.form.addEventListener('input', throttle(saveData, 500));
refs.form.addEventListener('submit', submitData);

function saveData(event) {
  formData[event.target.name] = event.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(LOCALSTORAGE_KEY, stringifiedData);
}

function submitData(event) {
  event.preventDefault();
  const saveddata = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseddata = JSON.parse(saveddata);
  console.log(parseddata);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}

function updateForm() {
  const saveddata = localStorage.getItem(LOCALSTORAGE_KEY);
  const parseddata = JSON.parse(saveddata);

  if (parseddata) {
    refs.input.value = parseddata.email;
    refs.textarea.value = parseddata.message;
  }
}
