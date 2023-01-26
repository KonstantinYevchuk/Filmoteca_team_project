import { getPopularMoviesFetch } from './fetch-films';
import { createCardMarkup } from './markup-watch-q';

const galleryEl = document.querySelector('.js-gallery');

export function createPopularMoviesMarkup(page) {
  getPopularMoviesFetch(page)
    .then(data => {
      const movies = data.results;
      const markup = movies.map(movie => createCardMarkup(movie));
      galleryEl.innerHTML = markup;
    })
    .catch(err => console.log(err));
}
