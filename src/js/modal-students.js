import { galleryTeam } from './gellary-team';

const bodyEl = document.body;
const openBtn = document.querySelector('.footer_btn');
const closeBtn = document.querySelector('.modal-window__button');
const backdropEl = document.querySelectorAll('.back-drop');
const modalEl = document.querySelector('.modal-window');
const galleryEl = document.querySelector('.gallery_students');

openBtn.addEventListener('click', onClick);
closeBtn.addEventListener('click', onClick);

function onClick() {
  // console.log(e);
  backdropEl[backdropEl.length -1].classList.toggle('is-hidden');

  bodyEl.addEventListener('keydown', keydownEvent);
  function keydownEvent(evt) {
    if (evt.key === 'Escape') {
      backdropEl[backdropEl.length -1].classList.add('is-hidden');
      bodyEl.removeEventListener('keydown', keydownEvent);
    }
  }

  backdropEl[backdropEl.length -1].addEventListener('click', modalClick);
  function modalClick(evt) {
    // console.log(evt.currentTarget);
    if (evt.target !== modalEl) {
      backdropEl[backdropEl.length -1].classList.add('is-hidden');
      backdropEl[backdropEl.length -1].removeEventListener('click', modalClick);
    }
  }

  makeGalleryStudents(galleryTeam);
}

function makeGalleryStudents(students) {
  const markup = students.reduce((acc, { name, photoPreview, position }) => {
    return (
      acc +
      `<li class="gallery_item">
        <img src="${photoPreview}" alt="${name}" class="gallery_img">
        <h2 class="gallery_name">${name}</h2>
        <p class="gallery_text">${position}</p></li>
        `
    );
  }, '');
  galleryEl.innerHTML = markup;
}


