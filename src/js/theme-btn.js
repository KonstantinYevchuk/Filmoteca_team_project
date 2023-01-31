import {refs} from './refs';
// const changeThemeBtn = document.querySelector('.switch-checkbox');
// const bodyTheme = document.querySelector('body');

refs.changeThemeBtn.addEventListener('click', changeTheme);

function changeTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
  }
  else {
    localStorage.setItem('theme', 'dark')
  }
  addDarkClassToHTML();
}

function addDarkClassToHTML() {
  try {
    if (localStorage.getItem('theme') === 'dark') {
      refs.bodyTheme.classList.add('theme-dark');
      refs.changeThemeBtn.checked = true;
    }
    else {
      refs.bodyTheme.classList.remove('theme-dark');
    }
  } catch (err) { }
}

addDarkClassToHTML();