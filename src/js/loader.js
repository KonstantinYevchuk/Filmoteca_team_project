// import { addLoader, removeLoader } from './js/loader';
// to start loader -> run function addLoader();
// to stop loader -> run function removeLoader();

const refs = { loader: document.querySelector('.loader') };

export function removeLoader() {
  refs.loader.classList.remove('loader-hidden');
}

export function addLoader() {
  refs.loader.classList.add('loader-hidden');
}
