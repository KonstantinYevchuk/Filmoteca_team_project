import { createCardMarkup, createCardMarkupLibrary } from './main-markup';
import { galleryUl } from './watch-local-storadge';
import { refs } from './refs';

const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);

let from = 4;
let to = 7;

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

function onInfinityLoad(entries, observer) {
  console.log(entries);

  try {
    const data = localStorage.getItem('watched');
    const parsed = JSON.parse(data);
    // console.log(parsed);

    if (parsed) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          createCardMarkupLibrary(parsed.slice(from, to));
          from += 4;
          to += 4;
        }
      });
    } else {
      galleryUl.innerHTML = `<img src="${imageUrl}" alt="empty library" />`;
    }
  } catch (error) {
    console.log(error);
  }
  console.log(entries);
}
