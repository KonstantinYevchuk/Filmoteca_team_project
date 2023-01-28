import { fetchTrailer } from "./fetch-trailer";
// import modalOpen from "./modal";
import Notiflix from "notiflix";


const trailerBtn = document.querySelector('.js-trailer__btn');
const modal = document.querySelector('.trailer');
const beak = document.querySelector('[data-modal-trailer]');
const closeBtn = document.querySelector('[data-modal-close-trailer]');
const body = document.querySelector('body');

trailerBtn.addEventListener('click', onClick);
closeBtn.addEventListener('click', onClose);

body.addEventListener('keydown', closeModalOnEsc);
beak.addEventListener('click', closeModalOnBackdrop);

async function onClick() {
    beak.classList.toggle('is-hidden');
    try {
        const resp = await fetchTrailer();
        const { results } = resp;
        if (results.length === 0) {
            Notiflix.Notify.info('Sorry, no trailer found!', { timeout: 1000 });
            return;
        }
        createTrailerMarkup(results[0].key)
    } catch (err) {
        Notiflix.Notify.failure(err.message);
    }
}

function onClose() {
    beak.classList.toggle('is-hidden');
    modal.innerHTML = '';
}

function closeModalOnEsc(e) {
    if (e.keyCode === 27) onClose();
}

function closeModalOnBackdrop(e) {
    console.log(e.target.classList.value);
    if (e.target.classList.value === 'back-drop') onClose();
}

function createTrailerMarkup(key) {
    modal.insertAdjacentHTML(
    'beforeend',
        `<iframe
            class="trailer__video"
            src="https://www.youtube.com/embed/${key}?&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		    allowautoplay
            allowfullscreen
        ></iframe>`
  );
}