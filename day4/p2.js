import getLines from '../getLines.js';

const lines = getLines();

let tot = 0;
let copies = Array(lines.length).fill(1);
for (const [i, line] of lines.entries()) {
  const winning = new Set(line.split(':')[1].split('|')[0].trim().split(/\s+/g).map(x => parseInt(x)));
  const mine = line.split(':')[1].split('|')[1].trim().split(/\s+/g).map(x => parseInt(x));

  let numMatch = 0;
  mine.forEach(x => {
    if (winning.has(x)) {
      numMatch++;
    }
  })
  
  let copiesOfThis = copies[i];
  for (let j = 1; j <= numMatch; j++) {
    copies[i+j] += copiesOfThis;
  }
}

copies.forEach(x => tot += x);
console.log(tot);
