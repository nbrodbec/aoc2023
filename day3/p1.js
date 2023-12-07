import getLines from '../getLines.js';

const lines = getLines();

let tot = 0;

const isSym = (c) => {
  return c!=='.' && c !== '\r' && (c < '0' || c > '9');
}

const grid = lines.map(line => line.split(''));

for (const [i, row] of grid.entries()) {
  let currNum = 0;
  let valid = false;
  for (const [j, c] of row.entries()) {
    let above = grid[i-1]?.[j] ?? '.';
    let below = grid[i+1]?.[j] ?? '.';

    if ('0' <= c && c <= '9') {
      currNum = currNum*10 + parseInt(c);
      if (isSym(above) || isSym(below)) valid = true;
    } else {
      if (valid || isSym(c) || isSym(above) || isSym(below)) {
        tot += currNum;
      }
      currNum = 0;
      if (!(isSym(c) || isSym(above) || isSym(below))) {
        valid = false
      } else {
        valid = true;
      };
    }
  }
  if (valid) {
    tot += currNum;
  }
}

console.log(tot);
