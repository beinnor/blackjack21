export const calcScore = cards => {
  let score = 0;
  const pointsArr1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const pointsArr2 = ['jack', 'queen', 'king'];

  cards.forEach(card => {
    if (!card.hidden) {
      if (pointsArr1.includes(card.rank)) {
        score = score + parseInt(card.rank);
      } else if (pointsArr2.includes(card.rank)) {
        score = score + 10;
      } else if (card.rank === '1') {
        if (score + 11 <= 21) {
          score = score + 11;
        } else {
          score = score + 1;
        }
      }
    }
  });
  return score;
};

export const calcFullScore = cards => {
  let score = 0;
  const pointsArr1 = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];
  const pointsArr2 = ['jack', 'queen', 'king'];

  if (cards.length > 1) {
    cards.forEach(card => {
      if (pointsArr1.includes(card.rank)) {
        score = score + parseInt(card.rank);
      } else if (pointsArr2.includes(card.rank)) {
        score = score + 10;
      } else if (card.rank === '1') {
        if (score + 11 <= 21) {
          score = score + 11;
        } else {
          score = score + 1;
        }
      }
    });
  }
  return score;
};

export const isBust = points => {
  if (points > 21) {
    return true;
  }
  return false;
};
