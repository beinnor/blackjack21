import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Betting from './Betting';
import DealerHand from './DealerHand';
import PlayerHand from './PlayerHand';

import { getDeck, shuffle } from '../helpers/deck';

const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'dealerPoints dealerCards dealerCards dealerCards' 'playerPoints playerCards playerCards playerCards' 'leftButtons betArea betArea rightButtons' 'chips chips chips cash';
`;

const GridDealerPoints = styled.div`
  grid-area: dealerPoints;
  justify-self: center;
  align-self: center;
`;

const GridPlayerPoints = styled.div`
  grid-area: playerPoints;
  justify-self: center;
  align-self: center;
`;

const GridLeftButtons = styled.div`
  grid-area: leftButtons;
  justify-self: center;
  align-self: center;
`;

const GridRightButtons = styled.div`
  grid-area: rightButtons;
  justify-self: center;
  align-self: center;
`;

const GridCash = styled.div`
  grid-area: cash;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
`;

const GoldenCirle = styled.span`
  padding: 2rem;
  border-radius: 1rem;
  border: 0.2rem solid gold;
`;

const PointsStyle = styled.span`
  background: grey;
  color: darkred;
  font-size: 2rem;
  padding: 0.9rem;
  border: 0.15rem solid black;
  border-radius: 2rem;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;

const HitButton = styled.button`
  font-size: 2rem;
`;
const StandButton = styled.button`
  font-size: 2rem;
`;
const DblDownButton = styled.button`
  font-size: 2rem;
`;
const SplitButton = styled.button`
  font-size: 2rem;
`;
const DealButton = styled.button`
  font-size: 2rem;
`;

export default function App() {
  const [deck] = useState(shuffle(getDeck()));
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);

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
        <GridCash>
          <GoldenCirle>$500</GoldenCirle>
        </GridCash>
        <GridDealerPoints>
          <PointsStyle>10</PointsStyle>
        </GridDealerPoints>
        <DealerHand cards={dealerCards} />
        <GridPlayerPoints>
          <PointsStyle>11</PointsStyle>
        </GridPlayerPoints>
        <PlayerHand cards={playerCards} />
        <GridLeftButtons>
          <HitButton>Hit</HitButton>
          <StandButton>Stand</StandButton>
          <DealButton>Deal</DealButton>
        </GridLeftButtons>
        <GridRightButtons>
          <SplitButton>Split</SplitButton>
          <DblDownButton>Double Down</DblDownButton>
        </GridRightButtons>
      </GridContainer>
    </>
  );
}
