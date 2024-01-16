import { shuffle, random } from "../helpers/array";

const sample = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

test('random element to be returned from array', () => {
  let rnd = random(sample);

  expect(sample).toContain(rnd);
});


test('shuffle array', () => {
  let a = sample.join('');
  let shuffled = shuffle(sample);
  let b = sample.join('');
  expect(a).not.toEqual(b);
});
