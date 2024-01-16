import Confetti from 'react-confetti';

export default function Win({ elapsed, reset }) {
  return (
    <>
    <Confetti />
    <div className="alert win">
      <h2>You Win!</h2>
      {`in ${elapsed} seconds`}
      <a className="btn" onClick={reset}>Play Again</a>
    </div>
    </>
  )
}
