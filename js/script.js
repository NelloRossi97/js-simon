/* 
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

`<div class="col">
<div class="card d-flex justify-content-center align-items-center fs-1">ciao</div>
</div>`

*/

const numsBox = document.querySelector('.row');
const numsToGenerate = 5;
const start = document.querySelector('.btn-primary');
start.addEventListener('click', startGame);
const resultBox = document.querySelector('.result');
const controlBtn = document.querySelector('.btn-warning');
controlBtn.addEventListener('click', checkResult);
const numbers = [];