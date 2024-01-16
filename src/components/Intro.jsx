import { useState } from 'react';

import Button from './Button';

export default function Intro( { switchState }) {
  return (
    <>
    <h1 className="title center">Moji Memory</h1>
    <div className="icon pulse">🧠</div>

      <title>Moji Memory</title>

    <p className="center">
      <Button name="Play" href="#play" className="primary" />
    </p>
    <p className="center">
      <Button name="Settings" href="#settings" className="subtle" />
    </p>


      <footer>
        by <a href="https://eoinmcgrath.com/">eoinmcg</a>
      </footer>

    </>
  );
}
