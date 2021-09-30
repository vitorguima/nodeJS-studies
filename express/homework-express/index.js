const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Hello, <nome do usuário>!' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
})

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (age > 17) {
    return res.status(201).json({ message: `Hello, ${name}`, age });
  }

  return res.status(401).json({ message: "Unauthorized" });
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  return res.status(201).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})

app.listen(3000, () => console.log('Rodando na porta 3000'));
