import {
  getPopularMoviesFetch,
  getSearchMoviesFetch,
  getUpcomingMovies,
} from './fetch-films';
import { createCardMarkup } from './main-markup';
import Notiflix from 'notiflix';
import { searchQuery } from './input';

const paginationBox = document.querySelector('.pagination');
let globalCurrentPage = 0;

export default function pagination(currentPage, allPages) {
  let markup = '';
  let beforeTwoPage = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPage = currentPage + 2;
  globalCurrentPage = currentPage;

  if (currentPage > 1) {
    markup += `<li><button class='arrow-left'>left</button></li>`;
    markup += `<li class='number-pagination'><button>1</button></li>`;
  }
  if (currentPage > 4) {
    markup += `<li>...</li>`;
  }
  if (currentPage > 3) {
    markup += `<li class='number-pagination'><button> ${beforeTwoPage}</button></li>`;
  }
  if (currentPage > 2) {
    markup += `<li class='number-pagination'><button>${beforePage}</button></li>`;
  }
  markup += `<li class='number-pagination'><button class='currentPage'>${currentPage}</button></li>`;
  if (currentPage >= allPages) {
    return (paginationBox.innerHTML = markup);
  }
  if (allPages - 1 > currentPage) {
    if (afterPage <= allPages) {
      markup += `<li class='number-pagination'><button>${afterPage}</button></li>`;
    }
  }
  if (allPages - 2 > currentPage) {
    if (afterTwoPage <= allPages) {
      markup += `<li class='number-pagination'><button>${afterTwoPage}</button></li>`;
    }
  }
  if (allPages - 3 > currentPage) {
    markup += `<li>...</li>`;
  }
  if (allPages > currentPage || allPages < currentPage) {
    markup += `<li class='number-pagination'><button>${allPages}</button></li>`;
    markup += `<li><button class='arrow-right'>right</button></li>`;
  }
  paginationBox.innerHTML = markup;
}

paginationBox.addEventListener('click', handlrePagination);

function handlrePagination(evt) {
  if (evt.target.nodeName !== 'LI' && evt.target.nodeName !== 'BUTTON') {
    return;
  }
  if (evt.target.textContent === '...') {
    return;
  }
  if (evt.target.textContent === 'left') {
    if (searchQuery !== '') {
      getSearchMoviesFetch(searchQuery, (globalCurrentPage -= 1))
        .then(data => {
          createCardMarkup(data.results);
          pagination(data.page, data.total_pages);
        })
        .catch(error => {
          Notiflix.Notify.failure('Data error1');
        });
      return;
    } else if (!!localStorage.getItem('watched') || !!localStorage.getItem('queue')) {
      getUpcomingMovies((globalCurrentPage -= 1))
        .then(data => {
          createCardMarkup(data.results);
          pagination(data.page, data.total_pages);
        })
        .catch(error => {
          Notiflix.Notify.failure(console.log(error));
        });
      return;
    } else {
      getPopularMoviesFetch((globalCurrentPage -= 1))
        .then(data => {
          createCardMarkup(data.results);
          pagination(data.page, data.total_pages);
        })
        .catch(error => {
          Notiflix.Notify.failure('Data error1');
        });
      return;
    }
  }
  if (evt.target.textContent === 'right') {
    if (searchQuery !== '') {
      getSearchMoviesFetch(searchQuery, (globalCurrentPage += 1))
        .then(data => {
          createCardMarkup(data.results);
          pagination(data.page, data.total_pages);
        })
        .catch(error => {
          Notiflix.Notify.failure('Data error1');
        });
      return;
    } else if (!!localStorage.getItem('watched') || !!localStorage.getItem('queue')) {
      getUpcomingMovies((globalCurrentPage += 1))
        .then(data => {
          createCardMarkup(data.results);
          pagination(data.page, data.total_pages);
        })
        .catch(error => {
          Notiflix.Notify.failure(console.log(error));
        });
      return;
    } else {
      getPopularMoviesFetch((globalCurrentPage += 1))
        .then(data => {
          createCardMarkup(data.results);
          pagination(data.page, data.total_pages);
        })
        .catch(error => {
          Notiflix.Notify.failure('Data error1');
        });
      return;
    }
  }
  const page = evt.target.textContent;

  if (searchQuery !== '') {
    getSearchMoviesFetch(searchQuery, page)
      .then(data => {
        createCardMarkup(data.results);
        pagination(data.page, data.total_pages);
      })
      .catch(error => {
        Notiflix.Notify.failure('Data error1');
      });
    return;
  } else if (!!localStorage.getItem('watched') || !!localStorage.getItem('queue')) {
    getUpcomingMovies(page)
      .then(data => {
        createCardMarkup(data.results);
        pagination(data.page, data.total_pages);
      })
      .catch(error => {
        Notiflix.Notify.failure(console.log(error));
      });
    return;
  } else {
    getPopularMoviesFetch(page)
      .then(data => {
        createCardMarkup(data.results);
        pagination(data.page, data.total_pages);
      })
      .catch(error => {
        Notiflix.Notify.failure(console.log(error));
      });
    return;
  }
}
