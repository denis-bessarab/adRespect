const rozwinButton = document.getElementById('rozwin');
const grid = document.querySelector('.grid');
const gridWrapper = document.querySelector('.grid-wrapper');
const gradient = document.querySelector('.gradient');
const gridHeight = grid.clientHeight;

function rozwinFunction() {
  gridWrapper.style.height = gridHeight.toString() + 'px';
  rozwinButton.classList.add('hidden');
  gradient.style.height = '0';
}
