const cards = document.querySelectorAll('.card');
function createCardsObserver() {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const observer = new IntersectionObserver(showCards, options);
  observer.observe(cards[0]);
}

createCardsObserver();
function showCards(entries) {
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add('visible');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('visible');
      }, index * 300);
    });
  }
}
