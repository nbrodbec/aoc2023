import { readFileSync } from 'fs';
const getLines = () =>
  readFileSync('input.txt', { encoding: 'utf-8' }).slice(0, -1).split(/\n/g);

export default getLines;
