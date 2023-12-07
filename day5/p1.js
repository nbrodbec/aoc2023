import getLines from '../getLines.js';

const lines = getLines();
let seeds = lines.shift().split(':')[1].trim().split(' ').map(x => parseInt(x));

lines.shift();

let mapped = Array(seeds.length).fill(false);
for (const [i, line] of lines.entries()) {
  if (line.match(':')) {
    mapped.fill(false);
  } else if (!line.match(/^\s+/g)) {
    let destRange = parseInt(line.split(' ')[0]);
    let sourceRange = parseInt(line.split(' ')[1]);
    let range = parseInt(line.split(' ')[2]);
    
    seeds = seeds.map((seed, j) => {
      if (!mapped[j] && sourceRange <= seed && seed <= sourceRange + range) {
        mapped[j] = true;
        return destRange + (seed - sourceRange);
      } else {
        return seed;
      }
    });
  }
}

let min = Number.MAX_VALUE;
seeds.forEach(x => min = Math.min(min, x));
console.log(min);

