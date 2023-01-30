import { Notify } from 'notiflix';
import { createCardMarkup } from './main-markup';

// import { getCards } from './modal';
// import pagination from './pagination';
import { getUpcomingMovies } from './fetch-films';

const galleryEl = document.querySelector('.js-gallery');

const getWatchedBtn = document.querySelector('.js-watched-btn');
const getQueueBtn = document.querySelector('.js-queue-btn');

getWatchedBtn.addEventListener('click', onGetWatched);
getQueueBtn.addEventListener('click', onGetQueue);
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
    // if (!parsed) {
    //   Notify.info('Your library is empty!');
    galleryEl.innerHTML = `<h1>EMPTY LIBRARY</h1>`;
    // } else {
    //   createCollectionMoviesMarkup(key);
    // }
  } catch (error) {
    console.log(error);
  } finally {
    // getCards();
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
  // console.log(data);
  // const movies = data.results;
  // console.log(movies);
  createCardMarkup(data);
  // galleryEl.innerHTML = markup;
  localStorage.setItem('currentData', data);
}

// function createUpcomingMoviesMarkup(page) {
//   getUpcomingMovies(page)
//     .then(data => {
//       const movies = data.results;
//       const markup = createCardMarkup(movies);
//       galleryEl.innerHTML = markup;
//     })
//     .catch(err => console.log(err));
// }
// function getCards() {
//   setTimeout(() => {
//     refs.card = document.querySelectorAll('.movie');
//     // console.log(refs.card);
//     refs.card.forEach(e => e.addEventListener('click', openCard));
//   }, 500);
// }
