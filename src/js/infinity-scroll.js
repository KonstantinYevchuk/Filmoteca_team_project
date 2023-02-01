import { createCardMarkup } from './main-markup';

export function infinityScroll(key) {
  let from = 0;
  let to = 4;
  // console.log(key.slice(from, to));
}
let from = 0;
let to = 10;

const data = localStorage.getItem('watched');
const parsed = JSON.parse(data);
// console.log(parsed);

const options = {
  root: null,
  rootMargin: '150px',
  threshold: 1.0,
};

export const observer = new IntersectionObserver(onInfinityLoad, options);

// createCardMarkup(parsed.slice(0, 4));

export function onInfinityLoad(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      from += 4;
      to += 4;
      console.log(parsed.slice(from, to));
      createCardMarkup(parsed.slice(from, to));
    }
  });
}
