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

    let ticketPriceFixed = ticketPrice.toFixed(2);

    console.log(ticketPrice);
    console.log(ticketPriceFixed);

// Creo le Variabili che mi calcolano lo sconto

    // Sconto Under 18

        let ticketPriceUnder = ticketPriceFixed * 0.8;
        let ticketPriceFixedUnder = ticketPriceUnder.toFixed(2);

        //  Converto il typeof della Variabile ticketPriceFiedUnder

        ticketPriceFixedUnderValue = parseInt(ticketPriceFixedUnder);

        console.log('ticketPriceFixedUnder', ticketPriceFixedUnder, typeof ticketPriceFixedUnder);
        console.log('ticketPriceFixedUnderValue', ticketPriceFixedUnderValue, typeof ticketPriceFixedUnderValue);

    // Sconto Over 65

        let ticketPriceOver = ticketPriceFixed * 0.6;
        let ticketPriceFixedOver = ticketPriceOver.toFixed(2);

        //  Converto il typeof della Variabile ticketPriceFiedOver

        ticketPriceFixedOverValue = parseInt(ticketPriceFixedOver);

        console.log('ticketPriceFixedOver', ticketPriceFixedOver, typeof ticketPriceFixedOver);
        console.log('ticketPriceFixedOverValue', ticketPriceFixedOverValue, typeof ticketPriceFixedOverValue);

});

/*


    const ageInput = document.getElementById('age');
    
    console.log('ageInput', ageInput, typeof ageInput);

*/