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

Create a binary vector (32 bits) 
```js
const getBinaryVector = (amountOfbites) => {
  // Your code
  return {
    turnOn: index => {},
    turnOff: index => {},
    toggle: index => {},
    get: index => {},
  }
}


const binaryVector = getBinaryVector(34);

binaryVector.turnOn(0);
binaryVector.get(0); // 1

binaryVector.turnOff(0);
binaryVector.get(0); // 0

binaryVector.turnOn(34);
binaryVector.toggle(33);
binaryVector.get(33); // 1
binaryVector.toggle(33);
binaryVector.get(33); // 0
binaryVector.get(34); // 1

```
[Soluction](getBinaryVector.md)

---
