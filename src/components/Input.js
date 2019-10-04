import React from 'react';
import styled from 'styled-components';

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

const NewRoundButton = styled.button`
  font-size: 2rem;
`;

export default function Input(props) {
  const dealBtn = (
    <DealButton onClick={props.handleDealButton}>Deal</DealButton>
  );
  const hitBtn = <HitButton onClick={props.handleHitButton}>Hit</HitButton>;
  const standBtn = (
    <StandButton onClick={props.handleStandButton}>Stand</StandButton>
  );
  const splitBtn = (
    <SplitButton onClick={props.handleSplitButton}>Split</SplitButton>
  );
  const newRoundBtn = (
    <NewRoundButton onClick={props.handleNewRoundButton}>
      New Round
    </NewRoundButton>
  );
  const dblDownBtn = (
    <DblDownButton onClick={props.handleDblDownButton}>
      Double Down
    </DblDownButton>
  );

  return (
    <>
      <GridLeftButtons>
        {!props.buttonState.dealDisabled ? dealBtn : null}
        {!props.buttonState.hitDisabled ? hitBtn : null}
        {!props.buttonState.standDisabled ? standBtn : null}
        {!props.buttonState.newRoundDisabled ? newRoundBtn : null}
      </GridLeftButtons>
      <GridRightButtons>
        {!props.buttonState.splitDisabled ? splitBtn : null}
        {!props.buttonState.dblDownDisabled ? dblDownBtn : null}
      </GridRightButtons>
    </>
  );
}
