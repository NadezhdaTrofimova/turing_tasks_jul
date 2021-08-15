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

