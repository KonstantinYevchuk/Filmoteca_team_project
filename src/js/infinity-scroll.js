import { createCardMarkup, createCardMarkupLibrary } from './main-markup';

let from = 0;
let to = 10;

const data = localStorage.getItem('watched');
const parsed = JSON.parse(data);

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

export function onInfinityLoad(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      from += 4;
      to += 4;
      console.log(parsed.slice(from, to));
      createCardMarkupLibrary(parsed.slice(from, to));
    }
  });
}
