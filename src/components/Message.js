import React from 'react';
import styled from 'styled-components';

const MessageWrapper = styled.span`
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateY(-50%);
  transform: translateX(-50%);
  color: red;
  padding: 1rem;
  font-size: 4rem;
  border: 0.2rem solid gold;
  background-color: rgba(0, 0, 0, 0.8);
`;

export default function Message({ message, handleClearMessage }) {
  const showMessage = (
    <MessageWrapper onClick={handleClearMessage}>{message}</MessageWrapper>
  );

  return <>{message ? showMessage : null}</>;
}
