const bodyEl = document.body;
const openBtn = document.querySelector('.footer_btn');
const closeBtn = document.querySelector('.modal-window__button');
const backdropEl = document.querySelector('.back-drop');
const modalEl = document.querySelector('.modal-window');

openBtn.addEventListener('click', onClick);
closeBtn.addEventListener('click', onClick);

function onClick() {
    // console.log(e);
    backdropEl.classList.toggle('is-hidden');
} 

bodyEl.addEventListener("keydown", keydownEvent);
function keydownEvent(evt) {
    if(evt.key === "Escape") {
        backdropEl.classList.add('is-hidden');
       
    }
}  
 
backdropEl.addEventListener('click', modalClick);
function modalClick(evt) {
    // console.log(evt.currentTarget);
    if(evt.target !== modalEl) {
        backdropEl.classList.add('is-hidden');
    }
    
}

// bodyEl.removeEventListener('keydown', keydownEvent);
// backdropEl.removeEventListener('click', modalClick);