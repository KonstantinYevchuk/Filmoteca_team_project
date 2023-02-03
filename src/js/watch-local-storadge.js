import { Notify } from 'notiflix';
import { refs } from './refs';
import addLocalStorage from './q-local-storadge';
import { createCardMarkup, createCardMarkupLibrary } from './main-markup';
import { openCard } from './modal';
import { observer, observer1 } from './infinity-scroll';

// import { getCards } from './modal';
// import pagination from './pagination';
// import { getUpcomingMovies } from './fetch-films';
const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);
export const galleryUl = document.querySelector('.js-gallery');

if (refs.getWatchedBtn || refs.getQueueBtn) {
  refs.getWatchedBtn.addEventListener('click', onGetWatched);
  refs.getQueueBtn.addEventListener('click', onGetQueue);
}

createLibraryMarkup('watched');

// console.log('hello');
function onGetWatched() {
  createLibraryMarkup('watched');
  btnActive(refs.getWatchedBtn);
  btnRemoveClass(refs.getQueueBtn);
}

function onGetQueue() {
  createLibraryMarkup('queue');
  btnActive(refs.getQueueBtn);
  btnRemoveClass(refs.getWatchedBtn);
}

export function createLibraryMarkup(key) {
  try {
    const data = localStorage.getItem(key);
    const parsed = JSON.parse(data);
    // console.log(parsed);
    if (parsed === null) {
      galleryUl.innerHTML = `<img src="${imageUrl}" alt="empty library" />`;
    } else {
      observer.observe(refs.guard);
      // createCardMarkupLibrary(parsed.slice(0, 3));
      createCardMarkup(parsed.slice(0, 3));
      // localStorage.setItem('currentData', parsed);
      // galleryUl.innerHTML = `<li><h1>FULL</h1></li>`;
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
//   // galleryUl.innerHTML = markup;
//   localStorage.setItem('currentData', data);
// }

function btnActive(btn) {
  if (btn.classList.contains('library_btn--current')) {
    return;
  } else {
    btn.classList.add('library_btn--current');
  }
}
function btnRemoveClass(btn) {
  btn.classList.remove('library_btn--current');
}
