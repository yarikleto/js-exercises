```js
function createBitVector(amountOfbites) {
  const SIZE = 32;
  const BITS_LIMIT = SIZE * (2**SIZE - 1);

  if (amountOfbites < 0 || amountOfbites > BITS_LIMIT) {
    throw Error(`Amount of bites must be bigger than 0 and less than ${BITS_LIMIT}`);
  }

  const vector = new Uint32Array(((amountOfbites - 1) >>> 5) + 1);

  const getArrayIndex = index => index >>> 5; // Like Math.trunc(index / 2**5)
  const getBitIndex = index => index % SIZE;

  const get = index => {
    const arrIndex = getArrayIndex(index);
    const bitIndex = getBitIndex(index);
    
    return vector[arrIndex] >>> bitIndex & 1;
  };

  const turnOn = index => {
    const arrIndex = getArrayIndex(index);
    const bitIndex = getBitIndex(index);
    vector[arrIndex] = (1 << bitIndex) | vector[arrIndex];
  };

  const toggle = index => {
    const arrIndex = getArrayIndex(index);
    const bitIndex = getBitIndex(index);
    vector[arrIndex] = (1 << bitIndex) ^ vector[arrIndex];
  }

  const turnOff = index => {
    const arrIndex = getArrayIndex(index);
    const bitIndex = getBitIndex(index);
    vector[arrIndex] = ~(1 << bitIndex) & vector[arrIndex];
  };
  
  return {
    get,
    toggle,
    turnOn,
    turnOff
  };
}
```
