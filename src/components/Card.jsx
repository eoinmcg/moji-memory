export default function Card( { id, card, handleClick }) {
  let className = card.hide ? 'card' : 'card open';
  if (card.matched) className = 'card matched';

  return (
    <div key={id} data-id={id} className={className}>
      <div className="inner">
          <div className="face">
            <span>{ card.emoji }</span>
          </div>
          <div className="back" onClick={handleClick} data-id={id}>
            <span></span>
          </div>
      </div>
    </div>
  );

}
