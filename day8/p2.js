import getLines from '../getLines.js';
import lcm from 'compute-lcm';

const lines = getLines();

let directions = lines
  .shift()
  .trim()
  .split('')
  .map((x) => (x === 'R' ? 1 : 0));

let nodeMap = new Map();
let currNodes = [];

lines.shift();
while (lines.length) {
  let line = lines.shift();
  let node = line.split(' = ')[0];
  let children = line.split(' = ')[1].match(/\((.+)\)/)[1];
  let left = children.split(', ')[0];
  let right = children.split(', ')[1];
  nodeMap.set(node, [left, right]);
  if (node.charAt(2) === 'A') currNodes.push(node);
}

let cycles = [];
for (const node of currNodes) {
  let dirCopy = [...directions];
  let curr = node;
  let i = 0;
  while (curr.charAt(2) !== 'Z') {
    const dir = dirCopy.shift();
    curr = nodeMap.get(curr)[dir]
    dirCopy.push(dir);
    i++;
  }
}

console.log(lcm(...cycles));
