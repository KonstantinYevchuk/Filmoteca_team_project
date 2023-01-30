import { Notify } from 'notiflix';
import { createCardMarkup } from './main-markup';
import { getCards } from './modal';
import pagination from './pagination';
import { getUpcomingMovies } from './fetch-films';

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
  } catch (error) {
    console.log(error);
  } finally {
    getCards();
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
  localStorage.setItem('currentData', data);
}

export function createUpcomingMoviesMarkup(page) {
  getUpcomingMovies(page)
    .then(data => {
      const movies = data.results;
      const markup = createCardMarkup(movies);
      galleryEl.innerHTML = markup;
    })
    .catch(err => console.log(err));
}
