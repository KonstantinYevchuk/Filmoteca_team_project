export const refs = {
   API_URL: 'https://api.themoviedb.org/3/',
   API_KEY: '158819e65eb0fbf8513ba7b934c25216',
    //=====--modal.js--======//
  closeModalBtn: document.querySelector('[data-modal-close]'),
  modal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
  title: document.querySelector('.table__title'),
  voteAverage: document.querySelector('.table__value--orange'),
  voteCount: document.querySelector('.table__value--grey'),
  popularity: document.querySelector('.js-film-popularity'),
  originalTitle: document.querySelector('.js-film-original-title'),
  genre: document.querySelector('.js-film-genre'),
  about: document.querySelector('.js-film-about'),
  modalImg: document.querySelector('.modal__img'),
  galleryUl: document.querySelector('.js-gallery'),
  //=====--textCut---======//
  modalText: document.querySelector('.modal__text'),
  modalBtnClose: document.querySelector('.modal__btn-close'),
  //=====--autorisation.js---=====///
  loginForm: document.querySelector('.login-form'),
  signupForm: document.querySelector('.registration-form'),
  logout: document.querySelector('.js-btn-exit'),
  logBtnContainer: document.querySelector('.js-btn-in'),
  exitBtnContainer: document.querySelector('.js-btn-exit'),
  loginFormBtn: document.querySelector('#data-formBtn-login'),
  regFormBtn: document.querySelector('#data-formBtn-reg'),
  logForm: document.querySelector('#data-login-box'),
  regForm: document.querySelector('#data-reg-box'),
  libraryHidden: document.querySelector('.library_hidden'),
  //====--input.js--======//
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.inputsearch'),
  galleryEl: document.querySelector('.js-gallery'),
  seacrhError: document.querySelector('.search-error'),
  //====---loader.js--====//
  loader: document.querySelector('.loader'),
  //====---main-markup.js--====//
  galleryElMain: document.querySelector('.gallery'),
  //====--theme-btn.js--====//
  changeThemeBtn: document.querySelector('.switch-checkbox'),
  bodyTheme: document.querySelector('body'),
  //===---to-the-top.js--===//
  mybutton: document.getElementById("myBtn"),
  //===---registration.js--===//
  openBtnRegistration: document.querySelector('[data-modal-reg-open]'),
  closeBtnRegistration: document.querySelector('[data-modal-reg-close]'),
  modalRegistration: document.querySelector('[data-reg-modal]'),
  //===---modal-students.js--===//
  bodyEl: document.body,
  openBtn: document.querySelector('.footer_btn'),
  closeBtnStudents: document.querySelector('.modal-window__button'),
  backdropEl: document.querySelectorAll('.back-drop'),
  modalEl: document.querySelector('.modal-window'),
  galleryStudents: document.querySelector('.gallery_students'),
  //====---pagination---===//
  paginationBox: document.querySelector('.pagination'),
  //====---view-trailer.js---===//
  trailerBtn: document.querySelector('.js-trailer__btn'),
  modalTrailer: document.querySelector('.trailer'),
  back_drop: document.querySelector('[data-modal-trailer]'),
  closeBtn: document.querySelector('[data-modal-close-trailer]'),
  //===---watch-local-storage.js===---
  getWatchedBtn: document.querySelector('.js-watched-btn'),
  getQueueBtn: document.querySelector('.js-queue-btn'),
  //===---q-watch-local-storage.js---===//
  watchBtn: document.querySelector('[data-action="watch"]'),
  queueBtn: document.querySelector('[data-action="queue"]'),
};