import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMoviesFetch } from './fetch-films';
import { createCardMarkup } from './main-markup';
import { createPopularMoviesMarkup } from './main-markup';
import { pagination } from './pagination';

Notify.init({
    width: '400px',
    position: 'center-top',
    closeButton: false,
    timeout: 1000,
    clickToClose: true,
    cssAnimationStyle: 'from-top',
});

export let searchQuery = '';
let searchPage = null;

const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.inputsearch');
const galleryEl = document.querySelector('.js-gallery');
const seacrhError = document.querySelector('.search-error');
searchForm.addEventListener('submit', onSearch);

async function onSearch(evt) { 
    evt.preventDefault();
    searchInput.setAttribute('autocomplete', "off")
    searchQuery = evt.target.elements.searchQuery.value.trim();
    resetRequest();

    try {
        if (searchQuery === '') {
            seacrhError.classList.remove('is-hidden');
            Notify.warning('Search result not successful. Enter the correct movie name and try again')
            // load and render population film
            createPopularMoviesMarkup();
            resetErrMessage();
            return
        }

        const getFetchResp = await getSearchMoviesFetch(searchQuery, searchPage);
        const moviesArray = await getFetchResp.results;
        createCardMarkup(moviesArray);
        resetErrMessage();

        if (!moviesArray.length) {
            seacrhError.classList.remove('is-hidden');
            createPopularMoviesMarkup();
            Notify.failure('Ooops, movies matching your search were not found')
            return
        }
        // console.log(moviesArray)
    } catch (err) {
        Notify.failure(`Something is wrong. ${err.message}`);
    }

    
}

function resetRequest() { 
    searchInput.value = '';
};

function resetErrMessage() { 
    setTimeout(() => { 
            seacrhError.classList.add('is-hidden');
        }, 1000);
}


