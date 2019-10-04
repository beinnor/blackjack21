import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Betting from './Betting';
import DealerHand from './DealerHand';
import PlayerHand from './PlayerHand';
import Input from './Input';
import Output from './Output';

import { calcScore, calcFullScore } from '../helpers/misc';
import { getDeck, shuffle } from '../helpers/deck';
import { GAMESTATE, WINNER } from '../helpers/states';

const GridContainer = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 'dealerPoints dealerCards dealerCards dealerCards' 'playerPoints playerCards playerCards playerCards' 'leftButtons betArea betArea rightButtons' 'chips chips chips cash';
`;

export default function App() {
  const [deck, setDeck] = useState(shuffle(getDeck()));
  const [dealerCards, setDealerCards] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerPoints, setDealerPoints] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [playerCash, setPlayerCash] = useState(100);
  const [currentBet, setCurrentBet] = useState(0);
  const [buttonState, setButtonState] = useState({
    dealDisabled: false,
    hitDisabled: true,
    standDisabled: true,
    splitDisabled: true,
    dblDownDisabled: true,
    newRoundDisabled: true,
  });

  const [gameState, setGameState] = useState(GAMESTATE.BET);

  const [winnerState, setWinnerState] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log(`Message: ${message}`);
  }, [message]);

  // Check for naturals, e.g. dealer or player has 21 on first deal
  useEffect(() => {
    if (gameState === GAMESTATE.CHECKWINNER) {
      let secretDealerPoints = calcFullScore(dealerCards);

      if (playerPoints === 21 && secretDealerPoints === 21) {
        setGameState(GAMESTATE.DECLAREWINNER);
        setDealerPoints(secretDealerPoints);
        setWinnerState(WINNER.TIE);
      } else if (playerPoints === 21) {
        setGameState(GAMESTATE.DECLAREWINNER);
        setDealerPoints(secretDealerPoints);
        setWinnerState(WINNER.PLAYER);
      } else if (secretDealerPoints === 21) {
        setGameState(GAMESTATE.DECLAREWINNER);
        setDealerPoints(secretDealerPoints);
        setWinnerState(WINNER.DEALER);
      } else {
        setGameState(GAMESTATE.PLAYERTURN);
        setButtonState({
          dealDisabled: true,
          hitDisabled: false,
          standDisabled: false,
          splitDisabled: true,
          dblDownDisabled: true,
          newRoundDisabled: true,
        });
      }
    }
  }, [gameState, playerPoints, dealerPoints, setWinnerState, dealerCards]);

  useEffect(() => {
    if (gameState === GAMESTATE.DECLAREWINNER) {
      dealerCards.filter(card => {
        if (card.hidden === true) {
          card.hidden = false;
        }
        return card;
      });
      setDealerCards([...dealerCards]);

      if (winnerState === WINNER.DEALER) {
        setMessage('PLAYER BUST');
      }
      if (winnerState === WINNER.PLAYER) {
        setMessage('DEALER BUST');
      }
      if (winnerState === WINNER.TIE) {
        setMessage('TIE');
      }
      setGameState(GAMESTATE.GAMEOVER);
      setButtonState({
        dealDisabled: true,
        hitDisabled: true,
        standDisabled: true,
        splitDisabled: true,
        dblDownDisabled: true,
        newRoundDisabled: false,
      });
    }
  }, [gameState, winnerState, dealerCards]);

  useEffect(() => {
    if (gameState === GAMESTATE.DEALERTURN) {
      let tempDealerCards = dealerCards;
      let tempDealerPoints = calcFullScore(tempDealerCards);

      while (tempDealerPoints < 17) {
        tempDealerCards.push(deck.pop());
        // TODO: legg til forsinkelse her eller noe.
        tempDealerPoints = calcFullScore(tempDealerCards);
      }
      setDealerCards(tempDealerCards);
      setDealerPoints(tempDealerPoints);
      if (tempDealerPoints > 21) {
        setWinnerState(WINNER.PLAYER);
      } else if (tempDealerPoints > playerPoints) {
        setWinnerState(WINNER.DEALER);
      } else if (tempDealerPoints < playerPoints) {
        setWinnerState(WINNER.PLAYER);
      } else if (tempDealerPoints === playerPoints) {
        setWinnerState(WINNER.TIE);
      }

      setGameState(GAMESTATE.DECLAREWINNER);
    }
  }, [gameState, dealerCards, deck, playerPoints]);

  const handleDealButton = () => {
    setGameState(GAMESTATE.DEAL);
    setButtonState({
      dealDisabled: false,
      hitDisabled: true,
      standDisabled: true,
      splitDisabled: true,
      dblDownDisabled: true,
      newRoundDisabled: true,
    });

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

    const tempDealerPoints = calcScore(tempDealerCards);
    const tempPlayerPoints = calcScore(tempPlayerCards);
    setDealerPoints(tempDealerPoints);
    setPlayerPoints(tempPlayerPoints);

    setGameState(GAMESTATE.CHECKWINNER);
  };

  const handleHitButton = () => {
    let tempPlayerCards = playerCards;

    tempPlayerCards.push(deck.pop());

    setPlayerCards(tempPlayerCards);

    const tempPlayerPoints = calcScore(tempPlayerCards);

    setPlayerPoints(tempPlayerPoints);

    if (tempPlayerPoints > 21) {
      setGameState(GAMESTATE.DECLAREWINNER);
      setWinnerState(WINNER.DEALER);
      setButtonState({
        dealDisabled: true,
        hitDisabled: true,
        standDisabled: true,
        splitDisabled: true,
        dblDownDisabled: true,
        newRoundDisabled: false,
      });
    }
  };

  const handleStandButton = () => {
    setGameState(GAMESTATE.DEALERTURN);
    setButtonState({
      dealDisabled: true,
      hitDisabled: true,
      standDisabled: true,
      splitDisabled: true,
      dblDownDisabled: true,
      newRoundDisabled: true,
    });
  };

  const handleSplitButton = () => {};

  const handleDblDownButton = () => {};

  const handleNewRoundButton = () => {
    switch (winnerState) {
      case WINNER.DEALER:
        // nothing happens, player just looses bet
        break;
      case WINNER.PLAYER:
        setPlayerCash(playerCash + currentBet * 2);
        break;
      case WINNER.TIE:
        setPlayerCash(playerCash + currentBet);
        break;
      default:
        break;
    }

    setDeck(shuffle(getDeck()));
    setDealerCards([]);
    setPlayerCards([]);
    setDealerPoints(0);
    setPlayerPoints(0);
    setCurrentBet(0);
    setButtonState({
      dealDisabled: false,
      hitDisabled: true,
      standDisabled: true,
      splitDisabled: true,
      dblDownDisabled: true,
      newRoundDisabled: true,
    });
    setWinnerState(null);
    setMessage('');
    setGameState(GAMESTATE.BET);
  };

  const handleChipsButtons = val => {
    if (playerCash >= val) {
      setCurrentBet(currentBet + val);
      setPlayerCash(playerCash - val);
    }
  };

  const handleClearBet = () => {
    setPlayerCash(playerCash + currentBet);
    setCurrentBet(0);
  };

  const inputProps = {
    buttonState,
    handleDealButton,
    handleHitButton,
    handleStandButton,
    handleSplitButton,
    handleDblDownButton,
    handleNewRoundButton,
  };

  const outputProps = {
    dealerPoints,
    playerPoints,
    playerCash,
  };
  const bettingProps = {
    handleChipsButtons,
    handleClearBet,
    currentBet,
    gameState,
  };
  return (
    <>
      <GridContainer>
        <Betting {...bettingProps} />
        <Input {...inputProps} />
        <Output {...outputProps} />
        <DealerHand cards={dealerCards} />
        <PlayerHand cards={playerCards} />
      </GridContainer>
    </>
  );
}
