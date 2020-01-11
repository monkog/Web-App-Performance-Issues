# Forgotten Callback / Timer

The use of *setInterval* and callbacks is common in JavaScript. What's also common is forgetting to release references to such objects. Even when their owner is no longer referenced, references to callbacks and timers stay in the memory. This way their owner is prevented from being disposed as well.

## How to prevent and fix such problems

### Timers

Each call to *setInterval* or *setTimeout* returns a numeric value. This value is the identifier of the handle thet can be used to identify the timer. Using this number you can easily clear timers when they are no longer necessary.

```javascript
const timeoutId = setTimeout(() => {
    console.log('Logging to the console.');
}, 500);

const intervalId = setInterval(() => {
    console.log('Logging to the console.');
}, 500);

clearTimeout(timeoutId);
clearInterval(intervalId);
```

### Callbacks

Setting a callback does not return any value. Adding and removing needs to by passing the same handler to both add and remove methods.

```javascript
document.addEventListener('click', onClickHandler);
document.removeEventListener('click', onClickHandler);
```

[Go to top](#forgotten-callback--timer)  
[Go to main page](../README.md)
