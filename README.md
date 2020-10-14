# js-tasks

Transform from a decimal number system to binary one
```js
const decimalToBinary = (decimalNumber) => {
// Your code
}

console.assert(decimalToBinary(5) === "101");
console.assert(decimalToBinary(798) === "1100011110");
```
[Soluction](decimalToBinary.md)

---

Transform from a binary number system to decimal one
```js
const binaryToDecimal = (binaryNumber) => {
// Your code
}

console.assert(binaryToDecimal("101") === 5);
console.assert(binaryToDecimal("1100011110") === 798);
```
[Soluction](binaryToDecimal.md)

---

Summarize two binary numbers
```js
const summarizeBinaries = (x, y) => {
// Your code
}

console.assert(
  summarizeBinaries("101", "11101") === "100010"
);
console.assert(
  summarizeBinaries("1100011110", "10101010101") === "100001110011"
);
```
[Soluction](summarizeBinaries.md)

---

Substruct two binary numbers
```js
const substructBinaries = (x, y) => {
// Your code
}

```
[Soluction](substructBinaries.md)

---

Return an array of each bit of a number (32 bits). You can use only `binary operators`, `for`, `while`. 
```js
const logBinary = (n) => {
// Your code
}

logBinary(1); //-> [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1];
logBinary(2**31); //-> [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
```
[Soluction](logBinary.md)

---
