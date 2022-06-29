// * Palindroma

const userAnswer = prompt('Inserisci una parola');

function isPalindrome(word){
    let result = '';

    for (let i = word.length - 1; i>= 0; i--) {
        result += word[i];

    }
    if ( word === result) {
        console.log('La parola è palindroma')
    } else console.log ('La parola non è palindroma')
}

isPalindrome(userAnswer)


