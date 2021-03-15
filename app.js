const arrow = document.querySelector('.arrow');
arrow.classList.add('reveal');

const arrowafter = document.querySelector('.arrow:after');
window.addEventListener('scroll', function (e) {
  arrow.classList.remove('reveal');
});

const openModalButton = document.querySelector('.btn-info');
const closeModalButton = document.querySelector('[data-close-button]');
const modal = document.querySelector('.modal');

const overlay = document.getElementById('overlay');

/* overlay.addEventListener('click', () => 
{
  const modals = document.querySelectiorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})
 */

openModalButton.addEventListener('click', () => {
  if (!modal.classList.contains('active')) {
    modal.classList.add('active');
    openModalButton.textContent = 'X';
    openModalButton.style.fontSize = 'xx-large';
  } else {
    modal.classList.remove('active');
    openModalButton.textContent = 'Snabb-fakta';
    openModalButton.style.fontSize = '13px';
  }
});

/* 
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');  */
