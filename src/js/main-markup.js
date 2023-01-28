import {getPopularMoviesFetch} from './fetch-films';

const galleryEl = document.querySelector('.gallery');
const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '158819e65eb0fbf8513ba7b934c25216';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
let genresMovie = '';

function createCardMarkup({
    poster_path,
    title,
    genre_ids,
    release_date,
    vote_average,
  }) {
    
    getMovieGenres (genre_ids);
    
    return `<li class="movie">
        <picture>
            <source src="./images/modal-Default-Img.jpg">
            <img src="${IMAGE_BASE_URL}${poster_path}" alt="movie poster" class="movie__poster" loading="lazy"/>
        </picture>    
        <h2 class="movie__title">${title}</h2>
        <p class="movie__subtitle">${genresMovie}${' | '+ release_date.slice(0,4)}</p>
        <p class="movie__rate">${vote_average}</p>
        </li>`
  }
function getMovieGenres (param){
    let genreList = [];

    param.map(key =>{
        genreList.push(localStorage.getItem(key));
    });

    if (!genreList){
        genresMovie = 'Other';
    } else if (genreList.length < 4) {
        genresMovie = genreList.join(', ');
    } else {
        genresMovie = genreList.slice(0, 2).join(', ').concat(', Other');
    };
    return genresMovie
}
  
async function createPopularMoviesMarkup() {
    await getPopularMoviesFetch()
    .then(data => {
        const movies = data.results;
        console.log(movies)
        const markup = movies.map(movie => createCardMarkup(movie)).join('');
        galleryEl.innerHTML = markup;
    })
    .catch(err => console.log(err));
}

createPopularMoviesMarkup()

async function getMoviesGenres (){
    try {
        const response = await fetch(
            `${API_URL}/genre/movie/list?api_key=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const resp = await response.json();
        console.log(resp);
        await resp.genres.forEach(item=>{
            localStorage.setItem(item.id, item.name);
        });
        return resp;
    } catch (err) {
        console.log(err);
    }
}

getMoviesGenres ();

export {createPopularMoviesMarkup,createCardMarkup,getMoviesGenres};
export {IMAGE_BASE_URL, API_KEY, API_URL};
