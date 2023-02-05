import { getPopularMoviesFetch } from './fetch-films';
import pagination from './pagination';
import { refs } from './refs';

let genresMovieModal = '';
let genresMovie = '';

function getMovieGenres(arr) {
  const genreList = [];

  try {
    const data = localStorage.getItem('genres');
    const genresArray = JSON.parse(data);
    for (const genre of genresArray) {
      if (arr.includes(genre.id)) {
        genreList.push(genre.name);
      }
    }

    // genresMovieModal = genreList.join(', ');
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

export { getMovieGenres, getMoviesGenres, genresMovieModal };
