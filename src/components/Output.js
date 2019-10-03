import React from 'react';
import styled from 'styled-components';

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

export default function Output({
  dealerPoints,
  playerPoints,
  playerCash,
  currentBet,
}) {
  return (
    <>
      <GridCash>
        <GoldenCirle>${playerCash}</GoldenCirle>
      </GridCash>
      <GridDealerPoints>
        <PointsStyle>{dealerPoints}</PointsStyle>
      </GridDealerPoints>
      <GridPlayerPoints>
        <PointsStyle>{playerPoints}</PointsStyle>
      </GridPlayerPoints>
    </>
  );
}
