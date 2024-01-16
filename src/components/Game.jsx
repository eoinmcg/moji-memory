import { useState, useEffect, useRef } from 'react'

import { deal,
  hideUnmatchedCards,
  checkMatchedCards,
  checkFinished } from '../helpers/deck'

import Storage from '../helpers/storage';
import sfx from '../helpers/sfx';

import Board from './Board';
import Win from './Win';

import closeIcon from '../assets/close.svg';

export default function Game() {
  const deck = Storage.get('deck');
  const numCards = Storage.get('numCards');

  let [cards, setCards] = useState(deal(numCards, deck));
  let [open, setOpen] = useState(0);
  let [matched, setMatched] = useState(0);
  let [gameState, setGameState] = useState('playing');
  let [elapsed, setElapsed] = useState(0);
  let clearTimerRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      if (gameState === 'playing') {
        setElapsed((prevElapsed) => prevElapsed + 1);
      }
    }, 1000);

    return () => clearInterval(interval);

  }, [gameState]);

  useEffect(() => {
    document.body.className = gameState
  }, [gameState]);

  function resetOpen() {
    let newCards = cards;
    setOpen(0);
    setCards(hideUnmatchedCards(newCards));
  }

  function updateMatched(matchedCards) {
    let newCards = cards;
    newCards[matchedCards[0]].matched = true;
    newCards[matchedCards[1]].matched = true;
    let newMatched = matched + 1;
    setOpen(0);
    setCards(newCards);
    setMatched(newMatched);
  }

  function handleClick(e) {
    if (open >=2 ) { return; }

    const id = parseInt(e.target.dataset.id, 10);
    let newCards = cards;

    // show open card
    newCards[id].hide = false;
    setOpen(open += 1);
    setCards(newCards);

    // check for matched
    if (open === 2) {
      let checkMatch = checkMatchedCards(newCards);
      if (checkMatch.length) {
        sfx('match');
        updateMatched(checkMatch);
      }
      else {
        sfx('nope');
        clearTimerRef.current = setTimeout(resetOpen, 1000);
      }
    }
  }

  function updateGameState(state) {
    if (state == 'win') {
      sfx('win');
    }
    setGameState(state);
  }

  function resetGame() {
    document.body.classList.add('hide');
    window.setTimeout(() => {
      setOpen(0);
      setMatched(0);
      setCards(deal(numCards, deck));
      setGameState('playing');
      setElapsed(0);
      document.body.classList.remove('hide');
    }, 500);
  }

  if (gameState === 'playing' && checkFinished(cards)) {
    updateGameState('win')
  }

  return (
    <>
      {gameState === 'win' && <Win elapsed={elapsed} reset={resetGame} />}

      <div className="info">
        <span className={gameState === 'playing' ? 'timer' : 'timer stopped'}>{ elapsed }</span>
        <a href="#"> <img src={closeIcon} alt="" className="svg-icon close" /> </a>
      </div>

      <div className={'game ' + gameState}>
        <Board cards={cards} handleClick={handleClick} />
      </div>
    </>
  );
}
