const fs = require('fs').promises;
const readline = require('readline-sync');

const fileName = readline.question('Qual o nome do arquivo que você deseja ler?');

fs.readFile(fileName, 'utf-8')
  .then((data) => console.log(data))
  .catch(() => console.log('Arquivo inexistente'));
