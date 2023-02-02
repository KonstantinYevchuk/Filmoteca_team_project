import { createCardMarkup, createCardMarkupLibrary } from './main-markup';
import { galleryUl } from './watch-local-storadge';
const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);

let from = 0;
let to = 3;

const options = {
  root: null,
  rootMargin: '200px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

export function onInfinityLoad(entries, observer) {
  try {
    const data = localStorage.getItem('queue');
    const parsed = JSON.parse(data);
    // console.log(parsed.length);
    if (parsed.length) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(parsed.slice(from, to))
          createCardMarkupLibrary(parsed.slice(from, to));
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
