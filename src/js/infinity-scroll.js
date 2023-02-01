import { createCardMarkup, createCardMarkupLibrary } from './main-markup';

let from = 0;
let to = 3;

const data = localStorage.getItem('watched');
const parsed = JSON.parse(data);
// console.log(parsed);

const options = {
  root: null,
  rootMargin: '200px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

export function onInfinityLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      createCardMarkupLibrary(parsed.slice(from, to));
      from += 3;
      to += 3;
    }
  });
}
