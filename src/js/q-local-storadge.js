import { getUpcomingMovies } from './fetch-films';
import { createCardMarkup } from './main-markup';

const galleryEl = document.querySelector('.js-gallery');

export function createUpcomingMoviesMarkup(page) {
  getUpcomingMovies(page)
    .then(data => {
      const movies = data.results;
      const markup = createCardMarkup(movies);
      galleryEl.innerHTML = markup;
    })
    .catch(err => console.log(err));
}

// export { createUpcomingMoviesMarkup };
