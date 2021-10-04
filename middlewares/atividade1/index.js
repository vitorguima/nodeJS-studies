const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());  

const userRoutes = require('./userPath');
const btcRoutes = require('./btcPath');

app.use('/user', userRoutes);
app.use('/btc', btcRoutes);

app.listen(3000, () => console.log('Rodando na porta 3000'));
