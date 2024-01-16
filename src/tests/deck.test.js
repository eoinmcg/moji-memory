import Decks from '../data/decks.json';
import * as deck from '../helpers/deck'

test('that we have some decks to play with', () => {
  let keys = Object.keys(Decks);
  expect(Decks).toBeDefined();
  expect(keys.length).toBeGreaterThan(1);
  expect(keys[0].length).toBeGreaterThan(4);

});


test('deal a new deck of cards', () => {
  let numCards = 8;
  let cards = deck.deal(numCards);
  expect(cards.length).toBe(numCards);
  numCards = 16;
  cards = deck.deal(numCards);
  expect(cards.length).toBe(numCards);
});


test('check matched cards in deck', () => {
  let cards = deck.deal();
  let check = deck.checkMatchedCards(cards);
  expect(check.length).toBe(0);
  cards = match2Cards(cards);
  check = deck.checkMatchedCards(cards);
  expect(check.length).toBe(2);
});

test('ensure unmatched cards are hidden', () => {
  let cards = deck.deal();
  cards[0].hide = false;
  cards = deck.hideUnmatchedCards(cards);
  let [hidden, matched] = countHiddenMatched(cards);
  expect(hidden).toBe(cards.length);

  cards = match2Cards(cards);
  let check = deck.checkMatchedCards(cards);
  check.forEach((k) => {
    cards[k].matched = true;
  })
  cards = deck.hideUnmatchedCards(cards);
  [hidden, matched] = countHiddenMatched(cards);
  expect(hidden).toBe(cards.length - 2);
});

test('game complete check', () => {
  let cards = deck.deal();
  let finished = deck.checkFinished(cards);
  expect(finished).toBe(false);

  Object.keys(cards).forEach((k) => {
    cards[k].matched = true;
  });
  finished = deck.checkFinished(cards);
  expect(finished).toBe(true);

});


function match2Cards(cards) {
  let match = cards[0].emoji;
  Object.keys(cards).forEach((k) => {
    let card = cards[k];
    if (card.emoji === match) {
      card.hide = false;
    }
  });
  return cards;
}

function countHiddenMatched(cards) {

  let hidden = 0;
  let matched = 0;
  Object.keys(cards).forEach((k) => {
    let card = cards[k];
    if (card.hide) hidden++;
    if (card.matched) matched++;
  });
  return [hidden, matched];
}
