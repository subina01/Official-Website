/*=============== SERVICES MODAL ===============*/
const modals = document.querySelectorAll('.services__modal'),
      modalButtons = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let activeModal = (modalIndex) => {
  modals[modalIndex].classList.add('active-modal');
}

modalButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    activeModal(index);
  });
});

modalCloses.forEach((closeButton) => {
  closeButton.addEventListener('click', () => {
    modals.forEach((modal) => {
      modal.classList.remove('active-modal');
    });
  });
});




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll'): scrollUp.classList.remove('show-scroll')
} 

window.addEventListener('scroll', scrollUp)