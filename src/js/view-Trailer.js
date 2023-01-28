import { fetchTrailer } from "./fetch-trailer";
import modalOpen from "./modal";
import Notiflix from "notiflix";


// const r = modalOpen();

// console.dir(r);

const trailerBtn = document.querySelector('.js-trailer__btn');
const modal = document.querySelector('.modal-trailer');
// console.dir(modal);


trailerBtn.addEventListener('click', onClick);

async function onClick(evt) {
    // console.log("evt");

  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-trailer]'),
    closeModalBtn: document.querySelector('[data-modal-close-trailer]'),
    modal: document.querySelector('[data-modal-trailer]'),
    // body: document.querySelector('body'),
  };

    console.log(refs.modal);

    refs.modal.classList.toggle('is-hidden');




    try {
        const resp = await fetchTrailer();
        const { results } = resp;

        // console.log(results.length);
        if (results.length === 0) {
            Notiflix.Notify.info('Sorry, no trailer found!', { timeout: 1000 });
            return;
        }

        // console.log(modalOpen());
        createTrailerMarkup(results[0].key)

    } catch (err) {
        Notiflix.Notify.failure(err.message);
    }




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

// createTrailerMarkup('Hj1vP05HGOg');