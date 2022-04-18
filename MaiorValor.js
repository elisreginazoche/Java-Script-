//1. escreva uma função que usa dois números e retorne o maior entre eles
function maiorValor(valor1, valor2) {
  if (valor1 > valor2) {
    console.log('O maior valor é:', valor1)
  }
  else if (valor2 > valor1) {
    console.log('O maior valor é:', valor2)
  }
  else {
    console.log('Os valores são iguais.')
  }
};

maiorValor(-1, -1)