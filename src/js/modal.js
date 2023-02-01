import { findId } from './view-Trailer';
import addLocalStoradge from './q-local-storadge';
import { refs } from './refs';

// import { getPopularMoviesFetch, getSearchMoviesFetch } from './fetch-films';
// import './main-markup';
// import { createPopularMoviesMarkup, createCardMarkup } from './main-markup';
// createPopularMoviesMarkup();

let dataFilms = null;

refs.galleryUl.addEventListener('click', openCard);
refs.closeModalBtn.addEventListener('click', closeModal);

function openModal() {
  refs.modal.classList.remove('is-hidden');

  refs.body.addEventListener('keydown', closeModalOnEsc);
  refs.modal.addEventListener('click', closeModalOnBackdrop);
}

function closeModal() {
  refs.modal.classList.add('is-hidden');

  refs.body.removeEventListener('keydown', closeModalOnEsc);
  refs.modal.removeEventListener('click', closeModalOnBackdrop);
  refs.modalImg.src = '';
}

function closeModalOnEsc(e) {
  if (e.keyCode === 27) closeModal();
}

function closeModalOnBackdrop(e) {
  if (e.target.classList.value === 'backdrop') closeModal();
}

async function openCard(e) {
  if (!e.target.dataset.movieId) {
    return;
  }

  if (refs.getWatchedBtn) {
    if (refs.getWatchedBtn.classList.contains('library_btn--current')) {
      dataFilms = JSON.parse(localStorage.getItem('watched'));
    } else if (refs.getQueueBtn.classList.contains('library_btn--current')) {
      dataFilms = JSON.parse(localStorage.getItem('queue'));
    }
  } else {
    dataFilms = JSON.parse(localStorage.getItem('currentData')).results;
  }

  for (const film of dataFilms) {
    if (film.id === +e.target.dataset.movieId) {
      findId(film.id);

      const genreList = [];

      if (film.genre_ids) {
        film.genre_ids.map(genre => {
          genreList.push(localStorage.getItem(genre));
        });
      }

      refs.modalImg.src = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
      refs.title.textContent = film.title;
      refs.voteAverage.textContent = film.vote_average.toFixed(1);
      refs.voteCount.textContent = film.vote_count;
      refs.popularity.textContent = film.popularity.toFixed(1);
      refs.originalTitle.textContent = film.original_title;
      refs.genre.textContent = genreList.join(', ');
      refs.about.textContent = film.overview;

      openModal();
      addLocalStoradge(film);
      break;
    }
  }
}

// Обрезание длинного текста и добавление "читать далее"
export function cutLongText() {
  const refs = {
    modalText: document.querySelector('.modal__text'),
    modalBtnClose: document.querySelector('.modal__btn-close'),
  };

  let letterToCut = 516;

  const contentFullText = refs.modalText.textContent;
  const contentCuttedText = contentFullText.substring(0, letterToCut);

  if (refs.modalText.textContent.length >= letterToCut) {
    refs.modalText.textContent = contentCuttedText;
    readMore();
  }

  function readMore() {
    refs.modalText.appendChild(document.createElement('a'));
    refs.modalTagA = document.querySelector('.modal__text a');
    refs.modalTagA.setAttribute('href', '#');
    refs.modalTagA.textContent = 'read more...';
    refs.modalTagA.addEventListener('click', onShowMore);
  }

  function onShowMore() {
    refs.modalTagA.removeEventListener('click', onShowMore);
    refs.modalText.textContent = contentFullText;

    refs.modalBtnClose.addEventListener('click', onButtonClose);

    function onButtonClose() {
      refs.modalText.textContent = contentCuttedText;
      readMore();
      refs.modalBtnClose.removeEventListener('click', onButtonClose);
    }
  }
}
