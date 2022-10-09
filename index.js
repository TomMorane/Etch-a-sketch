// put values by default
let color = 'black';
let click = false;

// used for download index.js after the html
document.addEventListener('DOMContentLoaded', function () {
  // creatingBoard (number); for the number of squares by default
  creatingBoard(16);
  draw.innerHTML =
    'Click reset to make the grid white then click on it to draw';
  // Targeting button drawable or not
  document.querySelector('body').addEventListener('click', function (e) {
    if (e.target.tagName != 'BUTTON') {
      click = !click;
      let draw = document.querySelector('#draw');

      if (click) {
        draw.innerHTML = 'The pencil is activated';
      } else {
        draw.innerHTML = 'The pencil is desactivated';
      }
    }
  });

  // Button for choosing size of squares
  let btn_popup = document.querySelector('#selectSize');
  btn_popup.addEventListener('click', function () {
    let size = getSize();
    creatingBoard(size);
  });
});

// function for the number of sizes
function creatingBoard(size) {
  let drawingPart = document.querySelector('.drawingPart');
  drawingPart.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  drawingPart.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDivs = size * size;

  // used for drawing every divs
  for (let i = 0; i < numDivs; i++) {
    let div = document.createElement('div');
    div.addEventListener('mouseover', colorDiv);
    drawingPart.insertAdjacentElement('beforeend', div);
  }
}

// asking the question for the size
function getSize() {
  let input = prompt('Give me the size you want of the grid');
  let message = document.querySelector('#errorMessage');
  if (input == '') {
    message.innerHTML = 'Please put a number, stupido.';
  } else if (input < 0 || input > 100) {
    message.innerHTML = 'Put number between 1 and 100, stupido.';
  } else {
    message.innerHTML = 'The grid is ready';
    return input;
  }
}

// the random and black color choose
function colorDiv() {
  if (click) {
    if (color == 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = 'black';
    }
  }
}

// link between html and js
function setColor(colorChoice) {
  color = colorChoice;
}

// reseting all new divs into white color
function resetColor() {
  let divs = document.querySelectorAll('div');
  divs.forEach((div) => (div.style.backgroundColor = `white`));
}
