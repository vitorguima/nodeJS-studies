const fs = require('fs').promises;

async function addNewChar() {
  const simpsonsCharacters = await fs
    .readFile('simpsonFamily.json', 'utf8')
      .then((json) => JSON.parse(json));

  const newId = (simpsonsCharacters.length + 1).toString();
  const newSimpsonsChars = [...simpsonsCharacters, { id: newId, name: 'Nelson Muntz' }];
  
  fs.writeFile('simpsonFamily.json', JSON.stringify(newSimpsonsChars));
}

addNewChar();
