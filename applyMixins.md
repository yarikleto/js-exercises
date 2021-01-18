```js
const applyMixins = (derivedCtor, baseCtors) => {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            let descriptor = Object.getOwnPropertyDescriptor(baseCtor.prototype, name)
            Object.defineProperty(derivedCtor.prototype, name, descriptor);
        });
    });
}
```
