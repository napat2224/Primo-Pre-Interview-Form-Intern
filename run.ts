const merge = require('./src/merge');
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function parseArray(input: string): number[] {
  return input
    .split(',')
    .map(item => parseInt(item.trim(), 10))
    .filter(num => !isNaN(num));
}

rl.question('Enter collection 1 (ascending*) (comma-separated numbers): ', (answer1) => {
  const c1 = parseArray(answer1);

  rl.question('Enter collection 2 (ascending*) (comma-separated numbers): ', (answer2) => {
    const c2 = parseArray(answer2);

    rl.question('Enter collection 3 (descending*) (comma-separated numbers): ', (answer3) => {
      const c3 = parseArray(answer3);

      const result = merge(c1, c2, c3);
      console.log('Merged array:', result);
      rl.close();
    });
  });
});
