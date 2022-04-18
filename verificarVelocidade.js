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
//Teste
verificarVelocidade(150)