/* 
9. Crie um programa que armazene seu nome em uma constante, e escreva ele de trás para frente.
*/

function nomeAoContrario (nome){
    var a = nome.split('').reverse().join('')
    console.log(a)
}

nomeAoContrario('amanda')