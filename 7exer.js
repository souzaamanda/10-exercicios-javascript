/* 
7. Crie um programa que identifique se uma pessoa é maior ou menor de idade
*/

function maiorIdade (idade){
    if(idade >= 18){
        console.log(`A pessoa com ${idade} é maior de idade`)
    }else{
        console.log(`A pessoa com ${idade} é menor de idade`)
    }
}

maiorIdade(20)
maiorIdade(11)