import { Notify } from 'notiflix';
import { refs } from './refs';
import addLocalStorage from './q-local-storadge';
import { createCardMarkup } from './main-markup';
import { openCard } from './modal';
import { markUpWatched, markUpQueue, markupData } from './firebase';

// import { getCards } from './modal';
// import pagination from './pagination';
// import { getUpcomingMovies } from './fetch-films';
const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);
const galleryEl = document.querySelector('.js-gallery');

if (refs.getWatchedBtn || refs.getQueueBtn) {
  refs.getWatchedBtn.addEventListener('click', onGetWatched);
  refs.getQueueBtn.addEventListener('click', onGetQueue);
}

// createLibraryMarkup('watched');
markUpWatched();

console.log('hello');
async function onGetWatched() {
  // createLibraryMarkup('watched');

  markUpWatched();
  btnActive(refs.getWatchedBtn);
  btnRemoveClass(refs.getQueueBtn);
}

function onGetQueue() {
  // createLibraryMarkup('queue');
  markUpQueue();
  btnActive(refs.getQueueBtn);
  btnRemoveClass(refs.getWatchedBtn);
}

// function createLibraryMarkup(key) {
//   try {
//     const data = localStorage.getItem(key);
//     const parsed = JSON.parse(data);
//     console.log(parsed);
//     if (!parsed.length) {
//       galleryEl.innerHTML = `<img src="${imageUrl}" alt="empty library" />`;
//     } else {
//       createCardMarkup(parsed);
//       // galleryEl.innerHTML = `<li><h1>FULL</h1></li>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

// function createLibraryMarkup(key) {
//   try {
//     const data = localStorage.getItem(key);
//     const parsed = JSON.parse(data);
//     console.log(parsed);
//     if (!parsed.length) {
//       galleryEl.innerHTML = `<img src="${imageUrl}" alt="empty library" />`;
//     } else {
//       createCardMarkup(parsed);
//       // galleryEl.innerHTML = `<li><h1>FULL</h1></li>`;
//     }
//   } catch (error) {
//     console.log(error);
//   }
// }

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
