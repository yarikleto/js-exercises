```js
const determineBits = (a, b) => {
  const BIT_MASK = a ^ b;
  let result = 0;
  
  for (let i = 0; i < 32; ++i) {
    result += 1 & (BIT_MASK >>> i);
  }
  return result;
};
```
