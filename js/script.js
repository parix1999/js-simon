document.addEventListener('DOMContentLoaded', function (){

    // genero un numero random da pushare in una array vuota:
    numeriRandom = [];
    // mi deve creare per 5 volte dei numeri random per poi pushare o meno
    for (var i = 1; i <=5; i++) {
        var num = parseInt(Math.floor(Math.random() * 6) + 1);
        numeriRandom.push(num);
    }
    console.log(numeriRandom); 



    







});