import { createPopularMoviesMarkup, getMoviesGenres } from './main-markup'
const lang = {current:'uk'}

const flags = {
  uk: { src: new URL("../images/Flag-Ukraine-Flag.48.png.webp", import.meta.url),
        alt: 'flag of Ukraine'
      },
  en: { src: new URL("../images/Flag-United-Kingdom-flag.48.png.webp", import.meta.url),
        alt: 'flag of Great Britain'
      },
  de: { src: new URL("../images/Flag-Germany-Flag.48.png.webp",import.meta.url),
        alt: 'flag of Germany'
      }
  }
 
function select (){
  lang.current = localStorage.getItem('choosenLang')
  let selectItem = document.querySelectorAll('.select__item')
  let selectHeader = document.querySelectorAll('.select__header');
  let selectCurrent = document.querySelector('.select__current');

  console.log(flags[lang.current])
  selectCurrent.innerHTML=`<img src="${flags[lang.current].src}" alt="${flags[lang.current].alt}"id="${lang.current}"/>`
  selectHeader.forEach( item => {item.addEventListener('click', selectToggle)})

  selectItem.forEach( item => {item.addEventListener('click', selectChoose)})

  function selectToggle() {
      this.parentElement.classList.toggle('is-active')
  }
  
  function selectChoose() {
    console.log(event.target.id)
    selectCurrent.innerHTML = `<img src="${flags[(event.target.id)].src}" alt="${flags[(event.target.id)].alt}"id="${event.target.id}"/>`
    lang.current = event.target.id;

    localStorage.setItem('choosenLang',`${lang.current}`);
    getMoviesGenres();
    createPopularMoviesMarkup();
    
    selectCurrent.closest('.select').classList.remove('is-active')
    return lang
}
  return lang
}
export { select, lang };