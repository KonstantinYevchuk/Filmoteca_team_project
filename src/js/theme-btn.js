const changeThemeBtn = document.querySelector('.switch-checkbox');
const iconTheme = changeThemeBtn.firstElementChild;
const bodyTheme = document.querySelector('body');

console.log('HELLO');
console.dir(changeThemeBtn);
console.log('BAY');
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
  console.dir(changeThemeBtn);
  try {
    if (localStorage.getItem('theme') === 'dark') {
      bodyTheme.classList.add('theme-dark');
      changeThemeBtn.checked = true;
    }
    else {
      bodyTheme.classList.remove('theme-dark');
      changeThemeBtn.checked = false;
    }
  } catch (err) { }
}
function onclick() {

}

addDarkClassToHTML();