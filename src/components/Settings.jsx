import { useState } from 'react';

import Button from './Button';
import Decks from '../data/decks.json'
import Storage from  '../helpers/storage';

export default function Settings() {

  let initCards = Storage.get('numCards');
  let [numCards, setNumCards] = useState(initCards);
  let initSecs = Storage.get('numSecs');
  let [numSecs, setNumSecs] = useState(initSecs);
  let [deck, setDeck] = useState(Storage.get('deck'));
  let [audio, setAudio] = useState(Storage.get('audio'));

  return (
    <>
    <h1 className="title center">Settings</h1>
    <div className="row">
      <label htmlFor="numCards">Number cards: {numCards}</label>
      <input id="numCards"
        type="range"
        min="6" max="42" step="6"
        name="cards"
        value={numCards}
        onChange={(e) => {
          let val = e.target.value;
          setNumCards(val);
          Storage.set('numCards', val);
        }}
      />
    </div>


      <div className="row">
        <label htmlFor="deck">Cards:</label>
          <select id="deck" name="deck"
            value={deck}
            onChange={(e) => {
              let val = e.target.value;
              setDeck(val);
              Storage.set('deck', val);
            }}
          >
            <option value="random">❓ Random</option>
            {Object.keys(Decks).map((k, i) => {
              let emoji = [...Decks[k]][0];
              return (
                <option key={i} value={k}>{emoji} {k}</option>
              )
            })}
          </select>
      </div>

      <div className="row checkbox">
        <label htmlFor="audio">Audio:</label>
        <input type="checkbox" id="audio" name="audio" checked={audio}
          onChange={(e) => {
            let val = e.target.checked;
            setAudio(val);
            Storage.set('audio', val);
          }}
        />
      </div>

      <Button name="Exit" href="#intro" className="subtle" />
    </>
  );
}
