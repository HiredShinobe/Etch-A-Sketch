//The main div to append the grid to

const main_arena = document.querySelector('#main-arena');

//create a 16 * 16 grid of little divs

function divMaker() {
  for (let i = 1; i <= 256; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add("grid");
    gridDiv.addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
    })
    main_arena.appendChild(gridDiv);
  }
};

divMaker();

//Store the formula for remving child Nodes in a function that will later be used for clearing the hover effects

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

//to get a random color using a function for later use

function getColorsoftheWind() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const wind_color = document.querySelector('#btn-wind-color');

wind_color.addEventListener('click', function () {
  let val = document.getElementById('range').value;
  let cell = main_arena.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = getColorsoftheWind();
    })
  }
});

const BTN_black = document.querySelector('#btn-black');

BTN_black.addEventListener('click', function () {
  let val = document.getElementById('range').value;
  let cell = main_arena.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'black';
    })
  }
});

const BTN_white = document.querySelector('#btn-eraser');

BTN_white.addEventListener('click', function () {
  let val = document.getElementById('range').value;
  let cell = main_arena.children;
  for (let i = 0; i < val * val; i++) {
    cell[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = 'white';
    })
  }
});


const range = document.querySelector('#range');
const size = document.querySelector('.size');

range.addEventListener('input', function () {
  let rangeValue = document.getElementById('range').value;
  size.textContent = rangeValue;
  removeAllChildNodes(main_arena);
  main_arena.setAttribute('style', `grid-template-columns: repeat(${rangeValue}, 2fr); grid-template-rows: repeat(${rangeValue}, 2fr);`);
  for (let i = 0; i < rangeValue * rangeValue; i++) {
    const div = document.createElement('div');
    div.classList.add('cell');
    div.addEventListener('mouseover', function (event) {
      event.target.style.backgroundColor = 'black';
    })
    main_arena.appendChild(div);
  }
});

const BTN_reset = document.querySelector('#btn-reset');

BTN_reset.addEventListener('click', function () {
  let rangeValue = document.getElementById('range').value;
  let cell = main_arena.children;
  for (let i = 0; i < rangeValue * rangeValue; i++) {
    cell[i].style.backgroundColor = 'white';
  }
})


const color_picker = document.querySelector('#color-picker');

color_picker.addEventListener('input', function () {
  let rangeValue = document.getElementById('range').value;
  let pickedColor = document.getElementById('color-picker').value;
  let cell = main_arena.children;
  for (let i = 0; i < rangeValue * rangeValue; i++) {
    cell[i].addEventListener('mouseover', function (e) {
      e.target.style.backgroundColor = pickedColor;
    })
  }
});