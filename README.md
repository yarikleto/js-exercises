# JS exercises

Transform from a decimal number system to binary one
```js
const decimalToBinary = decimalNumber => {
// Your code
}

console.assert(decimalToBinary(5) === "101");
console.assert(decimalToBinary(798) === "1100011110");
```
[Soluction](decimalToBinary.md)

---

Transform from a binary number system to decimal one
```js
const binaryToDecimal = binaryNumber => {
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
const createBitVector = amountOfbites => {
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

bitVector.turnOn(34); // Error: Index must be bigger than 0 and less than 34

```
[Soluction](createBitVector.md)

---

Splice a chunk of a donor binary to main one.
Need to select bits from `0` to `n` of `donorBinary` and insert into `mainBinary` from `start` to `end`.
`n` is difference between `start` and `end` (inclusively).

```js
const spliceBinary = (mainBinary, donorBinary, start, end) => {
  // Your code
}

/*
1. Selected first 4 bits of donorBinary (0b1101).
2. Insert into mainBinary from 3 to 6.
*/
spliceBinary(0b0, 0b1101, 3, 6).toString(2) //-> "1101000"

spliceBinary(0b10100100111101100, 0b111010, 3, 9).toString(2) //-> "10100100111010100"
spliceBinary(0b1111111111, 0b0, 2, 5).toString(2) //-> "1111000011"

```
[Soluction](spliceBinary.md)

---

Write a function that determines the number of bits that can be changed in order to get `b` from number `a`.

```js
const determineBits = (a, b) => {
  // Your code
};

determineBits(0b11, 0b0); //-> 2
determineBits(0b1001, 0b101); //-> 2
determineBits(0b11111, 0b10111); //-> 1
determineBits(0b1, 0b1); //-> 0
```
[Soluction](determineBits.md)

---

Write an algorithm that changes the even bits to odd ones.
Loops cannot be used (`for`, `while`, etc.)
```js
const swapBits = value => {
  // Your code
};

swapBits(0b101010).toString(2); //-> "10101"
swapBits(0b10101).toString(2); //-> "101010"
```
[Soluction](swapBits.md)

---

Write a [stack](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)) with limited size.
```js
const createStack = size => {
  // Your code
}

const stack = createStack(3);
stack.push(1);
stack.push(2);
stack.push(3);
stack.peek(); //-> 3
stack.pop(); //-> 3
stack.peek(); //-> 2

stack.push(4);
stack.push(5); //-> Error: Stack overflow
```
[Soluction](createStack.md)

---
