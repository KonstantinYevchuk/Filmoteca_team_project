import { getPopularMoviesFetch } from './fetch-films';
import pagination from './pagination';
import { refs } from './refs';

const galleryEl = document.querySelector('.gallery');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

const imageUrl = new URL(
  '../images/modal-Default-Img.jpg?width=250',
  import.meta.url
);

let genresMovie = '';
function createCardMarkup(res) {
  // const genreList = [];

  const markup = res
    .map(
      ({
        poster_path,
        title,
        release_date,
        genre_ids,
        vote_average,
        id,
        genres,
      }) => {
        if (genre_ids) {
          genresMovie = getMovieGenres(genre_ids);
        } else {
          const genresArr = [];
          for (const genre of genres) {
            genresArr.push(genre.id);
          }
          genresMovie = getMovieGenres(genresArr);
        }

        return `<li class="movie">
        <img src="${IMAGE_BASE_URL}${poster_path}" onerror="this.src='${imageUrl}'" alt="movie poster" class="movie__poster" data-movie-id=${id} loading="lazy"/>
        <div class="movie__description">
        <h2 class="movie__title" data-movie-id=${id}>${title}</h2>
        <p class="movie__subtitle" data-movie-id=${id}>${genresMovie}${
          ' | ' + release_date.slice(0, 4)
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
  smoothScrolling();
  return markup;
}

function getMovieGenres(arr) {
  const genreList = [];

  try {
    const data = localStorage.getItem('genres');
    const genresArray = JSON.parse(data);
    const filteredGenres = genresArray.filter(genre => {
      for (const genres of arr) {
        if (genre.id === genres) {
          return genre.name;
        }
      }
    });

    for (const genre of filteredGenres) {
      genreList.push(genre.name);
    }

    if (!genreList) {
      genresMovie = 'Other';
    } else if (genreList.length < 4) {
      genresMovie = genreList.join(', ');
    } else {
      genresMovie = genreList.slice(0, 2).join(', ').concat(', Other');
    }
    return genresMovie;
  } catch (error) {
    console.log(error);
  }
}

async function createPopularMoviesMarkup() {
  await getPopularMoviesFetch()
    .then(data => {
      createCardMarkup(data.results);
      pagination(data.page, data.total_pages);
    })
    .catch(err => console.log(err));
}

async function getMoviesGenres() {
  try {
    const response = await fetch(
      `${refs.API_URL}/genre/movie/list?api_key=${refs.API_KEY}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const resp = await response.json();
    localStorage.setItem('genres', JSON.stringify(resp.genres));
    return resp.genres;
  } catch (err) {
    console.log(err);
  }
}
function smoothScrolling() {
  const { height: cardHeight } =
    galleryEl.firstElementChild.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * -200,
    behavior: 'smooth',
  });
}

export {
  createPopularMoviesMarkup,
  createCardMarkup,
  getMovieGenres,
  getMoviesGenres,
};
export { IMAGE_BASE_URL, API_KEY, API_URL };
