const slides = document.querySelectorAll('.slide');
const sliderView = document.querySelector('.slider-view');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');
let isSliderAnimationInProgress = false;
const sliderStatuses = document.querySelectorAll('.slide-status');
let currentSlide = 0;

slides.forEach((slide, index) => {
  slide.style.backgroundImage = `url('/img/slider/slide-${(index + 1).toString()}.webp')`;
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

function moveSliderRight() {
  if (currentSlide < slides.length - 1) {
    isSliderAnimationInProgress = true;
    currentSlide++;
    sliderView.style.left = '-' + currentSlide.toString() + '00%';
    changeSlideStatus();
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
    changeSlideStatus();
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

function changeSlideStatus() {
  sliderStatuses.forEach((status) => {
    status.classList.remove('active');
  });
  sliderStatuses[currentSlide].classList.add('active');
}

