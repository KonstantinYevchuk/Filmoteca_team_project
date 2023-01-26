import { createPopularMoviesMarkup } from './main-markup';
import { createCardMarkup } from './markup-watch-q';

const galleryEl = document.querySelector('.js-gallery');

const getWatchedBtn = document.querySelector('.js-watched-btn');
const getQueueBtn = document.querySelector('.js-queue-btn');

getWatchedBtn.addEventListener('click', onGetWatched);
getQueueBtn.addEventListener('click', onGetQueue);

function onGetWatched() {
  createLibraryMarkup('watched');
}

function onGetQueue() {
  createLibraryMarkup('queue');
}

function createLibraryMarkup(key) {
  const data = localStorage.getItem(key);
  const parsed = JSON.parse(data);
  if (!parsed) {
    createPopularMoviesMarkup();
  } else {
    createCollectionMoviesMarkup(key);
  }
}

function getCollectionMoviesLocal(key) {
  const localJson = localStorage.getItem(key);
  const data = JSON.parse(localJson);
  return data;
}
function createCollectionMoviesMarkup(key) {
  const data = getCollectionMoviesLocal(key);
  const movies = data.results;
  const markup = movies.map(movie => createCardMarkup(movie));
  galleryEl.innerHTML = markup;
}
