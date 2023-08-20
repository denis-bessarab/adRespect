const slides = document.querySelectorAll('.slide');
const sliderView = document.querySelector('.slider-view');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');
let isSliderAnimationInProgress = false;

slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url('../../public/img/slider/slide-${(index + 1).toString()}.webp')`;
  slide.style.left = index.toString() + '00%';
});

arrowRight.addEventListener('click', (e) => {
  sliderArrowsAnimation(e.target);
  if (!isSliderAnimationInProgress) {
    moveSliderRight();
  }
});

arrowLeft.addEventListener('click', (e) => {
  sliderArrowsAnimation(e.target);
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

function sliderArrowsAnimation(arrow) {
  arrow.classList.add('animated');
  setTimeout(() => {
    arrow.classList.remove('animated');
  }, 200);
}

