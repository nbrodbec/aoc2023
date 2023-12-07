import getLines from '../getLines.js';

const lines = getLines();

const getVal = (card) => {
  if (parseInt(card)) return parseInt(card);
  switch (card) {
    case 'T':
      return 10;
    case 'J':
      return 1;
    case 'Q':
      return 12;
    case 'K':
      return 13;
    case 'A':
      return 14;
  }
};

const handVal = (hand) => {
  let map = new Map();
  hand.forEach((x) => map.set(x, (map.get(x) ?? 0) + 1));

  if (hand.find((x) => x === 'J') && map.size > 1) {
    let highest = [...map.entries()].reduce((a, v) =>
      a[0] === 'J' || (v[1] >= a[1] && v[0] !== 'J') ? v : a
    )[0];
    map.set(highest, map.get(highest) + map.get('J'));
    map.delete('J');
    hand = hand.map((card) => (card === 'J' ? highest : card));
  }

  switch (map.size) {
    case 1:
      return 7;
    case 2:
      return Math.max(...map.values()) + 2;
    case 3:
      return Math.max(...map.values()) + 1;
    case 4:
      return 2;
    case 5:
      return 1;
  }
};

let hands = lines.map((line, i) => [i, line.split(' ')[0].split('')]);
let bids = lines.map((line) => parseInt(line.split(' ')[1]));

hands.sort((a, b) => {
  [a, b] = [a[1], b[1]]
  const [aVal, bVal] = [handVal(a), handVal(b)];
  if (aVal === bVal) {
    for (let i = 0; i < 5; i++) {
      if (a[i] !== b[i]) return getVal(a[i]) - getVal(b[i]);
    }
  } else {
    return aVal - bVal;
  }
});

const tot = hands.reduce((a, [i], j) => a + (j + 1) * bids[i], 0);
console.log(tot);
