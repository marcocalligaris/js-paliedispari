// ?1 - Come la chiamo?
// ?2 - Ho bisogno di parametri? (se si quali?)
// ?3 - Devo restituire qualcosa? (se si cosa? di che tipo?)
// ?4 OPZIONALE:  Qualcosa  potrebbe andare storto? (se si, cosa?)

// Palindroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// * Palindroma

const userAnswer = prompt('Inserisci una parola');

function isPalindrome(){
    let result = '';

    for (let i = userAnswer.length - 1; i>= 0; i--) {
        result += userAnswer[i];

        if ( userAnswer === result) {
            console.log('La parola è palindroma')
        }
    } console.log ('La parola non è palindroma')
}




