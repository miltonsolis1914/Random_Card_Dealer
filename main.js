
window.onload = function() {

let pinta = ['♠' , '♣' , '♥' , '♦'];
let numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
let color = ['red', 'black'];

var rdm_pinta = Math.floor((Math.random() * pinta.length));
var numero = Math.floor(( Math.random() * numeros.length));
var colores = Math.floor((Math.random() * color.length));

document.querySelector('#superior').innerHTML = '<p style=color: '+color[colores]+' id='+'arriba'+'>'+pinta[rdm_pinta]+ '</p>' ;
document.querySelector('#centro').innerHTML = '<p id='+'centro'+'>'+numeros[numero]+'</p>' ;
document.querySelector('#inferior').innerHTML = '<p style=color: '+color[colores]+' id='+'abajo'+'>'+pinta[rdm_pinta]+ '</p>' ;
    
}

// function randomSuits() {
//     let su = suits[Math.floor(Math.random() * suits.length)];
//     return su;
// }

// function numbersRandom() {
//     let numb = numbers[Math.floor(Math.random () * numbers.length)];
//     return numb;
// }

// let resul = randomSuits();

// // top.innerHTML = result;
// center.innetHTML = numbersRandom();
// bottom.innerHTML = resul;