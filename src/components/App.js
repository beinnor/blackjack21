import React from 'react';
import styled from 'styled-components';

import cardsSprite from '../assets/svg-cards.svg';
import chipsSprite from '../assets/chips_sprite.svg';

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

const GridDealerCards = styled.div`
  grid-area: dealerCards;
  align-self: center;
`;

const GridPlayerPoints = styled.div`
  grid-area: playerPoints;
  justify-self: center;
  align-self: center;
`;

const GridPlayerCards = styled.div`
  grid-area: playerCards;
  align-self: center;
`;

const GridLeftButtons = styled.div`
  grid-area: leftButtons;
  justify-self: center;
  align-self: center;
`;

const BetArea = styled.div`
  grid-area: betArea;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
`;

const GridRightButtons = styled.div`
  grid-area: rightButtons;
  justify-self: center;
  align-self: center;
`;

const GridChips = styled.div`
  grid-area: chips;
  justify-self: center;
  align-self: center;
`;

const GridCash = styled.div`
  grid-area: cash;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
`;

const SvgChip = styled.svg`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;

const SvgCard = styled.svg`
  width: auto;
  height: 11rem;
  border-radius: 0.3rem;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
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
  return (
    <>
      <GridContainer>
        <BetArea>
          <GoldenCirle>$5</GoldenCirle>
        </BetArea>
        <GridChips>
          <SvgChip className="chip" id="chip_1" viewBox="0 0 50 50">
            <use href={`${chipsSprite}#chip_1`} width="100%" height="100%" />
          </SvgChip>

          <SvgChip className="chip" id="chip_5" viewBox="0 0 50 50">
            <use href={`${chipsSprite}#chip_5`} width="100%" height="100%" />
          </SvgChip>

          <SvgChip className="chip" id="chip_25" viewBox="0 0 50 50">
            <use href={`${chipsSprite}#chip_25`} width="100%" height="100%" />
          </SvgChip>

          <SvgChip className="chip" id="chip_100" viewBox="0 0 50 50">
            <use href={`${chipsSprite}#chip_100`} width="100%" height="100%" />
          </SvgChip>

          <SvgChip className="chip" id="chip_500" viewBox="0 0 50 50">
            <use href={`${chipsSprite}#chip_500`} width="100%" height="100%" />
          </SvgChip>

          <SvgChip className="chip" id="chip_1000" viewBox="0 0 50 50">
            <use href={`${chipsSprite}#chip_1000`} width="100%" height="100%" />
          </SvgChip>
        </GridChips>
        <GridCash>
          <GoldenCirle>$500</GoldenCirle>
        </GridCash>
        <GridDealerPoints>
          <PointsStyle>10</PointsStyle>
        </GridDealerPoints>
        <GridDealerCards>
          <SvgCard
            className="card dealerCard backCard"
            id="card1"
            viewBox="0 0 169.075 244.640"
            fill="darkred"
          >
            <use href={`${cardsSprite}#back`} width="100%" height="100%" />
          </SvgCard>
          <SvgCard
            className="card dealerCard"
            id="card2"
            viewBox="0 0 169.075 244.640"
          >
            <use href={`${cardsSprite}#club_jack`} width="100%" height="100%" />
          </SvgCard>
        </GridDealerCards>
        <GridPlayerPoints>
          <PointsStyle>11</PointsStyle>
        </GridPlayerPoints>
        <GridPlayerCards>
          <SvgCard
            className="card playerCard"
            id="card3"
            viewBox="0 0 169.075 244.640"
          >
            <use href={`${cardsSprite}#club_4`} width="100%" height="100%" />
          </SvgCard>
          <SvgCard
            className="card playerCard"
            id="card4"
            viewBox="0 0 169.075 244.640"
          >
            <use href={`${cardsSprite}#diamond_7`} width="100%" height="100%" />
          </SvgCard>
        </GridPlayerCards>
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
