```js

const decimalToBinary = (decimalNumber) => {
  let result = "";
  let n = decimalNumber;
  while (n > 0) {
    result = n % 2 + result;   
    n = Math.trunc(n / 2);
  }

  return result;
} 
```
