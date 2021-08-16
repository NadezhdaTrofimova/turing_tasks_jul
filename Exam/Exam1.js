const button = document.querySelector('.button');

button.onclick = function() {
    const row = document.querySelectorAll('.row');

    const dupthead = document.querySelector('th');
    const thheadLast = document.querySelector('th:nth-child(5)');
    let cloneThead =  dupthead.cloneNode(false);
    row[0].insertBefore(cloneThead, thheadLast)
    cloneThead.textContent = "Новый столбец";

    const dupColumn = document.querySelectorAll("td:nth-child(1)");
    const lastColumn = document.querySelectorAll("td:nth-child(5)");


    for (let i = 0; i < dupColumn.length; i++) {
        let cloneCell = dupColumn[i].cloneNode(true);
        row[i + 1].insertBefore(cloneCell, lastColumn[i]);
        cloneCell.textContent = 'какой-то текст';
    }
}


const buttonRow = document.querySelector('.button-row');

buttonRow.onclick = function() {
    const lastRow = document.querySelector("tbody > tr:last-child");
    const cloneRow = lastRow.cloneNode(true);

    const childArr = cloneRow.children;
    const firstColumnInput = childArr[0].querySelector('.table_cell_fill');
    firstColumnInput.setAttribute('value', '')
    firstColumnInput.removeAttribute('readonly');

    document.querySelector('.table').appendChild(cloneRow);

}
