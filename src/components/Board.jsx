import Card from './Card';

export default function Board({cards, handleClick }) {


  return (
    <>
      <div className={'board cards-' + cards.length}>
        {cards.map((card, i) => {
          return (
            <Card key={i} id={i} card={card} handleClick={handleClick} />
          )
        })}
      </div>
    </>
  )
}
