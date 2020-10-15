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

Create a [bit vector](https://en.wikipedia.org/wiki/Bit_array) (each item has 32 bits)
```js
const createBitVector = (amountOfbites) => {
  // Your code
  return {
    turnOn: index => {},
    turnOff: index => {},
    toggle: index => {},
    get: index => {},
  }
}


const bitVector = createBitVector(34);

bitVector.turnOn(0);
bitVector.get(0); // 1

bitVector.turnOff(0);
bitVector.get(0); // 0

bitVector.turnOn(33);
bitVector.toggle(32);
bitVector.get(32); // 1
bitVector.toggle(32);
bitVector.get(32); // 0
bitVector.get(33); // 1

```
[Soluction](createBitVector.md)

---
