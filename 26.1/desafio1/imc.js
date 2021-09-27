const readline = require('readline-sync');

const altura = readline.questionFloat('Qual sua altura?');
const peso = readline.questionFloat('Qual seu peso?');

function imc(peso, altura) {
  const totalImc = (peso / altura ) ^ 2;
  
  if (totalImc <= 18.5) {
    console.log('Abaixo do peso (magreza)')
  }

  if (totalImc >= 18.5 && totalImc <= 24.9) {
    console.log('Peso normal')
  }

  if (totalImc >= 25 && totalImc <= 29.9) {
    console.log('Acima do peso')
  }

  if (totalImc >= 30 && totalImc <= 34.9) {
    console.log('Obesidade grau I')
  }

  if (totalImc <= 35 && totalImc <= 39.9) {
    console.log('Obesidade grau II')
  }

  else {
    console.log('Obesidade graus III e IV');
  }

}

imc(peso, altura);


// | IMC                                       | Situação                  |
// | ----------------------------------------- | ------------------------- |
// | Abaixo de 18,5                            | Abaixo do peso (magreza)  |
// | Entre 18,5 e 24,9                         | Peso normal               |
// | Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
// | Entre 30,0 e 34,9                         | Obesidade grau I          |
// | Entre 35,0 e 39,9                         | Obesidade grau II         |
// | 40,0 e acima                              | Obesidade graus III e IV  |