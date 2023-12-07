import getLines from '../getLines.js';

const lines = getLines();

let time = parseInt(lines.shift().split(':')[1].trim().split(/\s+/g).join(''));
let rcrd = parseInt(lines.shift().split(':')[1].trim().split(/\s+/g).join(''));

let a = Math.floor((time - Math.sqrt(time ** 2 - 4 * rcrd)) / 2);
let b = Math.ceil((time + Math.sqrt(time ** 2 - 4 * rcrd)) / 2);
let num = b - a - 1;

console.log(num);
