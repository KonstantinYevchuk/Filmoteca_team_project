// ====================== README ============================
// for import // import { getPopularMoviesFetch, getSearchMoviesFetch } from './js/fetch-films';
// getPopularMoviesFetch(page) //
// getSearchMoviesFetch(query, page) //
// page = current page // Number
// query = query from input // String
// ====================== THE END ===========================
import onPageLoadingSpinner from './loader';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';

async function getPopularMoviesFetch(page) {
  try {
    onPageLoadingSpinner();
    const response = await fetch(
      `${API_URL}/trending/movie/day?api_key=${API_KEY}&page=${page || 1}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const popularMovies = await response.json();
    console.log(popularMovies);
    // console.log(popularMovies.results);
    
    popularMovies.results.map(Movies => {
      getMovieGenres(Movies.genre_ids);
      Movies.genres = getMovieGenres(Movies.genre_ids) });    //   тут в localStorage currentData  додаю іменовані жанри
      localStorage.setItem('currentData', JSON.stringify(popularMovies));
      //   
      
    return popularMovies;    
  } catch (error) {
    console.log(error);
  }
}
function getMovieGenres(param) {
  let genreList = [];

  param.map(key => {
    genreList.push(localStorage.getItem(key)); 
  });
  return genreList;
};

async function getMoviesGenres() {
  try {
    const response = await fetch(
      `${API_URL}/genre/movie/list?api_key=${API_KEY}`
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
getMoviesGenres();

async function getSearchMoviesFetch(query, page) {
  if (!query) {
    return;
  }
  try {
    onPageLoadingSpinner();
    const response = await fetch(
      `${API_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=${
        page || 1
      }`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const searchMovies = await response.json();
    console.log(searchMovies);
    localStorage.setItem('currentData', JSON.stringify(searchMovies));
    return searchMovies;
  } catch (error) {
    console.log(error);
  }
}

async function getUpcomingMovies(page) {
  try {
    onPageLoadingSpinner();
    const response = await fetch(
      `${API_URL}/movie/upcoming?api_key=${API_KEY}&page=${page || 1}`
    );
    // console.log(response);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const upcomingMovies = await response.json();
    // console.log(upcomingMovies);
    localStorage.setItem('currentData', JSON.stringify(upcomingMovies));

    return upcomingMovies;
  } catch (error) {
    console.log(error);
  }
}

export { getPopularMoviesFetch, getSearchMoviesFetch, getUpcomingMovies };
