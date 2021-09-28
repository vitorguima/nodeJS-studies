const { expect } = require('chai');
const { checkNumber } = require('./checkNumber');

describe('testa função checkNumber ', () => {
  describe('Qual o valor recebido é menor que zero', () => {
    it('o retorno é igual a negativo', () => {
      const retorno = checkNumber(-1);
      expect(retorno).to.be.equals('negativo');
    })
  });

  describe('Qual o valor recebido é maior que zero', () => {
    it('o retorno é igual a positivo', () => {
      const retorno = checkNumber(1);
      expect(retorno).to.be.equals('positivo');
    })
  })

  describe('Qual o valor recebido é igual a zero', () => {
    it('o retorno é igual a neutro', () => {
      const retorno = checkNumber(0);
      expect(retorno).to.be.equals('neutro');
    })
  })

  describe('Qual o valor recebido não é um número', () => {
    it('o retorno é igual a o valor deve ser um número', () => {
      const retorno = checkNumber('ok');
      expect(retorno).to.be.equals('o valor deve ser um número');
    })
  })
});