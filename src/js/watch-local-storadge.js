import { Notify } from 'notiflix';
import { refs } from './refs';
import addLocalStorage from './q-local-storadge';
import { createCardMarkup } from './main-markup';
import { openCard } from './modal';
import { getMoviesGenres } from './main-markup';
// getMoviesGenres();

// import { getCards } from './modal';
// import pagination from './pagination';
// import { getUpcomingMovies } from './fetch-films';

const galleryEl = document.querySelector('.js-gallery');

if (refs.getWatchedBtn) {
  refs.getWatchedBtn.addEventListener('click', onGetWatched);
}
if (refs.getQueueBtn) {
  refs.getQueueBtn.addEventListener('click', onGetQueue);
}

// getMoviesGenres();
createLibraryMarkup('watched');

console.log('hello');
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
    // console.log(parsed);
    if (!parsed.length) {
      galleryEl.innerHTML = `<li><h1>EMPTY LIBRARY</h1></li>`;
    } else {
      createCardMarkup(parsed);
      // localStorage.setItem('currentData', parsed);
      // galleryEl.innerHTML = `<li><h1>FULL</h1></li>`;
    }
  } catch (error) {
    console.log(error);
  }
}

// function getCollectionMoviesLocal(key) {
//   try {
//     const localJson = localStorage.getItem(key);
//     const data = JSON.parse(localJson);
//     console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// function createCollectionMoviesMarkup(key) {
//   const data = getCollectionMoviesLocal(key);
//   // console.log(data);
//   // const movies = data.results;
//   // console.log(movies);
//   createCardMarkup(data);
//   // galleryEl.innerHTML = markup;
//   localStorage.setItem('currentData', data);
// }
