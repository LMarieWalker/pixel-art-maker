document.addEventListener('DOMContentLoaded', () => {

  function somethint() {
    return somethinelse;
  }



  const main = (createRows, createCol, colorPalette) => {
    api = {
      gridContainer: document.querySelector('.gridContainer'),
      clrPlt: document.querySelector('.colorPalette'),
      gridSizeRow: 10,
      gridSizeCol: 10,
      rowHeight: 30,
      colWidth: 30,
      colors: ['red', 'blue', 'orange', 'yellow', 'green', 'purple', 'brown', 'gray', 'black', 'white'],
      clrPltSize: 20,
      currentBrushColor: 'black',
    }

    console.log(api.gridContainer);

    createRows(api, createCol);
    console.log('canvas created: ', api.gridContainer);
    colorPalette(api);
    console.log('color palette created: ', api.clrPlt);
  }

  const createRows = (api, createCol) => {
    for(let i = 0; i < api.gridSizeRow; i++) {
      let row = document.createElement('div');
      row.style.height = `${api.rowHeight}px`;
      row.className = 'row justify-content-center';

      createCol(api, row);
      api.gridContainer.appendChild(row);
      console.log('done with createrows');
    }
  }

  const createCol = (api, row) => {
    for(let j = 0; j < api.gridSizeCol; j++) {
      let col = document.createElement('div');
      col.style.width = `${api.colWidth}px`;
      col.className = `m-0 p-0 border border-danger align-items-center`;
      row.appendChild(col);

      col.addEventListener('click', () => {
        console.log('cell clicked... color changed to red');
        col.style.backgroundColor = 'red';
      })
      console.log('event listner waiting for click on cell');

    }
    console.log('done with create col... returning rows now');
    return row;
  }

  const colorPalette = (api) => {

    for (let i = 0; i < api.colors.length; i++) {
      let div = document.createElement('div');
      div.style.width = `${api.clrPltSize}px`;
      div.style.height = `${api.clrPltSize}px`;
      div.style.backgroundColor = `${api.colors[i]}`;
      api.clrPlt.appendChild(div);
      console.log('new color added to color palette');

      div.addEventListener('click', () => {
        console.log(`color ${div.style.backgroundColor} has been selected... and saved to brush`);
        api.currentBrushColor = div.style.backgroundColor;
        console.log('brush color: ', api.currentBrushColor);
      })
    }
  }

  main(createRows, createCol, colorPalette);





})
