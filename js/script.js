document.addEventListener('DOMContentLoaded', function (){

    // genero un numero random da pushare in una array vuota:
    numeriRandom = [];
    // si genera i 5 numeri random da inserire della array:
    for (var x = 0; numeriRandom.length<5; x++) {
        // creazione della variabile per il random:
        var randomNumber = parseInt(Math.floor(Math.random() * 6) +1 );
        // Se il numero è già presente nella array non la inserisce
        while (numeriRandom.length < 5){
            if (!numeriRandom.includes(randomNumber)) {
                numeriRandom.push(randomNumber);
            }else{
                break;
            }
        }
    }
    alert(numeriRandom);
    
        
    




    







});