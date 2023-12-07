import getLines from '../getLines.js';

const lines = getLines();

let tot = 0;
for (const [i, line] of lines.entries()) {
  let game = line
    .split(':')[1]
    .split(';')
    .map((s) => s.split(' ').slice(1))
    .flat();

  let valid = true;
  for (const [idx, num] of game.entries()) {
    if (idx % 2 === 0) {
      const col = game[idx + 1].replace(/,|\r/, '');
      switch (col) {
        case 'red':
          valid = valid && num <= 12;
          break;
        case 'green':
          valid = valid && num <= 13;
          break;
        case 'blue':
          valid = valid && num <= 14;
          break;
      }
    }
  }
  if (valid) tot += i + 1;
}
console.log(tot);
