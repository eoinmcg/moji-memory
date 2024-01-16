/**
 * Shuffles array
 *
 * @param {array}
 *
 * @returns {array}
 */
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


/**
 * Returns random element from array
 *
 * @param {array}
 *
 * @returns {mixed}
 */
export function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}
