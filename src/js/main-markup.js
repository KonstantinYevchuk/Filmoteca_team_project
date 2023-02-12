import { lang } from './select-language';
import { getPopularMoviesFetch } from './fetch-films';
import pagination from './pagination';
import { getMovieGenres, getMoviesGenres } from './genres';

const galleryEl = document.querySelector('.gallery');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
let genresMovie = '';

const imageUrl = new URL(
  '../images/modal-Default-Img.jpg?width=250',
  import.meta.url
);
getMoviesGenres();

function createCardMarkup(res) {

  const markup = res
    .map(
      ({ poster_path, title, release_date, genre_ids, vote_average, id }) => {
        genresMovie = getMovieGenres(genre_ids);

        const releaseDate =
          release_date === undefined ? 'no date' : release_date.slice(0, 4);

        return `<li class="movie" data-movie-id=${id}>
        <img src="${IMAGE_BASE_URL}${poster_path}" onerror="this.src='${imageUrl}'" alt="movie poster" class="movie__poster" data-movie-id=${id} loading="lazy"/>
        <div class="movie__description">
        <h2 class="movie__title" data-movie-id=${id}>${title}</h2>
        <p class="movie__subtitle" data-movie-id=${id}>${genresMovie}${
          ' | ' + releaseDate
        }</p>
        <p class="movie__rate" data-movie-id="${id}">${vote_average.toFixed(
          1
        )}</p>
        </div>
        </li>`;
      }
    )
    .join('');

  galleryEl.innerHTML = markup;
  if (res.length) {
    smoothScrolling();
  }
  return markup;
}

async function createPopularMoviesMarkup() {
 
  await getPopularMoviesFetch()
    .then(data => {
      createCardMarkup(data.results);
      pagination(data.page, data.total_pages);
    })
    .catch(err => console.log(err));
}

// createPopularMoviesMarkup();

async function getMoviesGenres() {
  try {
    
    lang.current = localStorage.getItem('choosenLang');
    
    const response = await fetch(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}&language=${lang.current}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const resp = await response.json();
    // console.log(resp);
    await resp.genres.forEach(item => {
      localStorage.setItem(item.id, item.name);
    });
    return resp;
  } catch (err) {
    console.log(err);
  }
}
//getMoviesGenres();

function smoothScrolling() {
  const { height: cardHeight } =
    galleryEl.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * -200,
    behavior: 'smooth',
  });
}

export { createPopularMoviesMarkup, createCardMarkup, getMoviesGenres };
export { IMAGE_BASE_URL, API_KEY, API_URL };
