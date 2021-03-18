/** arrow to indicate scroll down */
const arrow = document.querySelector('.arrow');
arrow.classList.add('reveal');

const arrowafter = document.querySelector('.arrow:after');
window.addEventListener('scroll', function (e) {
  arrow.classList.remove('reveal');
});

/** info box **/
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

/** fade in animation to be activated **/

const routeElement = document.querySelector('#grid-animation');
const scrollOffset = 100;

const elementInView = (el, offset = 0) => {
  const routeElementTop = el.getBoundingClientRect().top;

  return (
    routeElementTop <=
    (window.innerHeight || document.documentElement.clientHeight) - offset
  );
};

const displayElement = () => {
  routeElement.classList.add('animate');
};

const handleScrollanimation = () => {
  if (elementInView(routeElement, scrollOffset)) {
    displayElement();
  }
};

document.addEventListener('scroll', function () {
  handleScrollanimation();
});

/** Get name from url **/
const urlParams = new URLSearchParams(window.location.search);
const urlname = urlParams.get('name');

if (urlname != null) {
  const nameSpan = document.querySelector('.name');

  function convertFirstCharacterToUpper(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  nameSpan.textContent = ` Välkommen ${convertFirstCharacterToUpper(
    urlname
  )}! `;

  fetch('./vip.json')
    .then(function (response) {
      return response.json();
    })
    .then((vip) => {
      vip.names.forEach((checkname) => {
        if (checkname.name === convertFirstCharacterToUpper(urlname)) {
          if (checkname.VIP === true) {
            console.log(checkname.VIP);
            const inputField = document.querySelector('textarea');

            inputField.textContent = `Rabattkod: VANERN2021 `;
          }
        }
      });
    });
}
