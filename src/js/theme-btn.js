const changeThemeBtn = document.querySelector('.changeTheme');
const iconTheme = changeThemeBtn.firstElementChild;
const bodyTheme = document.querySelector('body')

changeThemeBtn.addEventListener('click', changeTheme);

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
      bodyTheme.classList.add('theme-dark');
      iconTheme.setAttribute('href', '/symbol-defs.a8b2e413.svg#icon-light');
    }
    else {
      bodyTheme.classList.remove('theme-dark');
      iconTheme.setAttribute('href', '/symbol-defs.a8b2e413.svg#icon-dark');
    }
  } catch (err) { }
}

addDarkClassToHTML();