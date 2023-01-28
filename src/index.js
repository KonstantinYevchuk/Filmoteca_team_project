import './js/firebase';
import './js/input';
import {
  createPopularMoviesMarkup,
  createCardMarkup,
  getMoviesGenres,
} from './js/main-markup';
import { request, modal, cutLongText } from './js/modal';

// createPopularMoviesMarkup();
// createCardMarkup();
// getMoviesGenres();

request();
modal();
cutLongText();

import './js/modal-students';
