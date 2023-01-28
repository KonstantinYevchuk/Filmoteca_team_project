import { fetchTrailer } from "./fetch-trailer";
import Notiflix from "notiflix";

const trailerBtn = document.querySelector('.js-trailer__btn');
const modal = document.querySelector('.container-trailer');
console.dir(modal);


trailerBtn.addEventListener('click', onClick);

async function onClick(evt) {
    console.log(evt);
    try {
        const resp = await fetchTrailer();
        console.log(resp);
        const { results } = resp;
        console.log(results);

        // console.log(results.length);
        if (results.length === 0) {
            Notiflix.Notify.info('Sorry, no trailer found!', { timeout: 1000 });
            return;
        }

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