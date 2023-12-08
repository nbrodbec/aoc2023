import getLines from '../getLines.js';

const lines = getLines();

let directions = lines
  .shift()
  .trim()
  .split('')
  .map((x) => (x === 'R' ? 1 : 0));

let nodeMap = new Map();

lines.shift();
while (lines.length) {
  let line = lines.shift();
  let node = line.split(' = ')[0];
  let children = line.split(' = ')[1].match(/\((.+)\)/)[1];
  let left = children.split(', ')[0];
  let right = children.split(', ')[1];
  nodeMap.set(node, [left, right]);
}

let curr = 'AAA';
let i = 0;
while (curr !== 'ZZZ') {
  const dir = directions.shift();
  curr = nodeMap.get(curr)[dir];
  directions.push(dir);
  i++;
}

console.log(i);
