const suits = ['spade', 'diamond', 'club', 'heart'];
const ranks = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'jack',
  'queen',
  'king',
];

export const getDeck = () => {
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < ranks.length; j++) {
      let card = {
        name: `${ranks[j]} of ${suits[i]}`,
        rank: ranks[j],
        suit: suits[i],
        hidden: false,
      };
      deck.push(card);
    }
  }

  return deck;
};

export const getCheatDeck = () => {
  const deck = [];

  const card1 = {
    name: `A of ♠`,
    rank: 'A',
    suit: '♠',
    hidden: false,
  };
  deck.push(card1);

  const card3 = {
    name: `A of ♣`,
    rank: 'A',
    suit: '♣',
    hidden: false,
  };
  deck.push(card3);

  const card2 = {
    name: `K of ♠`,
    rank: 'K',
    suit: '♠',
    hidden: false,
  };
  deck.push(card2);

  const card4 = {
    name: `Q of ♣`,
    rank: 'Q',
    suit: '♣',
    hidden: false,
  };
  deck.push(card4);

  return deck;
};

export const shuffle = input => {
  let deck = input;
  let current_index = deck.length;
  let temp_val;
  let random_index;

  while (0 !== current_index) {
    random_index = Math.floor(Math.random() * current_index);
    current_index -= 1;
    temp_val = deck[current_index];
    deck[current_index] = deck[random_index];
    deck[random_index] = temp_val;
  }
  return deck;
};
