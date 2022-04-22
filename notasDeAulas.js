console.log('Olá. Este arquivo contém notas de aulas e estudos inicias sobre JavaScript.');


//______________________Variavel______________________________//

let idade = 5;
//print na tela:
console.log(idade);

//Não deve começar nome de variavel com numero, não deve colocar espaços 
//canolCase (1 letra minuscula e seg maiuscula)
//nomeElis
//letras minusculas e maiusculas fazem diferença na declaraçaõ de variavel 

let valorIngressoAdulto = 20;
//Uma vez declarada, para trocar o valor é só atribuir.
valorIngressoAdulto = 30;
console.log(valorIngressoAdulto);


//______________________Constante______________________________//

//se eu declaro que é constante, não posso mais muda-la:
const constante = 20;
console.log(constante);
// constante = 3; *essa linha não pode existir


//______________________Tipos primitivos_________________________//
//São 2: Tipos de referencia e tipos de valores 

//Tipos de referencia: 
let nome = 'Elis'; // String Literal

let idadeMulher = 25; // Number Literal *qualquer valor, inclusive decimal;
let altura = 1.68; //Number Literal: pode ser decimal

let estaAprovado = true; // Boolean

let sobrenome // Undefined

let corSelecionado = null; // Para redefinir um valor, reseta a variavel

//______________________Tipagem dinamica______________________//
//Digitar no console: typeof nome => ele retorna o tipo da variavel nome
//Se eu reescreve a string com um nome, ele atualiza automaticamente o tipo da variavel para number.
//Ele é dinamico, altera automaticamente o tipo da variavel 
//Numeros decimais e inteiros são do mesmo tipo, "number"

//______________________Objetos______________________//
// um objeto junta informações em um só lugar e voce acessa pela propriedade desse objeto

let aluno = {}; //objeto vazio

let pessoa = {
  nome: 'Rafael', //chave: valor
  idade: 25,
  estaAprovado: true,
  sobrenome: 'de Souza',

};
console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.estaAprovado);

//______________________Arrays______________________//
//Array: conjunto de dados que pode ser acessado por um indice
//vetor

let familia = [26, 27, 28, 30];
console.log(familia);
console.log(familia[2]);
//posso misturar os tipos de elementos
let familiaDados = [26, true, 28, 'Elis'];
//======O indice começa em zero!=====

//typeof familiaDados[0] => number;
//typeof familiaDados[1] => boolean;

//O array tem varias propriedades:
console.log(familiaDados.length)


//______________________Functions______________________//
// nomear função: verbo + substantivo
//resetaCor ; transformarObjeto; alterarTamanho

//função sem parametro
function resetaCor() {
  corSite = ""; //define a cor para fazio
};
//ex:
let corSite = "azul";
resetaCor();

//função com parametro
function colorirVermelho(cor, tonalidade) {
  corSite = cor + ' ' + tonalidade; //concatenou as strings e o espaço ' '
};
//ex:

corSite = 'azul';
colorirVermelho('vermelho', 'claro');
console.log(corSite)

//---------função tipo 1.
//realiza uma tarefa mas não devolve nada;
function dizerNome() {
  console.log('Elis');
}
dizerNome();
//---------função tipo 2.
//faz uma ação e retorna algo
function multiplicarPorDois(valor) {
  return valor * 2;
}

console.log(multiplicarPorDois(5))
let resultado = multiplicarPorDois(5);
console.log(resultado)


//______________________Operadores_lógicos______________________//
//Op. aritméticos
//Op. de atribuição
//Op. de comparação
//Op. lógicos
//Op. Bitwise
//---------------------Op Aritméticos
// 5 + 5
// 5 - 5
// 5*5
// 5**5

//-------------------Incremento
let quantidade = 18;
console.log(quantidade++) //soma depois da operação quantidade
console.log(++quantidade) //faz a operação antes
console.log(--quantidade) //faz a operação antes

//---------------------Op de atribuição
//let => atriuindo valor 
let valorTecladoGamer = 100;
valorTecladoGamer += valorTecladoGamer;
//O mesmo que fazer: valorTecladoGamer= valorTecladoGamer + valorTecladoGamer;

valorTecladoGamer -= valorTecladoGamer;
//O mesmo que fazer: valorTecladoGamer= valorTecladoGamer - valorTecladoGamer;
//Sempre da zero;

//-------------------Op. de Igualdade
//Igualdade estrita === (compara valor e type)
console.log(1 === 1);
console.log('1' === 1);
//Igualdade solta ==
console.log('1' == 1); //Compara apenas o numero, e não o type;
//Usar sempre igualdade estrita! Evita esforço computacional.

//-------------------Op. Ternario
//usado para quando temos que usar muito If

//Tem um cliente, se > 100 premium, se não, comum
let pontos = 100;
// (Construção)  ?  (oq acontece se verdadeiro)  :  (o que acontece se falso);
let tipo = pontos > 100 ? 'premium' : 'comum';

//-------------------Op. logicos
// AND, OR e NOT

//Operador Lógico E, (&&)
//Retorna TRUE se OS DOIS operandos forem TRUE
console.log('Op. Logicos');

let maiorDeIdade = true;
let possuiCarteiraTrabalho = false;
let podeAplicar = maiorDeIdade && possuiCarteiraTrabalho;
console.log('Pode Aplicar?', podeAplicar);


//Operador Lógico OU, (||)
//Retorna TRUE UM dos operandos forem TRUE
let podeAplicarOU = maiorDeIdade || possuiCarteiraTrabalho;
console.log(podeAplicarOU);

//Operador Lógico NOT, (!)
let candidatoRecusado = !podeAplicar;
console.log('Candidato Recusado?', candidatoRecusado);

//Comparações com valores NÃO BOLEANOS
console.log('Op. Não Boleanos')
//Falsy : undefined, null, 0, false, '', NaN - not a number

//Truthy: valores que não nenhum dos acima;
//quando não se encaixa em nenhuma das condições anteriores, ele retorna o proprio valor

console.log(false || 1) //Retornou 1, pois não é falsy

console.log(false || 1 || 3) //Retornou 1, pos o operador lógico OU verifica o primeiro número e já da o resultado;

let corPersonalizada = 'Vermelho';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil); //exibiu vermelho pois na condição OU o vermelho aparece primeiro;

//Agora vamos ver o Falsy:
corPersonalizada = '';
corPerfil = corPersonalizada || corPadrão;
console.log(corPerfil); //retornou  azul pois a cor personalizada é Falsy


//______________________Condicionais: if else______________________//

//Se a hora atual estiver entre as 06:00 até 12:00: Bom dia!
//Se a hora atual estiver entre as 12:00 até 18:00: Bom tarde!
// Caso contrário: Boa noite!
//      if (condição) {executar}
//      else if (condição) {executar}
//      else {executar}

let hora = 20;
if (hora > 6 && hora < 12) {
  console.log('Bom dia. ')
}
else if (hora > 12 && hora < 18) {
  console.log('Boa Tarde. ')
}
else {
  console.log('Boa noite. ')
}

//______________________Condicionais: Switch Case____________________//
let permissao = 'diretor'; // comum, gerente, diretor
switch (permissao) {
  case 'comum':
    console.log('Usuário Comum');
    break;

  case 'gerente':
    console.log('Usuário Gerente');
    break;

  case 'diretor':
    console.log('Usuário Diretor');
    break;

  default:
    console.log('Usuário não reconhecido')
}

//______________________Laço_Loop____________________//

//No js temos cinco loops
// 1. For
// 2. While
// 3. Do. while
// 4. For.. In
// 5. For.. of
//-------------------------For
for (let i = 0; i < 5; i++) {
  console.log("Estou Aprendendo!", i);
}

for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) { console.log(i); }
  // % resto da divisão !== diferente 
  // % operador modulos
}


//------------------------While
let j = 5;
while (j >= 1) {
  if (j % 2 !== 0) { console.log('loop while', j); }
  j--;
}

//------------------------Do..While
i = 0;
do {
  console.log('Digitando!');
  i++; // fazer o incremento se não fica em um loop infinito
} while (i < 10)

//------------------------For.. In
const alunos = {
  nome: 'Elis',
  idade: 28
};
//chave: key - value
for (let chave in alunos) {
  console.log(chave, alunos['nome']);
}

const coresPrim = ['Vermelho', 'Amarelo', 'Azul']
for (let indice in coresPrim) {
  console.log(indice, coresPrim[indice])
}

//------------------------For..Of
// para iterar sobre os itens de um vetor 

for (let cor of coresPrim) {
  console.log('For In', cor)
}

//+++++++++++++++++++++++++Exercício++++++++++++++++++++++++++++++++++++

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

// console.log(FizzBuzz(3));
// console.log(FizzBuzz(5));
// console.log(FizzBuzz(15));
// console.log(FizzBuzz(12));
// console.log(FizzBuzz('A'));

//______________________Pontos na Carteira____________________//
// Velocidade máxima até 70km/h
// A cada 5km acima do limite, você ganha 1 ponto na carteira
// Utilizar função para arredondar Math.Floor()
// Caso pontos maior que 12 -> "Carteira Suspensa"

function verificarVelocidade(velocidade) {
  if (velocidade <= 70) {
    console.log('Dentro do limite de velocidade');
  }
  else {
    let acrescimo = velocidade - 70;
    let fracao = Math.floor(acrescimo / 5);
    let pontos = fracao;
    console.log('Você fez', pontos, 'pontos na carteira!');
    if (pontos > 12) {
      console.log('Carteira Suspensa!')
    }
  }
}

//verificarVelocidade(150)



// ______________________exibirTipo____________________//
// Retorna se o valor informado é par ou impar
console.log('Função Par/ímpar')
function exibirTipo(valor) {
  if (typeof valor !== Number) {
    console.log('O valor informado não é um número!')
  }
  else if (valor % 2 === 0) {
    console.log('O valor informado é par')
  }
  else if (valor % 2 !== 0) {
    console.log('O valor informado é ímpar')
  }
}
console.log(exibirTipo('elis'))


//_______________exercício
//Criar um método para ler propriedades de um objeto e
//exibir somente as propriedades do tipo de string que estão nesse objeto 

const filme = {
  titulo: 'Vingadores',
  ano: 2018,
  diretor: 'Robin',
  personagem: 'Thor'
}
exibirpropriedades(filme);
function exibirpropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === 'string') {
      console.log(prop, obj[prop])
    }
}