import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const GridDealerHand = styled.div`
  grid-area: dealerCards;
  align-self: center;
`;

export default function Hand({ cards }) {
  const currentCards = cards.map(card => <Card key={card.name} card={card} />);

  return <GridDealerHand>{currentCards}</GridDealerHand>;
}
