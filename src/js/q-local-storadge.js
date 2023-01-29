import { getUpcomingMovies } from './fetch-films';
import { createCardMarkup } from './main-markup';

const galleryEl = document.querySelector('.js-gallery');

async function createUpcomingMoviesMarkup() {
  await getUpcomingMovies()
    .then(data => {
      const movies = data.results;
      const markup = movies.map(movie => createCardMarkup(movie)).join('');
      galleryEl.innerHTML = markup;
    })
    .catch(err => console.log(err));
}

export { createUpcomingMoviesMarkup };
