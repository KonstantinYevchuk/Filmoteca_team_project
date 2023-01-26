export default function modalOpen() {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    body: document.querySelector('body'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.body.addEventListener('keydown', closeModalOnEsc);
  refs.modal.addEventListener('click', closeModalOnBackdrop);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function closeModalOnEsc(e) {
    if (e.keyCode === 27) refs.modal.classList.add('is-hidden');
  }

  function closeModalOnBackdrop(e) {
    if (e.target.classList.value === 'backdrop')
      refs.modal.classList.add('is-hidden');
  }
}
