import { render, screen } from "@testing-library/react";

import Board from "../components/Board";
import Card from '../components/Card';

import { deal }  from '../helpers/deck';

const cards = deal();


test('renders the game board', () => {
  render(<Board cards={cards} />);
});
