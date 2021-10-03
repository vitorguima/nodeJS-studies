const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;

const app = express();
app.use(express.json());
app.use(cors());  

app.get('/simpsons', (req, res) => {
  fs.readFile('simpsons.json', 'utf-8')
    .then((data) => res.status(200).send(data));
});

app.get('/simpsons/:id', (req, res) => {
  const { id } = req.params;
  fs.readFile('simpsons.json', 'utf-8')
    .then((json) => JSON.parse(json))
    .then((data) => data.find((simpson) => simpson.id === id))
    .then((character) => res.status(200).send(character))
    .catch(() => res.status(404).json({ message: 'simpson not found' }))
})

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const getSimpsons = await fs.readFile('simpsons.json', 'utf-8');
  const currentCharacters = JSON.parse(getSimpsons);
  const charAlreadyExists = currentCharacters.some((char) => char.id === id);

  if (charAlreadyExists) {
    return res.status(409).json({ message: 'id already exists' });
  }

  currentCharacters.push({ id, name });
  await fs.writeFile('./simpsons.json', JSON.stringify(currentCharacters));
  return res.status(204).end();
})

app.listen(3000, () => console.log('Rodando na porta 3000'));
