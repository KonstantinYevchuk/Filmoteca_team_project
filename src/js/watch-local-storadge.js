import { createPopularMoviesMarkup } from './main-markup';
import { createCardMarkup } from './main-markup';

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
  try {
    const data = localStorage.getItem(key);
    const parsed = JSON.parse(data);
    if (!parsed) {
      createPopularMoviesMarkup();
    } else {
      createCollectionMoviesMarkup(key);
    }
  } catch (error) {
    console.log(error);
  }
}

function getCollectionMoviesLocal(key) {
  try {
    const localJson = localStorage.getItem(key);
    const data = JSON.parse(localJson);
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
}
