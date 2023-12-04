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

// Creo la Variabile che mi calcola il prezzo del Biglietto

    let ticketPrice = kmInputValue * 0.21;

// Converto il prezzo del Biglietto in numeri Umane

    console.log(ticketPrice);

// Creo le Variabili che mi calcolano lo sconto

    // Sconto Under 18

        let ticketPriceUnder = ticketPrice * 0.8;

        //  Converto il typeof della Variabile ticketPriceFiedUnder

        ticketPriceUnderValue = (+ticketPriceUnder);

        console.log('ticketPriceUnder', ticketPriceUnder, typeof ticketPriceUnder);
        console.log('ticketPriceUnderValue', ticketPriceUnderValue, typeof ticketPriceUnderValue);

    // Sconto Over 65

        let ticketPriceOver = ticketPrice * 0.6;

        //  Converto il typeof della Variabile ticketPriceFiedOver

        ticketPriceOverValue = (+ticketPriceOver);

        console.log('ticketPriceOver', ticketPriceOver, typeof ticketPriceOver);
        console.log('ticketPriceOverValue', ticketPriceOverValue, typeof ticketPriceOverValue);


// 3) Applica lo sconto in base all'età del passeggero

    if(ageInputValue < 18) {

        // Stampo il Biglietto Under in pagina

        document.querySelector('.my-ticket').innerHTML = ticketPriceUnderValue.toFixed(2) + ' €';
        console.log(ticketPriceUnderValue.toFixed(2));

    } else if (ageInputValue > 65) {

        //  Stampo il Biglietto Over in pagina

        document.querySelector('.my-ticket').innerHTML = ticketPriceOverValue.toFixed(2) + ' €';
        console.log(ticketPriceOverValue.toFixed(2));

    } else {

        // Stampa il Biglietto Standard in pagina

        document.querySelector('.my-ticket').innerHTML = ticketPrice.toFixed(2) + ' €';
        console.log(ticketPrice.toFixed(2));

    }

});

/*


    const ageInput = document.getElementById('age');
    
    console.log('ageInput', ageInput, typeof ageInput);

*/