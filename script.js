document.addEventListener('DOMContentLoaded', () => {

  const main = (createRows, createCol, colorPalette, brushColor, removeOldColor) => {
    api = {
      gridContainer: document.querySelector('.gridContainer'),
      clrPlt: document.querySelector('.colorPalette'),
      brush: null,
      // TODO: add user input for canvas grid size
      gridSizeRow: 40,
      gridSizeCol: 65,
      rowHeight: 15,
      colWidth: 15,
      // TODO: add a function which fetches colors from this api https://www.thecolorapi.com/docs#colors-color-identification-get
      colors: ['red', 'blue', 'orange', '\#ccee66', 'yellow', 'green', 'purple', 'brown', 'gray', 'black', 'white'],
      clrPltSize: 50,
      currentBrushColor: 'black'
    };

    createRows(api, createCol);
    colorPalette(api, brushColor, removeOldColor);
    brushColor(api, removeOldColor);
  }

  const createRows = (api, createCol) => {
    for(let i = 0; i < api.gridSizeRow; i++) {
      let row = document.createElement('div');
      row.style.height = `${api.rowHeight}px`;
      row.className = 'row justify-content-center';

      createCol(api, row);
      api.gridContainer.appendChild(row);
    }
  };

  const createCol = (api, row) => {
    for(let j = 0; j < api.gridSizeCol; j++) {
      let col = document.createElement('div');
      col.style.width = `${api.colWidth}px`;
      col.className = `m-0 p-0 border border-mated align-items-center`;
      row.appendChild(col);

      col.addEventListener('click', () => {
        col.style.backgroundColor = api.currentBrushColor;
      });
    }
    return row;
  };

  const colorPalette = (api, brushColor, removeOldColor) => {

    for (let i = 0; i < api.colors.length; i++) {
      let color = document.createElement('div');
      color.style.width = `${api.clrPltSize}px`;
      color.style.height = `${api.clrPltSize}px`;
      color.style.backgroundColor = `${api.colors[i]}`;
      color.style.borderRadius = `${api.clrPltSize}px`;
      color.style.margin = '10px';
      api.clrPlt.appendChild(color);

      color.addEventListener('click', () => {
        api.currentBrushColor = color.style.backgroundColor;
        brushColor(api, removeOldColor);
      });
    }
  };

  const brushColor = (api, removeOldColor) => {
    // TODO: get rid of the pill and change the text color instead
    let setColor = document.createElement('div');
    setColor.style.width = `${api.clrPltSize * 4}px`;
    setColor.style.height = `${api.clrPltSize}px`;
    setColor.className = 'brushColorIndicator rounded-pill';
    setColor.style.backgroundColor = `${api.currentBrushColor}`;

    removeOldColor(api);
    api.brush = api.clrPlt.nextSibling.nextElementSibling;
    api.brush.appendChild(setColor);
  };

  const removeOldColor = (api) => {
    let oldColor = document.querySelector('.brushColorIndicator')
    oldColor.parentNode.removeChild(oldColor);
  };

  main(createRows, createCol, colorPalette, brushColor, removeOldColor);
});
