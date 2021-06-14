document.addEventListener('DOMContentLoaded', function (){

    // Funzione per generare numeri random:
    function randomNumber(min, max) {    
        return Math.floor(Math.random() * (max - min +1) - min);
    }
    console.log(randomNumber(1,50));
    // inserisco in una variabile il random number cosi da poterlo utilizzare:
    var casualNumber = randomNumber(1, 50);

    // Array vuota dove poi pushero i numeri generati casualmente dalla funzione
    var numbers = [];
    // Devo pushare dentro alla array i numeri con un ciclo:
    while (numbers < 5) {
        // se i numeri non sono presenti nell'array allora pusha sennò no:
        if (!numbers.includes(casualNumber)) {
            numbers.push(casualNumber);
        }
    }
    console.log(numbers);







});