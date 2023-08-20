const slides = document.querySelectorAll('.slide');
const sliderView = document.querySelector('.slider-view');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
let isSliderAnimationInProgress = false;

slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url('../../public/img/slider/slide-${(index + 1).toString()}.webp')`;
  slide.style.left = index.toString() + '00%';
});

arrowRight.addEventListener('click', () => {
  if (!isSliderAnimationInProgress) {
    moveSliderRight();
  }
});

arrowLeft.addEventListener('click', () => {
  if (!isSliderAnimationInProgress) {
    moveSliderLeft();
  }
});

let currentSlide = 0;
function moveSliderRight() {
  if (currentSlide < slides.length - 1) {
    isSliderAnimationInProgress = true;
    currentSlide++;
    sliderView.style.left = '-' + currentSlide.toString() + '00%';
    setTimeout(() => {
      isSliderAnimationInProgress = false;
    }, 1000);
  }
}
function moveSliderLeft() {
  if (currentSlide !== 0) {
    isSliderAnimationInProgress = true;
    currentSlide--;
    sliderView.style.left = '-' + currentSlide.toString() + '00%';
    setTimeout(() => {
      isSliderAnimationInProgress = false;
    }, 1000);
  }
}

