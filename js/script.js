document.addEventListener('DOMContentLoaded', function () {

    // genero un numero random da pushare in una array vuota:
    numeriRandom = [];
    // si genera i 5 numeri random da inserire della array:
    // creazione della variabile per il random e
    // Se il numero è già presente nella array non la inserisce
    while (numeriRandom.length < 5) {
        var randomNumber = parseInt(Math.floor(Math.random() * 100));
        if (!numeriRandom.includes(randomNumber)) {
            numeriRandom.push(randomNumber);
        }
    }

    var output = document.querySelector('.numbers');
    output.innerHTML = numeriRandom;

    /* Ora si crea il timer, che deve durare 30 secondi per poi far sparire l'alert
    quindi anche l'alert deve stare dentro al conto del tempo.
    */
    // Userò il setTimeout perchè e qualcosa che succede dopo un tot di tempo e non
    // che deve succeder per un tot di volte dopo un tot di tempo

    var boxScomparsa = document.querySelector('.start');
    setTimeout(function () {
        boxScomparsa.parentNode.removeChild(boxScomparsa);
    }, 30000);
















});