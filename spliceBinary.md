```js
const spliceBinary = (mainBinary, donorBinary, start, end) => {
  const SIZE = end - start;
  
  return (
    /*
      Creating a mask of bits (example):
      2**5 = 0b100000
      0b100000 - 1 = 0b11111
      0b11111 << 2 = 0b1111100
      ~0b1111100 = 0b0000011
    */
    ~((2**(SIZE + 1) - 1) << start)
    // Reset bits from START to END by using a bit mask
    & mainBinary
    // Reset bits from a high bit to the difference between END and START
    | (donorBinary << (31 - SIZE) >>> (31 - SIZE - start))
  );
}

```
