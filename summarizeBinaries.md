```js
const summarizeBinaries = (x, y) => {
  const LAST_INDEX_OF_X = x.length - 1;
  const LAST_INDEX_OF_Y = y.length - 1;
  let result = [];
  let i = 0;

  while (x[LAST_INDEX_OF_X - i] || y[LAST_INDEX_OF_Y - i]) {
    let validX = Number(x[LAST_INDEX_OF_X - i]) || 0;
    let validY = Number(y[LAST_INDEX_OF_Y - i]) || 0;
    let nextDigit = result[i] || 0;
    let sum = validX + validY + nextDigit;

    result[i] = sum % 2;
    if (sum > 1) result[i + 1] = 1;
    i += 1;
  }

  return result.reverse().join("");
}
```
