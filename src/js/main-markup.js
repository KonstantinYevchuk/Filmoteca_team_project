import { getPopularMoviesFetch } from './fetch-films';
import pagination from './pagination';

const galleryEl = document.querySelector('.gallery');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
export const totalPage = 500;

function createCardMarkup(res) {
  // console.log(res);
  // let genreList = [];
  // res.genre_ids.map(key => {
  //   genreList.push(localStorage.getItem(key));
  // });
  const markup = res
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      return `<li class="movie">
        <img src="${IMAGE_BASE_URL}${poster_path}" alt="movie poster" class="movie__poster" loading="lazy"/>
        <h2 class="movie__title">${title},${vote_average}</h2>
        <p class="movie__subtitle">${
          genre_ids.slice(0, 2).join(', ') + ', Other | '
        }${release_date.slice(0, 4)}</p>
        </li>`;
    })
    .join('');
  galleryEl.innerHTML = markup;
  smoothScrolling();
}

function createPopularMoviesMarkup() {
  getPopularMoviesFetch()
    .then(data => {
      // const markup = createCardMarkup(data.results);
      // galleryEl.innerHTML = markup;
      createCardMarkup(data.results);
      pagination(data.page, totalPage);

      // smoothScrolling();
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
    console.log(resp.genres);
    await resp.genres.forEach(item => {
      localStorage.setItem(item.id, item.name);
      // console.log(resp);
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
