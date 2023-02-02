import { galleryTeam } from './gellary-team';
import { refs } from './refs';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

refs.openBtn.addEventListener('click', onClick);
refs.closeBtnStudents.addEventListener('click', onClick);
const backdrop = refs.backdropEl[refs.backdropEl.length - 1];

let lightbox = new SimpleLightbox('.gallery_item a', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function onClick() {
  // console.log(e);
  backdrop.classList.toggle('is-hidden');

  refs.bodyEl.addEventListener('keydown', keydownEvent);
  function keydownEvent(evt) {
    if (evt.key === 'Escape') {
      addClassBtn(backdrop);
      refs.bodyEl.removeEventListener('keydown', keydownEvent);
    }
  }

  backdrop.addEventListener('click', modalClick);
  function modalClick(evt) {
    // console.log(evt.target);
    if (evt.target !== backdrop) {
      return;
    } else {
      addClassBtn(backdrop);
      backdrop.removeEventListener('click', modalClick);
    }
  }

  makeGalleryStudents(galleryTeam);
}

function makeGalleryStudents(students) {
  const markup = students.reduce(
    (acc, { name, photoPreview, position, photo }) => {
      return (
        acc +
        `<li class="gallery_item">
      <a class="gallery_link" href="${photo}">
        <img src="${photoPreview}" alt="${name}" class="gallery_img">
        <h2 class="gallery_name">${name}</h2>
        <p class="gallery_text">${position}</p></li>
        <a/>
        `
      );
    },
    ''
  );
  refs.galleryStudents.innerHTML = markup;
  lightbox.refresh();
}

function addClassBtn(btn) {
  btn.classList.add('is-hidden');
}
