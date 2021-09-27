const { checkNumbers } = require('./homework1');

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);

checkNumbers(a, b, c)
  .then((total) => console.log(total))
  .catch((error) => console.log(error));
