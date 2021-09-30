const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Hello, <nome do usuário>!' });
})

app.listen(3000, () => console.log('Rodando na porta 3000'));
