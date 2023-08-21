const buttonAnimate = (event, callback) => {
  const button = event.target;
  button.classList.add('animated');
  setTimeout(() => {
    button.classList.remove('animated');
    setTimeout(() => {
      if (callback) {
        callback();
      }
    }, 200);
  }, 200);
};

const moveToKontaktSection = () => {
  const kontaktSection = document.getElementById('kontakt');
  kontaktSection.scrollIntoView();
};

const moveToRealizacjeSection = () => {
  const realizacjeSection = document.getElementById('realizacje');
  realizacjeSection.scrollIntoView();
};

const buttons = document.querySelectorAll('.button-primary');
function createButtonsObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const observer = new IntersectionObserver(showButtons, options);
  buttons.forEach((button) => {
    observer.observe(button);
  });
}

createButtonsObserver();
function showButtons(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}

