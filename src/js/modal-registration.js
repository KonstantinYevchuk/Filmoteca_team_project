const refs = {
  openModalBtn: document.querySelector('[data-modal-reg-open]'),
  closeModalBtn: document.querySelector('[data-modal-reg-close]'),
  modal: document.querySelector('[data-reg-modal]'),
};
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);

const loginFormBtn = document.querySelector('#data-formBtn-login');
const regFormBtn = document.querySelector('#data-formBtn-reg');
const loginForm = document.querySelector('#data-login-box');
const regForm = document.querySelector('#data-reg-box');
loginFormBtn.addEventListener('click', e => {
  loginForm.classList.add('current');
  regForm.classList.remove('current');
  loginFormBtn.classList.toggle('target-btn');
  regFormBtn.classList.toggle('target-btn');
});
regFormBtn.addEventListener('click', e => {
  regForm.classList.add('current');
  loginForm.classList.remove('current');
  loginFormBtn.classList.toggle('target-btn');
  regFormBtn.classList.toggle('target-btn');
});

// function onFormToggle(add, rev) {
//   console.log('HELLOO');
//   add.classList.add('current');
//   rev.classList.remove('current');
//   loginFormBtn.classList.toggle('target-btn');
//   regFormBtn.classList.toggle('target-btn');
// }

function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
