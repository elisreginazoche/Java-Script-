//______________________FizzBuzz____________________//
//Compara algum valor e retorna de acordo com o que tem na entrada
//Se o valor é divisivel por 3 retorna Fizz
//Se o valor é divisivel por 5 retorna Buzz
//Se o valor é divisivel por 3 e 5 retorna FizzBuzz
//Se o valor NÃO É divisivel por 3 e 5 retorna entrada;
//Se o valor não é um numero, retorna a frase "não é um numero"


function FizzBuzz(valor) {
  console.log(valor)
  if (valor % 3 === 0 && valor % 5 !== 0) {
    console.log('Fizz');
  }
  else if (valor % 5 === 0 && valor % 3 !== 0) {
    console.log('Buzz');
  }
  else if (valor % 5 === 0 && valor % 3 === 0) {
    console.log('FizzBuzz');
  }

  else if (valor % 5 !== 0 && valor % 3 !== 0 && typeof valor === Number) {
    console.log(valor);
  }

  else {
    console.log('Não é um número');
  }
}

//teste: 
console.log(FizzBuzz(3));
console.log(FizzBuzz(5));
console.log(FizzBuzz(15));
console.log(FizzBuzz(12));
console.log(FizzBuzz('A'));