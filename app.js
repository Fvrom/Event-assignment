const arrow = document.querySelector('.arrow');
arrow.classList.add('reveal');

const arrowafter = document.querySelector('.arrow:after');
window.addEventListener('scroll', function (e) {
  arrow.classList.remove('reveal');
});
