// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


let numeri = [];

// creazione di 5 numeri casuali
while (numeri.length < 5) {
    
    let numeriCasuali = Math.floor(Math.random() * 100) + 1;

    // se i numeri casuali sono inclusi nell'array allora inserisci nell'html
    if (!numeri.includes(numeriCasuali)) {
        numeri.push(numeriCasuali);
    }
}




// inserisco in una variabile i contenitori per numeri e risultato

const numeriContainer = document.getElementById('container-game');
const numeriRicordati = document.getElementById('numeri-ricordati');

// stampo i numeri casuali 
numeri.forEach(element => numeriContainer.innerHTML += `<span class="numeri">${element}</span>`);

// funzione per l'avvio del gioco
function simonGame() {
    // array numeri utente
    let arrayUtente = [];
    
    
    // nascondo i numeri generati dal pc 
    numeriContainer.classList.add('hidden');
    // faccio apparire il contenitore del risultato 
    numeriRicordati.classList.remove('hidden');


    // faccio inserire all'utente 5 numeri tramite un promt
    for (let i = 0; i < 5; i++) {
        let numeriUtente = parseInt(prompt('Inserisci un numero che ricordi.'));
        // se il numero è ugule ad uno di quelli generati lo salvo
        if (numeri.includes(numeriUtente)) {
            arrayUtente.push(numeriUtente);
        }
    }
    

    // stampo i numeri ricordati dall'utente
    if (arrayUtente == '') {
        // genero un titolo per il risultato
        numeriRicordati.innerHTML = `<h3>Non hai indovinato nessun numero!</h3>`;
    } else {
        // genero il contenitore per inserire i numeri ricordati dall'utente
        arrayUtente.forEach(element => numeriRicordati.innerHTML += `<span class="numeri">${element}</span>`);
    }

}

// imposto il tempo da aspettare per avviare la funzione
setTimeout(simonGame, 30000);