const fs = require('fs').promises;

async function createNewJson() {
  const simpsonsCharacters = await fs
    .readFile('simpsons.json', 'utf8')
      .then((json) => JSON.parse(json));

  const newSimpsonsChars = simpsonsCharacters.filter((char) => parseInt(char.id) <= 4);
  
  fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonsChars));
}

createNewJson();
