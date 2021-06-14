document.addEventListener('DOMContentLoaded', function () {
    var user = document.getElementById('nome');
    var userName = prompt('Ciao inserisci il tuo nome');

    user.innerHTML = 'Benvenuto: ' + userName.charAt(0).toUpperCase() + userName.slice(1);

    // genero un numero random da pushare in una array vuota:
    var numeriRandom = [];
    var numeriUser = [];
    var rightNumber = [];
    var startOutput = document.querySelector('.inizio');
    // si genera i 5 numeri random da inserire della array:
    // creazione della variabile per il random e
    // Se il numero è già presente nella array non la inserisce
    while (numeriRandom.length < 5) {
        var randomNumber = parseInt(Math.floor(Math.random() * 100));
        if (!numeriRandom.includes(randomNumber)) {
            numeriRandom.push(randomNumber);
        }
    }
    document.addEventListener('click', function(){
        startOutput.innerHTML = 'Simon Dice questi numeri, memorizzaaaa: <br>' + numeriRandom;
        
    })
    



});

