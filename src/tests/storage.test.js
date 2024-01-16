import Storage from '../helpers/storage'

let key = 'test';
Storage.del(key);

test('get non existant item', () => {
  let num = Storage.get(key);
  expect(num).toBe(null);
});


test('set & retrieve item', () => {
  let val = 'toast';
  Storage.set(key, val);
  let item = Storage.get(key);
  expect(item).toBe(val);
});


test('delete item', () => {
  Storage.del(key);
  let item = Storage.get(key);
  expect(item).toBe(null);
});


test('set and retrieve integer', () => {
  let key = 'numCards';
  Storage.set(key, 100);
  let item = Storage.get(key);
  expect(item).toBe(100);
});


test('set and retrieve boolean true', () => {
  Storage.set(key, true);
  let item = Storage.get(key);
  expect(item).toBe(true);
});


test('set and retrieve boolean false', () => {
  Storage.set(key, 'false');
  let item = Storage.get(key);
  expect(item).toBe(false);
});
