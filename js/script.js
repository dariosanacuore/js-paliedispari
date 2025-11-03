/**
 * Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma (NON usare split, reverse e join)

Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?
*/




//Palidroma


//Dati da raccogliere

//parola dell'utente

//funzione che verifica che la parola sia una paliandroma o meno
//param:parola da trasformare
//return true or false


function isWordPalidroma(word) {
    let word2 = "";
    let isPalidroma = false;
    word = prompt("Inserisci una parola: ");
    for (let i = word.length - 1; i >= 0; i--) {
        word2 = word2 + word[i];
    }
    if (word === word2) {
        isPalidroma = true;
    }

    if (isPalidroma === true) {
        return "La parola è palidroma"
    } else {
        return "La parola non è palidroma";
    }


}

let result = isWordPalidroma();
console.log(result);






/**
 * Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

 */



function pariDispari(num) {
    let scelta;
    let randomNum;
    scelta = prompt("Decidi se inserire pari o dispari");
    num = parseInt(prompt("Inserisci un numero da 1 a 5: "));
    randomNum = Math.floor(Math.random() * 5) + 1;
    console.log("Hai inserito:", scelta);
    console.log("Computer", randomNum);
    console.log("Utente", num);
    let somma = num + randomNum;
    console.log("Somma:", somma);

    if (somma % 2 === 0) {
        if (scelta === "pari") {
            return "Ha vinto l'utente"
        } else if (scelta === "dispari") {
            return "Ha vinto il computer";
        }
    } else {
        if (scelta === "dispari") {
            return "Ha vinto l'utente"
        }
        else if (scelta === "pari") {
            return "Ha vinto il computer";
        }
    }

}

let result2 = pariDispari();
console.log(result2);






