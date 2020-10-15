```js
const swapBits = value => {
  const EVEN_MASK = 0xaaaaaaaa; // ...101010  (32 bits)
  const ODD_MASK = EVEN_MASK >>> 1; // ...010101

  /*
    1. Select even bits of the value and convert them to odd ones.
    2. Select odd bits of value and convert to even ones.
    3. Combine the bits using "BINARY OR"
  */
  return (value & EVEN_MASK) >>> 1 | (value & ODD_MASK) << 1;
}
```
