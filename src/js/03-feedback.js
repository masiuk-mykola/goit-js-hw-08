import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
LOCALSTORAGE_KEY = 'feedback-form-state';

refreshPage();

refs.form.addEventListener('input', throttle(saveDataToLocStor, 500));
refs.form.addEventListener('submit', submitForm);

function submitForm(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function saveDataToLocStor(evt) {
  let userData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || {};
  userData[evt.target.name] = evt.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(userData));
}

function refreshPage() {
  const parsedData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (!parsedData) return;
  refs.email.value = parsedData.email || '';
  refs.message.value = parsedData.message || '';
}
