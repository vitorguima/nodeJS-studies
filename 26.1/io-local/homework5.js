const fs = require('fs').promises;

async function getCharacter(id) {
  const simpsonsCharacters = await fs
    .readFile('simpsons.json', 'utf8')
      .then((json) => JSON.parse(json));

  const characterData = simpsonsCharacters.find((character) => character.id === id);

  if (characterData) {
    console.log(characterData);
    return
  }

  throw new Error('id não encontrado');
}

getCharacter('1');
