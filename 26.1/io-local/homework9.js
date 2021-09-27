const fs = require('fs').promises;

async function removeNewChar() {
  const simpsonsCharacters = await fs
    .readFile('simpsonFamily.json', 'utf8')
      .then((json) => JSON.parse(json));

  const newSimpsonsChars = simpsonsCharacters.filter((char) => char.name !== 'Nelson Muntz');
  
  fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonsChars));
}

removeNewChar();
