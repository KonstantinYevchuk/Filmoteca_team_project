import { fetchTrailer } from "./fetch-trailer";
import { refs } from "./refs";
import Notiflix from "notiflix";

let id = null;

refs.trailerBtn.addEventListener('click', onClick);
refs.closeBtn.addEventListener('click', onClose);
refs.body.addEventListener('keydown', closeModalOnEsc);
refs.back_drop.addEventListener('click', closeModalOnBackdrop);

export function findId(idFilm) {
    id = idFilm;
}

async function onClick() {
    refs.back_drop.classList.toggle('is-hidden');
    try {
        const resp = await fetchTrailer(id);
        const { results } = resp;
        if (results.length === 0) {
            onClose()
            Notiflix.Notify.info('Sorry, no trailer found!', { timeout: 1000 });
            return;
        }
        createTrailerMarkup(results[0].key)
    } catch (err) {
        Notiflix.Notify.failure(err.message);
    }
}

function onClose() {
    refs.back_drop.classList.toggle('is-hidden');
    refs.modalTrailer.innerHTML = '';
}

function closeModalOnEsc(e) {
    if (e.keyCode === 27) onClose();
}

function closeModalOnBackdrop(e) {
    if (e.target.classList.value === 'back-drop') onClose();
}

function createTrailerMarkup(key) {
    refs.modalTrailer.insertAdjacentHTML(
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