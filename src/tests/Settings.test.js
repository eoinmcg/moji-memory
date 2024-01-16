import { render, screen } from "@testing-library/react";

import Settings from "../components/Settings";
jest.mock('zzfx', () => jest.fn())

test('renders the game settings', () => {
  render(<Settings />);
    const exitButton = document.querySelector('a.btn');
  let href = exitButton.href.split('#').pop();
    expect(href).toEqual('intro');
});
