document.addEventListener('DOMContentLoaded', () => {

  let container = document.querySelector('.container');
  container.className += ' align-items-center shadow-lg bg-white rounded vh-100 vw-100';
  let hi = document.createElement('h1');
  hi.textContent = 'Pixel Art';
  hi.className = 'row justify-content-center mb-5'
  container.prepend(hi)

  let gridContainer = document.createElement('div');
  gridContainer.className = 'align-items-center';

  let gridSizeRow = 2; // do not add more than 12
  let gridSizeCol = 2; // do not add more than 12
  let colSize = 12/gridSizeCol; // default grid layout size is 12
  let offSet = 100; // the smaller this number the smaller the width
  let percent = 100; // the smaller this number the bigger the height


  for(let i = 0; i < gridSizeRow; i++) {
    let row = document.createElement('div');
    row.style.height = `${(gridSizeRow / (percent / 100)) + offSet}px`;
    row.className = 'row justify-content-center';



    for(let j = 0; j < gridSizeCol; j++) {
      let col = document.createElement('div');
      col.style.width = `${(gridSizeRow / 0.50) + offSet}px`;
      col.className = `m-0 p-0 border border-muted align-items-center`;
      row.appendChild(col);
      col.addEventListener('click', () => {
        col.style.backgroundColor = 'red';
      })
    }



    container.appendChild(row);
    let rowWidth = row.style;
    console.log(rowWidth);
    console.log('size: ', rowWidth.cssText);
    // constainer.appendChild(gridContainer);
    colorPalette();
  }
  console.log(container);

  function colorPalette() {
    let clrPlt = document.querySelector('.colorPalette');
    let clrDivQty = 2;
    let colors = ['red', 'blue'];

    for (let i = 0; i < clrDivQty; i++) {
      let div = createElement('div');
      div.style.backgroundColor = `${colors[i]}`;
      clrPlt.appendChild(div);
    }
  }

})
