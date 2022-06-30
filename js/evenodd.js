let userChoice = prompt('Pari o dispari?').trim().toLowerCase();
while(userChoice !== 'pari' && userChoice !== 'dispari') {
    userChoice = prompt('Pari o dispari?').trim().toLowerCase();
}

let userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
while(isNaN(userNumber || userNumber < 1 || userNumber > 5)) {
    userNumber = parseInt(prompt('Scegli un numero da 1 a 5'));
}

function getRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;

    return randomNumber;
}

const pcNumber = getRandomNumber(1, 5);

console.log(pcNumber);

let sum = userNumber + pcNumber;

console.log(sum);

function isEven(number) {
    let result;

    if(number % 2 === 0) {
        result = true;
    } else {
        result = false;
    }
    return result;
}

isEven(sum);

console.log(sum);

if((isEven(sum) && userChoice === 'pari') || (!isEven(sum) && userChoice === 'dispari')) {
    console.log('Hai vinto')
} else {
    console.log('Hai perso')
}


