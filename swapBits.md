```js
const swapBits = value => {
  const size = (Math.log2(value) + 1) ^ 0;
  const MASK = Math.pow(2, size) - 1;

  return value ^ MASK;
};
```
