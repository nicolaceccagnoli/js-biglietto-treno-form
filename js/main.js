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

    const kmInput = document.getElementById('km');

    console.log('kmInput', kmInput, typeof kmInput);
    console.log('kmInput.value', kmInput.value , typeof kmInput.value);

});

/*


    const ageInput = document.getElementById('age');
    
    console.log('ageInput', ageInput, typeof ageInput);

*/