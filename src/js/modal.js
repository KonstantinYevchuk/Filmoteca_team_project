

import { getPopularMoviesFetch } from './fetch-films';
// import './main-markup';
import { createPopularMoviesMarkup, createCardMarkup } from './main-markup';
import { addLocalStorage } from './q-local-storadge';

createPopularMoviesMarkup();

const refs = {
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  title: document.querySelector('.table__title'),
  voteAverage: document.querySelector('.table__value--orange'),
  voteCount: document.querySelector('.table__value--grey'),
  popularity: document.querySelector('.js-film-popularity'),
  originalTitle: document.querySelector('.js-film-original-title'),
  genre: document.querySelector('.js-film-genre'),
  about: document.querySelector('.js-film-about'),
  modalImg: document.querySelector('.modal__img'),
  card: null,
};

let res = null;

export async function request() {
  const data = await getPopularMoviesFetch();
  res = data.results;
}

export function modal() {
  refs.closeModalBtn.addEventListener('click', closeModal);

  function openModal() {
    refs.modal.classList.remove('is-hidden');

    refs.body.addEventListener('keydown', closeModalOnEsc);
    refs.modal.addEventListener('click', closeModalOnBackdrop);
  }

  function closeModal() {
    refs.modal.classList.add('is-hidden');

    refs.body.addEventListener('keydown', closeModalOnEsc);
    refs.modal.addEventListener('click', closeModalOnBackdrop);
  }

  function closeModalOnEsc(e) {
    if (e.keyCode === 27) closeModal();
  }

  function closeModalOnBackdrop(e) {
    if (e.target.classList.value === 'backdrop') closeModal();
  }

  setTimeout(() => {
    refs.card = document.querySelectorAll('.movie');
    console.log(refs.card);
    refs.card.forEach(e => e.addEventListener('click', openCard));

  }, 500);

  function openCard(e) {
    for (const film of res) {
      if (film.id === +e.target.dataset.movieId) {
        const genreList = [];
        film.genre_ids.map(key => {
          genreList.push(localStorage.getItem(key));
        });

        refs.modalImg.src = `https://image.tmdb.org/t/p/original/${film.poster_path}`;
        refs.title.textContent = film.title;
        refs.voteAverage.textContent = film.vote_average.toFixed(1);
        refs.voteCount.textContent = film.vote_count;
        refs.popularity.textContent = film.popularity.toFixed(1);
        refs.originalTitle.textContent = film.original_title;
        refs.genre.textContent = genreList.join(', ');
        refs.about.textContent = film.overview;
       
        addLocalStorage(film);
        openModal();
        break;
      }
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
