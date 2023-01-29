import { getPopularMoviesFetch } from './fetch-films';
import pagination from './pagination';

const galleryEl = document.querySelector('.gallery');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
let genresMovie = '';

console.log(genresMovie);

function createCardMarkup(res) {
  
  console.log(res)
  const markup = res
    .map(
      ({ poster_path, title, release_date, genre_ids, vote_average, id }) => {
        getMovieGenres(genre_ids);
        return `<li class="movie" data-movie-id="${id}">
        <picture data-movie-id="${id}">
            <source srcset="${IMAGE_BASE_URL}${poster_path}" type="image/jpg">
            <img src="./images/modal-Default-Img.jpg" alt="movie poster" class="movie__poster" loading="lazy" data-movie-id="${id}"/>
        </picture>
        <h2 class="movie__title" data-movie-id="${id}">${title}</h2>
        <p class="movie__subtitle" data-movie-id="${id}">${genresMovie}${
          ' | ' + release_date.slice(0, 4)
        }</p>
        <p class="movie__rate" data-movie-id="${id}">${vote_average.toFixed(
          1
        )}</p>
        </li>`;
      }
    )
    .join('');

  galleryEl.innerHTML = markup;
  smoothScrolling();
}
function getMovieGenres(param) {
  let genreList = [];

  param.map(key => {
    genreList.push(localStorage.getItem(key));
  });

  if (!genreList) {
    genresMovie = 'Other';
  } else if (genreList.length < 4) {
    genresMovie = genreList.join(', ');
  } else {
    genresMovie = genreList.slice(0, 2).join(', ').concat(', Other');
  }
  return genresMovie;
}

async function createPopularMoviesMarkup() {
  await getPopularMoviesFetch()
    .then(data => {
      createCardMarkup(data.results);
      pagination(data.page, data.total_pages);

    })
    .catch(err => console.log(err));
}

createPopularMoviesMarkup();

async function getMoviesGenres() {
  try {
    const response = await fetch(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);

    }
    const resp = await response.json();
    console.log(resp);
    await resp.genres.forEach(item => {
      localStorage.setItem(item.id, item.name);
    });
    return resp;
  } catch (err) {
    console.log(err);
  }
}

function smoothScrolling() {
  const {
    height: cardHeight,
  } = galleryEl.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * -200,
    behavior: 'smooth',
  });
}

getMoviesGenres();

export { createPopularMoviesMarkup, createCardMarkup, getMoviesGenres };
export { IMAGE_BASE_URL, API_KEY, API_URL };
