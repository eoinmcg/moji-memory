import Button from './Button';

export default function Lose({matched, cards}) {
  return (
    <>
      <div className="alert lose">
      <h2>You Lose!</h2>
        Matched {matched * 2} of {cards} cards
       <Button name="Play Again" href="#replay" />
      </div>
    </>
  )
}
