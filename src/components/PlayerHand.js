import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const GridPlayerHand = styled.div`
  grid-area: playerCards;
  align-self: center;
`;

export default function Hand({ cards }) {
  const currentCards = cards.map(card => <Card key={card.name} card={card} />);

  return <GridPlayerHand>{currentCards}</GridPlayerHand>;
}
