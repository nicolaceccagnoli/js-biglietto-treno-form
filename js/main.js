/* 

1) Chiedi all' Utente il numero di chilometri da percorrere
2) Chiedi all' Utente l'età
3) Applica lo sconto in base all'età del passeggero
4) Stampo il risultato in pagina

*/

// Seleziono il Bottone dall' HTML

const myButton = document.querySelector('#special-button');

// Creo la Variabile che conterà il numero dei 'click' sul bottone del mio Form

let counter = 0;

// Imposto l'evento che viene scatenato dal 'click' su "myButton"  

myButton.addEventListener('click', function() {


//  Verifico che l'evento venga richiamato correttamente

    counter += 1;

    console.log('Hai inviato il Form ' + counter + ' volte');

// 1) Chiedi all' Utente il numero di chilometri da percorrere

    const kmInput = document.querySelector('#km');

//  Converto il typeof dell'input km

    kmInputValue = parseInt(kmInput.value);


    console.log('kmInput', kmInput, typeof kmInput);
    console.log('kmInputValue', kmInputValue , typeof kmInputValue);

// 2) Chiedi all' Utente l'età

    const ageInput = document.querySelector('#age');

//  Converto il typeof dell'input age

    ageInputValue = parseInt(ageInput.value);

    console.log('age', age, typeof age);
    console.log('ageInputValue', ageInputValue, typeof ageInputValue);

});

/*


    const ageInput = document.getElementById('age');
    
    console.log('ageInput', ageInput, typeof ageInput);

*/