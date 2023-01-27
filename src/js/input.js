import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getSearchMoviesFetch } from './fetch-films';

export let searchQuery = '';
let searchPage = null;

const searchForm = document.querySelector('.search-form')
const searchInput = document.querySelector('.inputsearch')
searchForm.addEventListener('submit', onSearch)

async function onSearch(evt) { 
    evt.preventDefault();
    searchQuery = evt.target.elements.searchQuery.value.trim();
    resetRequest();

    if (searchQuery === '') { 
        Notify.warning('Search result not successful. Enter the correct movie name and try again')
        // load and render population film
        return
    }

    const getFetchResp = await getSearchMoviesFetch(searchQuery, searchPage);
    const moviesArray = await getFetchResp.results;
    
    
    
    if (moviesArray.length === 0) {
        Notify.failure('Ooops, movies matching your search were not found')
        return
    }



    console.log(moviesArray);
}

function resetRequest() { 
    searchInput.value = '';
}


