const button = document.querySelector('.flip-button');
const card = document.querySelector('.card');

button.addEventListener('click', () => {
  card.classList.toggle('is-flipped'); // on off 시키는 느낌 toggle
});