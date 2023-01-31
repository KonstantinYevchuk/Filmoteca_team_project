import { galleryTeam } from './gellary-team';
import { refs } from './refs';


refs.openBtn.addEventListener('click', onClick);
refs.closeBtnStudents.addEventListener('click', onClick);

function onClick() {
  // console.log(e);
  refs.backdropEl[refs.backdropEl.length -1].classList.toggle('is-hidden');

  refs.bodyEl.addEventListener('keydown', keydownEvent);
  function keydownEvent(evt) {
    if (evt.key === 'Escape') {
      refs.backdropEl[refs.backdropEl.length -1].classList.add('is-hidden');
      refs.bodyEl.removeEventListener('keydown', keydownEvent);
    }
  }

  refs.backdropEl[refs.backdropEl.length -1].addEventListener('click', modalClick);
  function modalClick(evt) {
    // console.log(evt.currentTarget);
    if (evt.currentTarget === refs.modalEl) {
      return
    } else {
      refs.backdropEl[refs.backdropEl.length -1].classList.add('is-hidden');
      refs.backdropEl[refs.backdropEl.length -1].removeEventListener('click', modalClick);
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
  refs.galleryStudents.innerHTML = markup;
}

function keydownEvent(evt, btn) {
  if (evt.key === 'Escape') {
    btn.classList.add('is-hidden');
    btn.removeEventListener('keydown', keydownEvent);
  }
}
