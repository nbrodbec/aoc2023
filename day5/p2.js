import getLines from '../getLines.js';

const lines = getLines();
let seeds = lines
  .shift()
  .split(':')[1]
  .trim()
  .split(' ')
  .map((x) => parseInt(x));

let maps = [];
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
    const currTriplets = [...triplets];
    maps.push((seed) => {
      for (const [start, end, dest] of currTriplets) {
        if (start <= seed && seed < end) return dest + (seed - start);
      }
      return seed;
    });
    triplets = [];
  }
}

const map = (seed) => {
  let val = seed;
  maps.forEach(map => {
    val = map(val);
  });
  return val;
};

let min = Number.MAX_VALUE;
for (let i = 0; i < seeds.length; i += 2) {
  let start = seeds[i];
  let range = seeds[i + 1];
  for (let seed = start; seed < start + range; seed++) {
    min = Math.min(min, map(seed));
  }
}

console.log(min);


