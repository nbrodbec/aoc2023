import getLines from '../getLines.js';

const lines = getLines();

let tot = 0;
for (const line of lines) {
  const digits = line.match(/\d/g);
  const first = parseInt(digits[0]);
  const last = parseInt(digits.pop());

  tot += first * 10 + last;
}

console.log(tot);
