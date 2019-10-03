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

export default function Input() {
  return (
    <>
      <GridLeftButtons>
        <HitButton>Hit</HitButton>
        <StandButton>Stand</StandButton>
        <DealButton>Deal</DealButton>
      </GridLeftButtons>
      <GridRightButtons>
        <SplitButton>Split</SplitButton>
        <DblDownButton>Double Down</DblDownButton>
      </GridRightButtons>
    </>
  );
}
