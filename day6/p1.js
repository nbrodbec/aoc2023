import getLines from '../getLines.js';

const lines = getLines();

let times = lines
  .shift()
  .split(':')[1]
  .trim()
  .split(/\s+/g)
  .map((x) => parseInt(x));
let rcrds = lines
  .shift()
  .split(':')[1]
  .trim()
  .split(/\s+/g)
  .map((x) => parseInt(x));

let prod = 1;
for (const [i, time] of times.entries()) {
  let rcrd = rcrds[i];
  let a = Math.floor((time - Math.sqrt(time ** 2 - 4 * rcrd)) / 2);
  let b = Math.ceil((time + Math.sqrt(time ** 2 - 4 * rcrd)) / 2);
  let num = b - a - 1;
  prod *= num;
}

console.log(prod);
