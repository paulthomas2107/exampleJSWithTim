const body = document.getElementsByTagName('body')[0];

const setColor = (colorName) => {
  if (colorName == 'random') {
    items = ['green', 'red', 'blue'];
    colorName = items[Math.floor(Math.random() * items.length)];
  }
  body.style.backgroundColor = colorName;
};
