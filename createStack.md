```js
const createStack = size => {
  let index = -1;
  const items = Array(size);

  const pop = () => {
    const value = items[index];
    delete items[index];
    index -= 1;

    return value;
  };

  const push = value => {
    if (index === size - 1) throw Error('Stack overflow');
    index += 1;
    items[index] = value;
  };

  const peek = () => {
    return items[index];
  };


  return {
    push, pop, peek,
    get amount() {
      return index + 1;
    },
    __proto__: null
  }
}
```
