const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';

import { Notify } from 'notiflix';
import { createCardMarkup } from './main-markup';
import { createUpcomingMoviesMarkup } from './q-local-storadge';
import { refs } from './modal';

const galleryEl = document.querySelector('.js-gallery');

const getWatchedBtn = document.querySelector('.js-watched-btn');
const getQueueBtn = document.querySelector('.js-queue-btn');

getWatchedBtn.addEventListener('click', onGetWatched);
getQueueBtn.addEventListener('click', onGetQueue);
createLibraryMarkup('watched');
function onGetWatched() {
  createLibraryMarkup('watched');
}

function onGetQueue() {
  createLibraryMarkup('queue');
}
getCards();
function getCards() {
  setTimeout(() => {
    refs.card = document.querySelectorAll('.movie');
    // console.log(refs.card);
    refs.card.forEach(e => e.addEventListener('click', openCard));
  }, 500);
}

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
  } catch (error) {
    console.log(error);
  }
}
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
function createLibraryMarkup(key) {
  try {
    const data = localStorage.getItem(key);
    const parsed = JSON.parse(data);
    if (!parsed) {
      Notify.info('Your library is empty!');
      createUpcomingMoviesMarkup();
    } else {
      createCollectionMoviesMarkup(key);
    }
    // localStorage.setItem('currentData', currentData);
  } catch (error) {
    console.log(error);
  }
}

function getCollectionMoviesLocal(key) {
  try {
    const localJson = localStorage.getItem(key);
    const data = JSON.parse(localJson);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
function createCollectionMoviesMarkup(key) {
  const data = getCollectionMoviesLocal(key);
  const movies = data.results;
  const markup = movies.map(movie => createCardMarkup(movie));
  galleryEl.innerHTML = markup;
  currentData = data;
}
