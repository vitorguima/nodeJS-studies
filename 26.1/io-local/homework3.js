const { checkNumbers } = require('./homework1');

const a = Math.floor(Math.random() * 100 + 1);
const b = Math.floor(Math.random() * 100 + 1);
const c = Math.floor(Math.random() * 100 + 1);


async function testCheckNumbers() {
  try {
    const total = await checkNumbers(a, b, c);
    console.log(total);
  } catch {
    console.log(err);
  }
}

testCheckNumbers();
