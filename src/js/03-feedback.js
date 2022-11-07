import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

let formMessage = {};

function handleInput({ target }) {
  formMessage[target.name] = target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formMessage));
}

function getDataFromLocalStotage() {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (data === null || data === undefined) return;
  formMessage = data;
  if (data) {
    email.value = data.email || '';
    message.value = data.message || '';
  }
}
getDataFromLocalStotage();

function handleSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

feedbackForm.addEventListener('input', throttle(handleInput, 500));
feedbackForm.addEventListener('submit', handleSubmitForm);
