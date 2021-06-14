document.addEventListener('DOMContentLoaded', function () {

    // genero un numero random da pushare in una array vuota:
    var numeriRandom = [];
    var numeriUser = [];
    var rightNumber = [];
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
    alert('Memorizza questi 5 numeri' + ' ' + numeriRandom);

    /* Ora si crea il timer, che deve durare 30 secondi per poi far sparire l'alert
    quindi anche l'alert deve stare dentro al conto del tempo.
    */
    // Userò il setTimeout perchè e qualcosa che succede dopo un tot di tempo e non
    // che deve succeder per un tot di volte dopo un tot di tempo

    setTimeout(function(){
        while (numeriUser.length < 5) {
            var userNumber = parseInt(prompt('Inserisci i 5 numeri'));
            numeriUser.push(numeriUser);
            if (numeriRandom.includes(userNumber)) {
                rightNumber.push(userNumber);
            }
        }
        console.log('hai indovinato: ' + rightNumber + 'In totale quindi: ' +  ' ' + rightNumber.length);
    },1000);


    // var boxScomparsa = document.querySelector('.start');
    // setTimeout(function () {
    //     boxScomparsa.parentNode.removeChild(boxScomparsa);
    // }, 30000);



});