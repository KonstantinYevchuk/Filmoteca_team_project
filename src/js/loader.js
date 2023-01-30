// import onPageLoadingSpinner from './js/loader';
// onPageLoadingSpinner();
// need to import to index.js and library.js

const refs = { loader: document.querySelector('.loader') };

function removeLoader() {
  refs.loader.classList.add('loader-hidden');
}

function addLoader() {
  refs.loader.classList.remove('loader-hidden');
}

document.addEventListener('readystatechange', onPageLoadingSpinner);

export default function onPageLoadingSpinner() {
  const imgRef = document.querySelector('.movie__poster');

  addLoader();
  if (document.readyState === 'complete') {
    setTimeout(removeLoader, 500);
  }
}
