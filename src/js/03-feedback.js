const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();

refs.form.addEventListener('input', saveData);
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
  localStorage.clear();
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
