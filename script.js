document.addEventListener('DOMContentLoaded', () => {

  function somethint() {
    return somethinelse;
  }



  const main = (createRows, createCol, colorPalette) => {
    api = {
      gridContainer: document.querySelector('.gridContainer'),
      clrPlt: document.querySelector('.colorPalette'),
      gridSizeRow: 2,
      gridSizeCol: 2,
      rowHeight: 100,
      colWidth: 100,
      clrDivQty: 2,
      colors: ['red', 'blue'],
      clrPltSize: 20
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

    for (let i = 0; i < api.clrDivQty; i++) {
      let div = document.createElement('div');
      console.log(`${api.colors[i]}`);
      div.style.width = `${api.clrPltSize}px`;
      div.style.height = `${api.clrPltSize}px`;
      div.style.backgroundColor = `${api.colors[i]}`;
      api.clrPlt.appendChild(div);
    }
  }

  main(createRows, createCol, colorPalette);





  //   let rowWidth = row.style;
  //   console.log(rowWidth);
  //   console.log('size: ', rowWidth.cssText);
  //
  //   colorPalette();
  // }
  // console.log(container);



})
