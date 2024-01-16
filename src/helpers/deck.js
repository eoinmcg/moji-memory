import Decks from '../data/decks.json';
import { shuffle, random } from './array';

window.deck = Decks;

/**
 * Returns an array of card objects
 *
 * @param {int}
 * @param {string}
 *
 * @returns {array}
 */
function deal(numCards = 8, deckName = false) {
  numCards /= 2;
  let cards = [];
  if (deckName === 'random') { deckName = false; }
  deckName = deckName || random(Object.keys(Decks));

  let shuffled = shuffle([...cleanDeck(deckName)]);
  //remove any dups
  shuffled = [...new Set(shuffled)];
  if (shuffled.length < numCards) { console.log('Not enough cards'); }
  shuffled.forEach((s) => {
    if (cards.length < numCards) {
      cards.push({
        hide: true,
        matched: false,
        emoji: s
      })
    }
  });

  let cardsCopy = JSON.parse(JSON.stringify(cards));
  return shuffle(cards.concat(cardsCopy));
}


/**
 * Checks for pair of matched cards in deck
 *
 * @param {array}
 *
 * @returns {array}
 */
function checkMatchedCards(cards) {
  let matched = [];
  cards.forEach((card, i) => {
    if (card.hide === false && card.matched === false) {
      matched.push({id: i, name: card.emoji});
    }
  });

  if (matched.length === 2 && matched[0].name === matched[1].name) {
    return [ matched[0].id, matched[1].id ];
  } else {
    return [];
  }
}


/**
 * Resets hide property for all unmatched cards
 *
 * @param {array}
 *
 * @returns {array}
 */
function hideUnmatchedCards(cards) {
  cards.forEach((card) => {
    if (!card.matched) {
      card.hide = true;
    }
  });
  return cards;
}


/**
 * Resets hide property for all unmatched cards
 *
 * @param {array}
 *
 * @returns {array}
 */
function checkFinished(cards) {
  let matched = 0;
  cards.forEach((card) => {
    if (card.matched) {
      matched++;
    }
  });

  return matched === cards.length;
}


/**
* Removes any variation selectors (blank chars)
*
* @param {string}
*
* @returns {array}
*/
function cleanDeck(deckName) {
  let deck = Decks[deckName].replace(/\s/g, '');
  return [...deck].filter((val) => {
    return val.charCodeAt(0) !== 65039;
  })
}

export { deal, checkMatchedCards, hideUnmatchedCards, checkFinished }
