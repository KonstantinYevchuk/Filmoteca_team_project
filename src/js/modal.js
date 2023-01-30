import { getPopularMoviesFetch, getSearchMoviesFetch } from './fetch-films';

import { findId } from './view-Trailer';

// import {addLocalStoradge} from './q-local-storadge';


// import './main-markup';
import { createPopularMoviesMarkup, createCardMarkup } from './main-markup';

createPopularMoviesMarkup();

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';

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
const searchForm = document.querySelector('.search-form');
searchForm.addEventListener('submit', getCards);

// export function modal() {
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

getCards();

async function openCard(e) {
  if (!e.target.dataset.movieId) {
    return;
  }

  try {
    const response = await fetch(
      `${API_URL}movie/${+e.target.dataset.movieId}?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const film = await response.json();
    console.log(film);

    findId(film.id);

    const genreList = [];

    console.log(film.genres);

    film.genres.map(({ id }) => {
      genreList.push(localStorage.getItem(id));
    });

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

  } catch (error) {
    console.log(error);
  }
}
// }

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

function getCards() {
  setTimeout(() => {
    refs.card = document.querySelectorAll('.movie');
    // console.log(refs.card);
    refs.card.forEach(e => e.addEventListener('click', openCard));
  }, 500);
}
