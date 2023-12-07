import getLines from '../getLines.js';

const lines = getLines();

const map = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3],
  ['four', 4],
  ['five', 5],
  ['six', 6],
  ['seven', 7],
  ['eight', 8],
  ['nine', 9],
]);

let tot = 0;
for (const line of lines) {
  const digits = line.match(/\d/g);
  const firstDigit = digits?.[0];
  const lastDigit = digits?.pop();

  const firstWord = line.match(
    /(one|two|three|four|five|six|seven|eight|nine)/
  )?.[0];
  const lastWord = line
    .split('')
    .reverse()
    .join('')
    .match(/(eno|owt|eerht|ruof|evif|xis|neves|thgie|enin)/)
    ?.[0]
    ?.split('')
    ?.reverse()
    ?.join('');

  let first, last;
  if (!digits) {
    first = firstIndeces.indexOf(firstWordIdx) + 1;
    last = lastIndeces.indexOf(lastWordIdx) + 1;
  } else if (!firstWord) {
    first = parseInt(firstDigit);
    last = parseInt(lastDigit);
  } else {
    first =
      line.indexOf(firstDigit) < line.indexOf(firstWord)
        ? parseInt(firstDigit)
        : map.get(firstWord);
    last =
      line.lastIndexOf(lastDigit) > line.lastIndexOf(lastWord)
        ? parseInt(lastDigit)
        : map.get(lastWord);
  }

  tot += first * 10 + last;
}

console.log(tot);
