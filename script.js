document.addEventListener('DOMContentLoaded', () => {
  
  const main = (createRows, createCol, colorPalette, brushColor, removeOldColor) => {
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

    createRows(api, createCol);

    colorPalette(api, brushColor, removeOldColor);
  }

  const createRows = (api, createCol) => {
    for(let i = 0; i < api.gridSizeRow; i++) {
      let row = document.createElement('div');
      row.style.height = `${api.rowHeight}px`;
      row.className = 'row justify-content-center';

      createCol(api, row);
      api.gridContainer.appendChild(row);
    }
  }

  const createCol = (api, row) => {
    for(let j = 0; j < api.gridSizeCol; j++) {
      let col = document.createElement('div');
      col.style.width = `${api.colWidth}px`;
      col.className = `m-0 p-0 border border-danger align-items-center`;
      row.appendChild(col);

      col.addEventListener('click', () => {
        col.style.backgroundColor = 'red';
      })

    }
    return row;
  }

  const colorPalette = (api, brushColor, removeOldColor) => {

    for (let i = 0; i < api.colors.length; i++) {
      let color = document.createElement('div');
      color.style.width = `${api.clrPltSize}px`;
      color.style.height = `${api.clrPltSize}px`;
      color.style.backgroundColor = `${api.colors[i]}`;
      api.clrPlt.appendChild(color);

      color.addEventListener('click', () => {
        api.currentBrushColor = color.style.backgroundColor;

        brushColor(api, removeOldColor);

      })
    }
  }

  const brushColor = (api, removeOldColor) => {
    let setColor = document.createElement('div');
    setColor.style.width = `${api.clrPltSize * 2}px`;
    setColor.style.height = `${api.clrPltSize * 2}px`;
    setColor.className = 'brushColorIndicator';
    setColor.style.backgroundColor = `${api.currentBrushColor}`;

    removeOldColor(api);

    api.clrPlt.appendChild(setColor);
  }

  const removeOldColor = (api) => {
    let oldColor = document.querySelector('.brushColorIndicator')
    oldColor.parentNode.removeChild(oldColor);
  }

  main(createRows, createCol, colorPalette, brushColor, removeOldColor);





})
