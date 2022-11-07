import throttle from 'lodash.throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const feedbackForm = document.querySelector('.feedback-form');

const formMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

function handleInput({ target }) {
  formMessage[target.name] = target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formMessage));
}

function getDataFromLocalStotage() {
  const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');

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
