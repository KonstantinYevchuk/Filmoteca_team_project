import { Notify } from 'notiflix';
import { refs } from './refs';
import addLocalStorage from './q-local-storadge';
import { createCardMarkup } from './main-markup';
import { openCard } from './modal';
import { markUpWatched, markUpQueue, markupData } from './firebase';

// import { getCards } from './modal';
// import pagination from './pagination';
const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);
// const galleryEl = document.querySelector('.js-gallery');

if (refs.getWatchedBtn || refs.getQueueBtn) {
  refs.getWatchedBtn.addEventListener('click', onGetWatched);
  refs.getQueueBtn.addEventListener('click', onGetQueue);
}

// createLibraryMarkup('watched'); // local
markUpWatched(); // dataBase

async function onGetWatched() {
  // createLibraryMarkup('watched'); // local

  markUpWatched(); //dataBase
  btnActive(refs.getWatchedBtn);
  btnRemoveClass(refs.getQueueBtn);
}

async function onGetQueue() {
  // createLibraryMarkup('queue'); //local
  markUpQueue(); //dataBase
  btnActive(refs.getQueueBtn);
  btnRemoveClass(refs.getWatchedBtn);
}

//================== data from localStorage===========
// function createLibraryMarkup(key) {
//   try {
//     const data = localStorage.getItem(key);
//     const parsed = JSON.parse(data);
//     console.log(parsed);
//     if (!parsed.length) {
//       galleryEl.innerHTML = `<img src="${imageUrl}" alt="empty library" />`;
//     } else {
//       createCardMarkup(parsed);
//     }
//   } catch (error) {
//     console.log(error);
//   }
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
