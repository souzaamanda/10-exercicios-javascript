/* 
6. Crie um programa que identifique se um número é par ou ímpar
*/

function parOuImpar(num){
    if (num%2 === 0){
        console.log(`O número ${num} é Par`)
    }else {
        console.log(`O número ${num} é Impar`) 
    }
}

parOuImpar(7)
parOuImpar(10)