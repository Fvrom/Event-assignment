const arrow = document.querySelector('.arrow');
arrow.classList.add('reveal');

const arrowafter = document.querySelector('.arrow:after');
window.addEventListener('scroll', function (e) {
  arrow.classList.remove('reveal');
});

const openModalButton = document.querySelector('.btn-info');
const closeModalButton = document.querySelector('[data-close-button]');
const modal = document.querySelector('.modal');

const buttonScroll = document.querySelector('.btn-sign-up');
buttonScroll.addEventListener('click', () => {
  document.getElementById('down').scrollIntoView();
});

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

const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

if (name != null) {
  const nameSpan = document.querySelector('.name');

  function convertFirstCharacterToUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  nameSpan.textContent = ` Välkommen,${convertFirstCharacterToUpper(name)}! `;
}
