const fs = require('fs').promises;

const nomeDoArquivo = 'simpsons.json';

const logCharacters = (array) => {
  array.forEach(({ id, name }) => console.log(`${id} - ${name}`))
}

fs.readFile(nomeDoArquivo, 'utf8')
  .then((json) => JSON.parse(json))
    .then((data) => logCharacters(data));
