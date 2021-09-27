function checkNumbers(a, b, c) {
  const aType = typeof(a);
  const bType = typeof(b);
  const cType = typeof(c);

  const promise = new Promise((resolve, reject) => {
    if (aType !== 'number' || bType !== 'number' || cType !== 'number') {
      reject(new Error('Informe apenas números'));
      return;
    }

    const total = (a + b) * c;

    if (total < 50) reject(new Error('Valor muito baixo'));
    resolve(total);
  })

  return promise;
}

module.exports = {
  checkNumbers,
};
