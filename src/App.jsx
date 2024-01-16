import { useEffect, useState } from 'react'

import Intro from './components/Intro';
import Settings from './components/Settings';
import Game from './components/Game';
import NotFound from './components/NotFound';
import Debug from './components/Debug';

export default function App() {

  let initHash = window.location.hash || 'intro';
  let [state, setState ] = useState(initHash);

  useEffect(() => {
    const runRouter = () => {
      switchState(window.location.hash);
    };

    window.addEventListener('hashchange', runRouter);

    return () => {
      window.removeEventListener('hashchange', runRouter);
    };
  }, []);

  function switchState(hash) {
    let newState = hash.replace('#', '');
    setState(newState);
  }

  function renderPlay() { return ( <Game /> ); }
  function renderSettings() { return ( <Settings /> ); }
  function renderIntro() { return ( <Intro /> ); }
  function renderNotFound() { return ( <NotFound />); }
  function renderDebug() { return ( <Debug />); }

  switch (state.replace('#', '')) {
    case 'replay':
      window.location.hash = 'play';
      return;
    case 'debug':
      return renderDebug();
    case 'settings':
      return renderSettings();
    case 'play':
      return renderPlay();
    case 'intro':
    case '':
      return renderIntro();
    default:
      return renderNotFound();
  }
}
