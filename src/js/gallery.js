const gallery = document.getElementById('gallery');
const closeArea = document.querySelector('.close-area');
const realizations = document.querySelectorAll('.grid-item');
const galleryImage = document.querySelector('.gallery-image');
const actualImageNumber = document.querySelector('.actual-image-number');
const amount = document.querySelector('.amount');
const galleryArrowLeft = document.querySelector('.gallery-arrow-left');
const galleryArrowRight = document.querySelector('.gallery-arrow-right');

let currentImage;
amount.innerText = realizations.length.toString();

realizations.forEach((realization) => {
  realization.addEventListener('click', (e) => {
    currentImage = e.target;
    setActualImageNumber();
    setImage(prepareSrcFromUrl());
    showGallery();
  });
});

galleryArrowRight.addEventListener('click', () => {
  animateArrow(galleryArrowRight);
  const currentImageIndex = [...realizations].indexOf(currentImage);
  if (currentImageIndex < realizations.length - 1) {
    currentImage = realizations[currentImageIndex + 1];
  } else {
    currentImage = realizations[0];
  }
  changeImage();
});

closeArea.addEventListener('click', () => {
  hideGallery();
});

galleryArrowLeft.addEventListener('click', () => {
  animateArrow(galleryArrowLeft);
  const currentImageIndex = [...realizations].indexOf(currentImage);
  if (currentImageIndex !== 0) {
    currentImage = realizations[currentImageIndex - 1];
  } else {
    currentImage = realizations[realizations.length - 1];
  }
  changeImage();
});

function showGallery() {
  gallery.classList.remove('hidden');
  setTimeout(() => {
    showImage();
  }, 100);
}

function hideGallery() {
  gallery.classList.add('hidden');
  hideImage();
}

function prepareSrcFromUrl() {
  const backgoundImageUrl = currentImage.style.backgroundImage;
  return backgoundImageUrl.split('').slice(5).reverse().slice(2).reverse().join('');
}

function setImage() {
  galleryImage.src = prepareSrcFromUrl();
}

function setActualImageNumber() {
  actualImageNumber.innerText = (checkCurrentImageNumber() + 1).toString();
}

function checkCurrentImageNumber() {
  return [...realizations].indexOf(currentImage);
}

function changeImage() {
  setActualImageNumber();
  hideImage();
  setTimeout(() => {
    setImage();
    showImage();
  }, 200);
}

function showImage() {
  galleryImage.classList.remove('opacity-0');
}

function hideImage() {
  galleryImage.classList.add('opacity-0');
}

function animateArrow(arrow) {
  arrow.classList.add('scale-95');
  setTimeout(() => {
    arrow.classList.remove('scale-95');
  }, 200);
}
