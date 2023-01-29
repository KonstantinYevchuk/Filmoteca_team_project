import './js/firebase';
import './js/input';
import './js/modal-markup';

import './js/fetch-films';
import './js/pagination';
import './js/main-markup';
import {
  createPopularMoviesMarkup,
  createCardMarkup,
  getMoviesGenres,
} from './js/main-markup';
import { request, modal, cutLongText } from './js/modal';

request();
modal();
// modalOpen();
cutLongText();

import './js/modal-students';
import './js/modal-registration';

