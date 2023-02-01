import { refs } from './refs';

window.addEventListener('scroll', onPageScroll);

function onPageScroll() {
  const screenHeight = window.screen.height;
  if (scrollY > 20) {
    btnScrollEnabled();
  }
  if (scrollY < screenHeight / 4) {
    btnScrollDisabled();
  }
}

function btnScrollEnabled() {
  refs.buttonTop.classList.remove('is-hidden');
}

function btnScrollDisabled() {
  refs.buttonTop.classList.add('is-hidden');
}

refs.buttonTop.addEventListener('click', onButtonTopClick);

function onButtonTopClick() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}
