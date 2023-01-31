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
  //====--input.js--======//
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.inputsearch'),
  galleryEl: document.querySelector('.js-gallery'),
  seacrhError: document.querySelector('.search-error'),
  //====---loader.js--====//
  loader: document.querySelector('.loader'),
  //====---main-markup.js--====//
  galleryEl: document.querySelector('.gallery'),
  //====--theme-btn.js--====//
  changeThemeBtn: document.querySelector('.switch-checkbox'),
  bodyTheme: document.querySelector('body'),
  //===---to-the-top.js--===//
  mybutton: document.getElementById("myBtn"),
  //===---registration.js--===//
  openModalBtn: document.querySelector('[data-modal-reg-open]'),
  closeModalBtn: document.querySelector('[data-modal-reg-close]'),
  modal: document.querySelector('[data-reg-modal]'),
  //===---modal-students.js--===//
  bodyEl: document.body,
  openBtn: document.querySelector('.footer_btn'),
  closeBtnStudents: document.querySelector('.modal-window__button'),
  backdropEl: document.querySelectorAll('.back-drop'),
  modalEl: document.querySelector('.modal-window'),
  galleryStudents: document.querySelector('.gallery_students'),
  //====---modal.js--=====//
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
  //====---pagination---===//
  paginationBox: document.querySelector('.pagination'),
  //====---view-trailer.js---===//
  trailerBtn: document.querySelector('.js-trailer__btn'),
  modal: document.querySelector('.trailer'),
  beak: document.querySelector('[data-modal-trailer]'),
  closeBtn: document.querySelector('[data-modal-close-trailer]'),
  body: document.querySelector('body'),
  //===---q-local-storage.js===---
  getWatchedBtn: document.querySelector('.js-watched-btn'),
  getQueueBtn: document.querySelector('.js-queue-btn'),
};