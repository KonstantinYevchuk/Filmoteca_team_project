const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

export function createCardMarkup({
  poster_path,
  title,
  genre_ids,
  release_date,
  vote_average,
}) {
  return `<li class="movie">
    <img src="${IMAGE_BASE_URL}${poster_path}" alt="movie poster" class="movie__poster" loading="lazy"/>
    <h2 class="movie__title">${title}</h2>
    <p class="movie__genres">${genre_ids}</p>
    <p class="movie__year">${release_date}</p>
    <p class="movie__rate">${vote_average}</p>
  </li>`;
}
