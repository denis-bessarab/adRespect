// SEARCH FIELD LOGIC
const debounce = (callback, delay) => {
  let timeout = null;
  return (...arg) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...arg);
    }, delay);
  };
};

const searchIcon = document.querySelector('.search-icon');
const searchField = document.querySelector('.search-field');

let isSearchAnimationInProgress = false;
let isFieldVisible = false;

searchIcon.addEventListener('click', () => {
  if (!isSearchAnimationInProgress) {
    isFieldVisible?hideSearchField():showSearchField();
  }
});

searchField.addEventListener('blur', () => {
  hideSearchField();
});

searchField.addEventListener('input', (e) => {
  debouncedSearch(e.target.value);
});

function showSearchField() {
  isSearchAnimationInProgress = true;
  isFieldVisible = true;
  searchField.classList.add('visible');
  setTimeout(() => {
    isSearchAnimationInProgress = false;
  }, 500);
}

function hideSearchField() {
  if (searchField.value === '') {
    isSearchAnimationInProgress = true;
    isFieldVisible = false;
    searchField.classList.remove('visible');
    setTimeout(() => {
      isSearchAnimationInProgress = false;
    }, 500);
  }
}

function clearSearch() {
  searchField.value = '';
}

function searchFunction(value) {
  if (value !== '') {
    alert('Your search input: ' + value);
  }
}

const debouncedSearch = debounce(searchFunction, 1000);

// OFFERS LOGIC
const offers = document.querySelector('.offers');
const offerLink = document.querySelector('.oferta');
const chevronIcon = document.querySelector('.chevron-icon');

let isOfferAnimationInProgress = false;
let isOfferVisible = false;

offerLink.addEventListener('click', () => {
  if (!isOfferAnimationInProgress) {
    isOfferVisible?hideOffers():showOffers();
  }
});

function showOffers() {
  chevronIcon.classList.add('open');
  isOfferAnimationInProgress = true;
  offers.style.height = (offers.children[0].clientHeight * offers.children.length).toString() + 'px';
  setTimeout(() => {
    isOfferVisible = true;
    isOfferAnimationInProgress = false;
  }, 500);
}
function hideOffers() {
  chevronIcon.classList.remove('open');
  isOfferAnimationInProgress = true;
  offers.style.height = '0';
  setTimeout(() => {
    isOfferVisible = false;
    isOfferAnimationInProgress = false;
  }, 500);
}

// MENU LOGIC
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-list');

let isMenuVisible = false;
let isMenuAnimationInProgress = false;

menuButton.addEventListener('click', () => {
  if (!isMenuAnimationInProgress) {
    isMenuVisible?hideMenu():showMenu();
  }
});
function showMenu() {
  isMenuAnimationInProgress = true;
  menu.classList.add('visible');
  setTimeout(() => {
    isMenuVisible = true;
    isMenuAnimationInProgress = false;
  }, 500);
}
function hideMenu() {
  clearSearch();
  hideSearchField();
  hideOffers();
  menu.classList.add('menu-out');
  setTimeout(() => {
    menu.classList.remove('visible');
    menu.classList.remove('menu-out');
    isMenuAnimationInProgress = false;
    isMenuVisible = false;
  }, 500);
}


