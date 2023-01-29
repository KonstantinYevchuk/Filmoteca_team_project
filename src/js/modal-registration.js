const refs = {
  openModalBtn: document.querySelector('[data-modal-reg-open]'),
  closeModalBtn: document.querySelector('[data-modal-reg-close]'),
  modal: document.querySelector('[data-reg-modal]'),
};
refs.openModalBtn.addEventListener('click', toggleModal);
refs.closeModalBtn.addEventListener('click', toggleModal);



function toggleModal() {
  refs.modal.classList.toggle('is-hidden');
}
