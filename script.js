'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

function openModal() {
  // to deactivate a class and all its properties
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // to deactivate a property in a class
  // modal.style.display = 'block';
}
function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// using esc key to close modal
document.addEventListener('keydown', function (evnt) {
  //   if (evnt.key === 'Escape' ) {
  //     if (!modal.classList.contains('hidden')) {
  //       closeModal();
  //     }
  //   }
  if (evnt.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
