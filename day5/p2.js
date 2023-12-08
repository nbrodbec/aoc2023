import getLines from '../getLines.js';

const lines = getLines();
let seeds = lines
  .shift()
  .split(':')[1]
  .trim()
  .split(' ')
  .map((x) => parseInt(x));

let inputs = [];
for (let i = 0; i < seeds.length; i += 2) {
  inputs.push([seeds[i], seeds[i]+seeds[i+1]]);
}
let triplets = [];

lines.shift();
lines.shift();

for (const line of lines) {
  if (line.match(/[0-9]/g)) {
    let dest = parseInt(line.split(' ')[0]);
    let src = parseInt(line.split(' ')[1]);
    let range = parseInt(line.split(' ')[2]);
    triplets.push([src, src + range, dest]);
  } else if (triplets.length) {
    let nextInputs = [];
    for (let [seedStart, seedEnd] of inputs) {
      for (let [rangeStart, rangeEnd, dest] of triplets) {
        if (rangeStart <= seedStart && seedEnd < rangeEnd) {
          nextInputs.push([dest + (seedStart - rangeStart), dest + (seedEnd - rangeStart)]);
          seedStart = seedEnd = 0;
        } else if (rangeStart <= seedStart) {
          nextInputs.push([dest + (seedStart - rangeStart), dest + (rangeEnd - 1 - rangeStart)]);
          seedStart = rangeEnd;
        } else if (rangeStart <= seedEnd) {
          nextInputs.push([dest + seedStart, dest + (seedEnd - rangeStart)]);
          seedEnd = rangeStart - 1;
        }
      }
      if (seedStart > 0 && seedEnd > 0) nextInputs.push([seedStart, seedEnd]);
    }
    inputs = nextInputs;
    triplets = [];
  }
}

console.log(inputs);
