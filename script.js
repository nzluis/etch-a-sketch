const newGrid = document.querySelector('.grid');
const button = document.querySelector("button");

const cell = function (number) {
    for(let i=0; i < number; i++){
    let newCell = document.createElement('div');
    newCell.classList.add('cell');
    newGrid.appendChild(newCell);
    }
}

function chooseGrid() {
    let chooseNum = prompt('Choose a size for grid between 8 & 100', 40);
    if (chooseNum >= 8 && chooseNum <=100){
        grid(chooseNum,chooseNum);
    } else {
        do {
            chooseNum = prompt('Invalid size, please between 8 & 100',40);
        } 
        while (chooseNum < 8 || chooseNum > 100);
        grid(chooseNum,chooseNum);   
    }   
}

const grid = function (row,col) {
    newGrid.style.setProperty('--rows', row);
    newGrid.style.setProperty('--columns',col);
    for(let j=0; j < row; j++) {
        cell(col);
    }
}

newGrid.addEventListener('mouseover', (e) => {
    target = e.target;
    if (target.matches('.cell')){
        target.classList.add('coloured');
    }
});

button.addEventListener('click', () => window.location.reload());

chooseGrid();


