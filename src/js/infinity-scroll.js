import { createCardMarkup, createCardMarkupLibrary } from './main-markup';
import { galleryUl } from './watch-local-storadge';
import { refs } from './refs';

const imageUrl = new URL('../images/empty-lib.jpg', import.meta.url);
let myKay;
function boo(key) {
  return (myKay = key);
}

let from = 0;
let to = 3;

const options = {
  root: null,
  rootMargin: '100px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

function onInfinityLoad(entries, observer) {
  // console.log(entries);

  try {
    const data = localStorage.getItem('queue');
    const parsed = JSON.parse(data);
    console.log(parsed);

    if (parsed.length) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // console.log(parsed.slice(from, to));
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

export { boo };
