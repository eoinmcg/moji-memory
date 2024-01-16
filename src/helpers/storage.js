import defaults from './defaults';

let fakeStorage = {
  type: 'fakeStorage',
  getItem: function() {},
  setItem: function() {},
};

let store = checkLocalStorage()
  ? window.localStorage : fakeStorage;

/**
 * Retrieve item from storage
 *
 * @param {string}
 *
 * @returns {mixed}
 */
const get = (key) => {
  let val = store.getItem(key);
  if (val === null && defaults[key]) {
    val = defaults[key];
  }
  return normalize(key, val);
}


/**
 * Saves item to storage
 *
 * @param {string}
 * @param {mixed}
 *
 * @returns {mixed}
 */
const set = (key, val) => {
  store.setItem(key, val);
}


/**
 * Removes item from storage
 *
 * @param {string}
 *
 * @returns null
 */
const del = (key) => {
  store.removeItem(key);
}

export default { get, set, del };

function checkLocalStorage(type = 'localStorage') {
  let storageType = window[type];
  try {
    storageType.setItem('test', 'test');
    storageType.removeItem('test');
    return true;
  } catch(e) {
    return false;
  }
}

function normalize(key, val) {
  if (key.includes('num')) {
    val = parseInt(val, 10);
  }

  if (val === 'true') { val = true; }
  if (val === 'false') { val = false; }

  if (val === 'undefined') { val = null; }
  if (val === undefined) { val = null; }

  return val;
}
