```js
const binaryToDecimal = (binaryNumber) => {
  let result = 0;
  let length = binaryNumber.length;

  for (let i = 0; i < length; ++i) {
    result += Number(binaryNumber[length - i - 1]) * Math.pow(2, i);
  }

  return result;
}
```
