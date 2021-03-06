import React from 'react';
import styled from 'styled-components';

import chipsSprite from '../assets/chips_sprite.svg';

import { GAMESTATE } from '../helpers/states';

const BetArea = styled.div`
  grid-area: betArea;
  justify-self: center;
  align-self: center;
  font-size: 2rem;
`;

const GoldenCirle = styled.span`
  padding: 2rem;
  border-radius: 1rem;
  border: 0.2rem solid gold;
`;

const GridChips = styled.div`
  grid-area: chips;
  justify-self: center;
  align-self: center;
`;

const SvgChip = styled.svg`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;

const SvgChipDisabled = styled.svg`
  fill: grey;
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
`;

export default function Betting(props) {
  const enabledChips = (
    <>
      <BetArea onClick={props.handleClearBet}>
        <GoldenCirle>${props.currentBet}</GoldenCirle>
      </BetArea>
      <GridChips>
        <SvgChip
          onClick={e => props.handleChipsButtons(1)}
          className="chip"
          id="chip_1"
          viewBox="0 0 50 50"
        >
          <use href={`${chipsSprite}#chip_1`} width="100%" height="100%" />
        </SvgChip>

        <SvgChip
          onClick={e => props.handleChipsButtons(5)}
          className="chip"
          id="chip_5"
          viewBox="0 0 50 50"
        >
          <use href={`${chipsSprite}#chip_5`} width="100%" height="100%" />
        </SvgChip>

        <SvgChip
          onClick={e => props.handleChipsButtons(25)}
          className="chip"
          id="chip_25"
          viewBox="0 0 50 50"
        >
          <use href={`${chipsSprite}#chip_25`} width="100%" height="100%" />
        </SvgChip>

        <SvgChip
          onClick={e => props.handleChipsButtons(100)}
          className="chip"
          id="chip_100"
          viewBox="0 0 50 50"
        >
          <use href={`${chipsSprite}#chip_100`} width="100%" height="100%" />
        </SvgChip>

        <SvgChip
          onClick={e => props.handleChipsButtons(500)}
          className="chip"
          id="chip_500"
          viewBox="0 0 50 50"
        >
          <use href={`${chipsSprite}#chip_500`} width="100%" height="100%" />
        </SvgChip>

        <SvgChip
          onClick={e => props.handleChipsButtons(1000)}
          className="chip"
          id="chip_1000"
          viewBox="0 0 50 50"
        >
          <use href={`${chipsSprite}#chip_1000`} width="100%" height="100%" />
        </SvgChip>
      </GridChips>
    </>
  );

  const disabledChips = (
    <>
      <BetArea>
        <GoldenCirle>${props.currentBet}</GoldenCirle>
      </BetArea>
      <GridChips>
        <SvgChipDisabled className="chip" id="chip_1" viewBox="0 0 50 50">
          <use href={`${chipsSprite}#chip_1`} width="100%" height="100%" />
        </SvgChipDisabled>

        <SvgChipDisabled className="chip" id="chip_5" viewBox="0 0 50 50">
          <use href={`${chipsSprite}#chip_5`} width="100%" height="100%" />
        </SvgChipDisabled>

        <SvgChipDisabled className="chip" id="chip_25" viewBox="0 0 50 50">
          <use href={`${chipsSprite}#chip_25`} width="100%" height="100%" />
        </SvgChipDisabled>

        <SvgChipDisabled className="chip" id="chip_100" viewBox="0 0 50 50">
          <use href={`${chipsSprite}#chip_100`} width="100%" height="100%" />
        </SvgChipDisabled>

        <SvgChipDisabled className="chip" id="chip_500" viewBox="0 0 50 50">
          <use href={`${chipsSprite}#chip_500`} width="100%" height="100%" />
        </SvgChipDisabled>

        <SvgChipDisabled className="chip" id="chip_1000" viewBox="0 0 50 50">
          <use href={`${chipsSprite}#chip_1000`} width="100%" height="100%" />
        </SvgChipDisabled>
      </GridChips>
    </>
  );

  return (
    <>{props.gameState === GAMESTATE.BET ? enabledChips : disabledChips}</>
  );
}
