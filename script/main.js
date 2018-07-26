let squares = 14;

function makeSquares(squares) {
  let container = document.querySelector('.gridcontainer');

  for (i = 0; i < squares * squares; i++) {
    const box = document.createElement('div');
    container.appendChild(box);
    box.classList.add('box');
  }
  container.setAttribute('style', `grid-template-columns: repeat(${squares}, auto)`);
}


function hoverColor() {
  let hover = document.querySelectorAll('.box');
  hover.forEach((box) => {
    box.addEventListener('mouseover', () => {
      box.setAttribute('style', `background-color: black`)
    })
  });
}

function clearField() {
  document.getElementById("grid").innerHTML = "";
}

function reset() {
  let button = document.querySelector('#reset');
  button.addEventListener('click', () => {
  let howMany = window.prompt('How many squares per side?');
    clearField();
    makeSquares(howMany);
    hoverColor();
  });
}

makeSquares(squares);
reset();
hoverColor();
