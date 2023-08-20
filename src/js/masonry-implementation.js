const elem = document.querySelector('.grid');
new Masonry( elem, {
  columnWidth: '.grid-sizer',
  itemSelector: '.grid-item',
  percentPosition: true,
  gutter: '.gutter-sizer',
  horizontalOrder: true,
});
const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach((item, index) => {
  item.style.backgroundImage = `url('./public/img/realizacje/r${(index + 1).toString()}.webp')`;
});

