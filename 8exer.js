/* 
8. Crie uma função que receba 2 números inteiros como parâmetros, e retorne o maior valor entre eles.
*/

function maiorNumero(num1,num2){
  if (num1 > num2){
      console.log(`O número ${num1} é maior que o número ${num2}`)
  }else if(num1 === num2){
    console.log(`O número ${num1} é igual ao número ${num2}`)
  }else{
    console.log(`O número ${num2} é maior que o número ${num1}`)   
  }
}

maiorNumero(78,560)