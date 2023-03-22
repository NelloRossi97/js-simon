//funzione per generare un numero random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

//funzione play
function startGame(){
    numsBox.innerHTML = "";
    endGameBox.innerHTML = "";
    textBox = "";
    for (let i = 0; i < numsToGenerate ; i++){
        const num = getRndInteger(1,10);
        numsBox.innerHTML += `<div class="col">
        <div class="card d-flex justify-content-center align-items-center fs-1 text-black">${num}</div>
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
    let guessedNumbers = [];
    const textBox = document.querySelector('input[type=text]');
    let resultValue = textBox.value;
    let resultArray = resultValue.split(" ");
    for (let i = 0; i < resultArray.length; i++){
        if (numbers.includes(parseInt(resultArray[i]))){
            guessedNumbers.push(resultArray[i]);
        }
    }
    console.log(guessedNumbers, 'ciao');
    if(guessedNumbers.length === numbers.length){
        endGameBox.innerHTML = `<h2 class="text-success text-center">Complimenti, hai vinto! Hai indovinato tutti i numeri!</h2>`
    } else{
        endGameBox.innerHTML = `
        <h2 class="text-danger text-center">Mi dispiace, ma i numeri che hai inserito non sono gli stessi</h2>
        <h3 class="text-center"> I numeri generati erano: ${numbers} e tu hai inserito: ${resultArray}. Il tuo punteggio, quindi è: ${guessedNumbers.length}`;
    }
    numbers = [];
}
