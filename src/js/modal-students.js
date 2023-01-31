import { galleryTeam } from './gellary-team';
import { refs } from './refs';


refs.openBtn.addEventListener('click', onClick);
refs.closeBtnStudents.addEventListener('click', onClick);
const backdrop = refs.backdropEl[refs.backdropEl.length -1];

function onClick() {
  // console.log(e);
  backdrop.classList.toggle('is-hidden');

  refs.bodyEl.addEventListener('keydown', keydownEvent);
  function keydownEvent(evt) {
    if (evt.key === 'Escape') {
      addClassBtn(backdrop)
      refs.bodyEl.removeEventListener('keydown', keydownEvent);
    }
  }

  backdrop.addEventListener('click', modalClick);
  function modalClick(evt) {
    console.log(evt.target);
    if (evt.target !== backdrop) {
      return
    } else {
      addClassBtn(backdrop);
      backdrop.removeEventListener('click', modalClick);
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

function addClassBtn(btn) {
    btn.classList.add('is-hidden');  
}
