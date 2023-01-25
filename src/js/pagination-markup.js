import pagination from './pagination';
import { getPopularMoviesFetch } from './fetch-films';

const list = document.querySelector('.cards');
export const totalPage = 500;

export function createMarkup(arr) {
  const markup = arr.reduce(
    (acc, { title, vote_average, poster_path }) =>
      acc +
      `<li class="cards-item"><img class='movieImag' src="https://image.tmdb.org/t/p/w500${poster_path}" alt=""> <div class='description_box'><p class='title'>${title}</p><p class='grade'>${vote_average}</p></div></li>`,
    ''
  );
  list.innerHTML = markup;
}

getPopularMoviesFetch().then(data => {
  console.log(data);
  createMarkup(data.results);
  pagination(data.page, totalPage);
});
