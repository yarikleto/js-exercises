```js
function createBitVector(amountOfbites) {
  const SIZE = 32;
  const BITS_LIMIT = SIZE * (2**SIZE - 1);

  if (amountOfbites < 0 || amountOfbites > BITS_LIMIT) {
    throw Error(`Amount of bites must be bigger than 0 and less than ${BITS_LIMIT}`);
  }

  const vector = new Uint32Array(((amountOfbites - 1) >>> 5) + 1);

  const validateIndex = index => {
    if (index >= 0 && index < amountOfbites) return;
    throw Error(`Index must be bigger than 0 and less than ${amountOfbites}`);
  }

  const get = index => {
    validateIndex(index);
    return vector[index >>> 5] >>> index & 1;
  }

  const turnOn = index => {
    validateIndex(index);
    vector[index >>> 5] |= (1 << index);
  };

  const toggle = index => {
    validateIndex(index);
    vector[index >>> 5] ^= (1 << index);
  }

  const turnOff = index => {
    validateIndex(index);
    vector[index >>> 5] &= ~(1 << index);
  };
  
  return {
    get,
    toggle,
    turnOn,
    turnOff
  };
}
```
