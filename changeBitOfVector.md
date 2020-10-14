```js
const changeBitOfVector = (index, bitVector) => {
  let arrIndex = index / 32 >> 0;
  let bitIndex = index % 32;
  
  bitVector[arrIndex] = ~(1 << bitIndex) & bitVector[arrIndex];
}
```
