/* 
10. Crie uma função que receba um valor numérico como parâmetro, e faça as seguintes comparações:
Se o valor de entrada for divisível por 3, então escreva "Fizz" no console.
Se o valor de entrada for divisível por 5, então escreva "Buzz" no console.
Se o valor de entrada for divisível por 3 e 5, então escreva "FizzBuzz" no console.
Se o valor de entrada não for divisível por 3 ou 5, escreva apenas o número no console.

Dica: Qualquer número divisível por 3 ou 5, tem o resto da divisão igual a zero.
*/

function divisivel (num){
    if(num % 3 == 0 && num % 5 !== 0){
        console.log(`O número ${num} é divisível por 3`)
        console.log('Fizz')
    }else if(num % 5 == 0 && num % 3 !== 0){
        console.log(`O número ${num} é divisível por 5`)
        console.log('Buzz')
    }else if(num % 3 == 0 && num % 5 == 0){
        console.log(`O número ${num} é divisível por 3 e por 5`)
        console.log('FizzBuzz')
    }else {
        console.log(num)
    }
}

divisivel(17)