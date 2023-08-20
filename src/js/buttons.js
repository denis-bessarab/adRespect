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
