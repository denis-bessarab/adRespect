const gallery = document.getElementById('gallery');
const closeArea = document.querySelector('.close-area');
const realizations = document.querySelectorAll('.grid-item');
const galleryImage = document.querySelector('.gallery-image');
const actualImageNumber = document.querySelector('.actual-image-number');
const amount = document.querySelector('.amount');
const galleryArrowLeft = document.querySelector('.gallery-arrow-left');
const galleryArrowRight = document.querySelector('.gallery-arrow-right');
let isGalleryVisible = false;

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
  setDirection('right');
  changeImage();
});

closeArea.addEventListener('click', () => {
  hideGallery();
});

galleryArrowLeft.addEventListener('click', () => {
  animateArrow(galleryArrowLeft);
  setDirection('left');
  changeImage();
});

function showGallery() {
  isGalleryVisible = true;
  gallery.classList.remove('hidden');
  setTimeout(() => {
    showImage();
  }, 100);
}

function hideGallery() {
  isGalleryVisible = false;
  gallery.classList.add('hidden');
  hideImage();
}

function prepareSrcFromUrl() {
  const backgoundImageUrl = currentImage.style.backgroundImage;
  return backgoundImageUrl.split('').slice(5).reverse().slice(2).reverse().join('');
}

function setDirection(dir) {
  switch (dir) {
    case 'left': {
      const currentImageIndex = [...realizations].indexOf(currentImage);
      if (currentImageIndex !== 0) {
        currentImage = realizations[currentImageIndex - 1];
      } else {
        currentImage = realizations[realizations.length - 1];
      }
      break;
    }
    case 'right': {
      const currentImageIndex = [...realizations].indexOf(currentImage);
      if (currentImageIndex < realizations.length - 1) {
        currentImage = realizations[currentImageIndex + 1];
      } else {
        currentImage = realizations[0];
      }
      break;
    }
  }
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

document.addEventListener('keyup', (e) => {
  if (isGalleryVisible) {
    if (e.key === 'ArrowLeft') {
      setDirection('left');
      changeImage();
    }
    if (e.key === 'ArrowRight') {
      setDirection('right');
      changeImage();
    }
    if (e.key === 'Escape') {
      hideGallery();
    }
  }
});
