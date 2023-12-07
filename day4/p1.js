import getLines from '../getLines.js';

const lines = getLines();

let tot = 0;
for (const line of lines) {
  const winning = new Set(line.split(':')[1].split('|')[0].trim().split(/\s+/g).map(x => parseInt(x)));
  const mine = line.split(':')[1].split('|')[1].trim().split(/\s+/g).map(x => parseInt(x));

  console.log(winning);
  let numMatch = 0;
  mine.forEach(x => {
    if (winning.has(x)) {
      numMatch++;
    }
  })
  tot += numMatch > 0 ? 2**(numMatch-1) : 0;
}

console.log(tot);
