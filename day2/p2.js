import getLines from '../getLines.js';

const lines = getLines();

let tot = 0;
for (const line of lines) {
  let game = line
    .split(':')[1]
    .split(';')
    .map((s) => s.split(' ').slice(1))
    .flat();

  let minRed = 0;
  let minGreen = 0;
  let minBlue = 0;
  for (const [idx, num] of game.entries()) {
    if (idx % 2 === 0) {
      let col = game[idx + 1].replace(/,|\r/, '');
      switch (col) {
        case 'red':
          minRed = Math.max(minRed, num);
          break;
        case 'green':
          minGreen = Math.max(minGreen, num);
          break;
        case 'blue':
          minBlue = Math.max(minBlue, num);
      }
    }
  }
  tot += minRed * minGreen * minBlue;
}

console.log(tot);
