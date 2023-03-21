//funzione per generare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//funzione play
function startGame(){
    numsBox.innerHTML = "";
    endGameBox.innerHTML = "";
    for (let i = 0; i < numsToGenerate ; i++){
        const num = getRndInteger(1,10);
        numsBox.innerHTML += `<div class="col">
        <div class="card d-flex justify-content-center align-items-center fs-1">${num}</div>
        </div>`;
        numbers.push(num);
    }
    setTimeout(hideNumbers, 2000);
}

//funzione per cancellare i numeri e far apparire gli input
function hideNumbers(){
    numsBox.innerHTML = "";
    resultBox.classList.remove('opacity-0');
}

function checkResult(){
    resultBox.classList.add('opacity-0');
    const textBox = document.querySelector('input[type=text]');
    let resultValue = textBox.value;
    let resultArray = resultValue.split(" ");
    for (let i = 0; i < resultArray.length; i++){
        if (resultArray[i].includes(numbers[i])){
            endGameBox.innerHTML = `<h2 class="text-success">Complimenti, hai vinto! Hai una buona memoria!</h2>`;
        }
        else{
            endGameBox.innerHTML = `<h2 class="text-danger">Mi dispiace, ma i numeri che hai inserito non sono gli stessi</h2>`;
        }
    }
    numbers = [];
}
