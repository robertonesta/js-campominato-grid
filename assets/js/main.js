// Creo una variabile dove salvo il container delle 64 celle (container-grid)

const container = document.querySelector(".container");
// creo una variabile dove seleziono la difficoltà e la collego al DOM

const difficultyEL = document.querySelector(".difficulty");
// seleziono il tasto play e lo collego al DOM

const playEl = document.getElementById("#play")

//event listener sul tasto play

playEl.addEventListener('click', function(){
    //scelgo numero di celle
    const cellsNumber = setCellsNumber(difficultyEL)

    //creo la griglia
    grid = (cellsNumber, difficultyEL)

    //ho le celle inserite
    const cellEl = document.querySelectorAll(".cell")
    //cambiare colore delle celle in modalità nuova partita
    selectedCell(cellEl)
})
// creo un max numero di celle
let nMax = 100;

// creo un ciclo n volte per le celle (dove n in questo caso sta per 64)

for (let i = 1; i <= nMax; i++) {
  const cell = `<div class="cell">${i}</div>`;
  container.innerHTML += cell;
}




// aggiungo eventlistener per la classe active ciclando per la lunghezza dell'array cellEl

function selectedCell(cellEl) {
    for (let i = 0; i < cellEl.length; i++) {
        const thisCell = cellEl[i];
        console.log(thisCell)
        thisCell.addEventListener("click", function() {
            thisCell.classList.add("bg_selected")
            // this.classList.add("active")
            console.log("Changed the color")
        })
    }

}
