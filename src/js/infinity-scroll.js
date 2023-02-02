import { createCardMarkup, createCardMarkupLibrary } from './main-markup';
import { galleryUl } from './watch-local-storadge';
import { refs } from './refs';

const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);

// if (refs.getWatchedBtn || refs.getQueueBtn) {
//   refs.getWatchedBtn.addEventListener('click', onGetWatched);
//   refs.getQueueBtn.addEventListener('click', onGetQueue);
// }

let from = 3;
let to = 6;

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

function onInfinityLoad(entries, observer) {
  // console.log(entries);

  try {
    const data = localStorage.getItem('watched');
    // const data1 = localStorage.getItem('queue');
    const parsed = JSON.parse(data);
    // const parsed1 = JSON.parse(data1);
    console.log(parsed);
    // console.log(parsed1);

    if (parsed) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(parsed.slice(from, to));
          createCardMarkupLibrary(parsed.slice(from, to));
          // createCardMarkupLibrary(parsed1.slice(from, to));
          from += 3;
          to += 3;
        }
      });
    } else {
      galleryUl.innerHTML = `<img src="${imageUrl}" alt="empty library" />`;
    }
  } catch (error) {
    console.log(error);
  }
  // console.log(entries)
}

export { boo };
