import { render, screen } from "@testing-library/react";

import Card from '../components/Card';

import { deal }  from '../helpers/deck';

const cards = deal();


test('renders card', () => {
  render(<Card id={1} card={cards[1]} />);
});

