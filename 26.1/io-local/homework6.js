const fs = require('fs').promises;

async function changeCharacters() {
  const simpsonsCharacters = await fs
    .readFile('simpsons.json', 'utf8')
      .then((json) => JSON.parse(json));

  const newSimpsonsChars = simpsonsCharacters.filter((char) => char.id !== '10' && char.id !== '6');
  
  fs.writeFile('simpsons.json', JSON.stringify(newSimpsonsChars));
}

changeCharacters();
