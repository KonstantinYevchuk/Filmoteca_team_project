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
  backdropEl[1].classList.toggle('is-hidden');

  bodyEl.addEventListener('keydown', keydownEvent);
  function keydownEvent(evt) {
    if (evt.key === 'Escape') {
      backdropEl[1].classList.add('is-hidden');
      bodyEl.removeEventListener('keydown', keydownEvent);
    }
  }

  backdropEl[1].addEventListener('click', modalClick);
  function modalClick(evt) {
    // console.log(evt.currentTarget);
    if (evt.target !== modalEl) {
      backdropEl[1].classList.add('is-hidden');
      backdropEl[1].removeEventListener('click', modalClick);
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
        <p class="gallery_text">${position}</p></li>
        `
    );
  }, '');
  galleryEl.innerHTML = markup;
}

// bodyEl.removeEventListener('keydown', keydownEvent);
// backdropEl.removeEventListener('click', modalClick);
