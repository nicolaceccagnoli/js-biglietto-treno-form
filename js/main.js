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

    const kmInputValue = parseInt(kmInput.value);


    console.log('kmInput', kmInput, typeof kmInput);
    console.log('kmInputValue', kmInputValue , typeof kmInputValue);

// BONUS : Chiedo all'utente Il Nome e il Cognome

    let passengerName = document.getElementById('name').value;
    console.log('passengerName',passengerName, typeof passengerName);

// BONUS : Stampo il Nome del Passeggero sul biglietto

    document.getElementById('passenger-name').innerHTML = passengerName;


// 2) Chiedi all' Utente l'età

    // const ageInput = document.querySelector('#age');

//  Converto il typeof dell'input age

    // ageInputValue = parseInt(ageInput.value);

    // console.log('age', age, typeof age);
    // console.log('ageInputValue', ageInputValue, typeof ageInputValue);

// Chiedo all'utente di inserire un valore nella Select del Form

    let myAgeRange = document.querySelector('#age-range').value;
    console.log('myAgeRange', myAgeRange, typeof myAgeRange);

// BONUS : Imposto Variabile per il tipo di Biglietto da inserire sulla stampa 

    let ticketOffer = document.querySelector('#offer-name');
    console.log('ticketOffer', ticketOffer, typeof ticketOffer);

// BONUS : Imposto Variabile per estrarre Casualmente il numero della cabina

    let myCab = document.querySelector('#my-cab');
    console.log('myCab', myCab, typeof myCab);

// BONUS : Imposto Variabile per estrarre casualmente il codice CP

    let myCode = document.querySelector('#my-code');

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

// Creo la Variabile che selezionerà la classe "my-ticekt" dall'HTML

    const myTicket = document.querySelector('.my-ticket');

// 3) Applica lo sconto in base all'età del passeggero

    if (myAgeRange === 'under' ) {

        // Stampo il Biglietto Under in pagina

        myTicket.innerHTML = ticketPriceUnderValue.toFixed(2) + ' €';
        console.log(ticketPriceUnderValue.toFixed(2));

        // Stampo il tipo di biglietto
        
        ticketOffer.innerHTML = 'Biglietto Under';

        // Estraggo casualmente il numero della cabina

        myCab.innerHTML = Math.floor(Math.random() * 20);

        // Estraggo casualmente il codice CP

        myCode.innerHTML = Math.floor(Math.random(1000) * 9999);

        // Una volta calcolato il prezzo del Biglietto, allora resetto i valori del Form

        kmInput.value = 'Inserisci i km...';
        document.querySelector('#age-range').value = '';       
        // ageInput.value = 'Inserisci la tua età...'

    } else if (myAgeRange === 'elderly' ) {

        //  Stampo il Biglietto Over in pagina

        myTicket.innerHTML = ticketPriceOverValue.toFixed(2) + ' €';
        console.log(ticketPriceOverValue.toFixed(2));

        // Stampo il tipo di biglietto

        ticketOffer.innerHTML = 'Biglietto Over';

        // Estraggo casualmente il numero della cabina

        myCab.innerHTML = Math.floor(Math.random(1) * 20);

        // Estraggo casualmente il codice CP

        myCode.innerHTML = Math.floor(Math.random(1000) * 9999);

        // Una volta calcolato il prezzo del Biglietto, allora resetto i valori del Form

        kmInput.value = 'Inserisci i km...';
        document.querySelector('#age-range').value = '';       
        // ageInput.value = 'Inserisci la tua età...'

    } else {

        // Stampa il Biglietto Standard in pagina

        myTicket.innerHTML = ticketPrice.toFixed(2) + ' €';
        console.log(ticketPrice.toFixed(2));

        // Stampo il tipo di biglietto
        
        ticketOffer.innerHTML = 'Biglietto Standard';

        // Estraggo casualmente il numero della cabina

        myCab.innerHTML = Math.floor(Math.random() * 20);

        // Estraggo casualmente il codice CP

        myCode.innerHTML = Math.floor(Math.random(1000) * 9999);

        // Una volta calcolato il prezzo del Biglietto, allora resetto i valori del Form

        kmInput.value = 'Inserisci i km...';
        document.querySelector('#age-range').value = '';       
        // ageInput.value = 'Inserisci la tua età...'

    }



});
