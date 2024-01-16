import Decks from '../data/decks.json';


export default function Debug() {

  let deck = Decks[deckType].replace(/\s/g, '');
  deck = [...deck].filter((val) => {
    return val.charCodeAt(0) !== 65039;
  })
  console.log(deck);
console.log(deck.map(s => s.charCodeAt(0)));
  return (
    <>
      <h1>Debug</h1>
      <div className="icon">🤷</div>
      <hr />
      <a className="btn" href="#intro">Back To Start</a>
    </>
  )
}

