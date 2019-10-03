import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Betting from './Betting';
import DealerHand from './DealerHand';
import PlayerHand from './PlayerHand';
import Input from './Input';
import Output from './Output';

import { getDeck, shuffle } from '../helpers/deck';

const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'dealerPoints dealerCards dealerCards dealerCards' 'playerPoints playerCards playerCards playerCards' 'leftButtons betArea betArea rightButtons' 'chips chips chips cash';
`;

export default function App() {
  const [deck] = useState(shuffle(getDeck()));
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerPoints] = useState(99);
  const [playerPoints] = useState(99);
  const [playerCash] = useState(100);
  const [currentBet] = useState(50);
  const outputProps = {
    dealerPoints,
    playerPoints,
    playerCash,
    currentBet,
  };

  // TEMPORARY ----------------------------------------
  useEffect(() => {
    let tempDealerCards = [];
    let tempPlayerCards = [];

    let firstDealerCard = deck.pop();
    firstDealerCard.hidden = true;

    tempDealerCards.push(firstDealerCard);
    tempPlayerCards.push(deck.pop());
    tempDealerCards.push(deck.pop());
    tempPlayerCards.push(deck.pop());

    setDealerCards(tempDealerCards);
    setPlayerCards(tempPlayerCards);
  }, [deck]);
  // TEMPORARY ----------------------------------------

  return (
    <>
      <GridContainer>
        <Betting />
        <Input />
        <Output {...outputProps} />
        <DealerHand cards={dealerCards} />
        <PlayerHand cards={playerCards} />
      </GridContainer>
    </>
  );
}
