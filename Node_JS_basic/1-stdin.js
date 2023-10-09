const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\r');

rl.question('', (name) => {
  console.log(`Your name is: ${name}\r`);
  console.log('This important software is now closing\r');
  rl.close();
});
