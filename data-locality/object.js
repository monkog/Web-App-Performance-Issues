function logMixedArray() {
    const array = new Array(1000000);

    console.time('mixed timer');

    for (let col = 0; col < 1000; col++) {
        for (let row = 0; row < 1000; row++) {
            array[row * 1000 + col] = 1;
        }
    }

    console.timeEnd('mixed timer');
}

function logLinearArray() {
    const array = new Array(1000000);

    console.time('linear timer');

    for (let row = 0; row < 1000; row++) {
        for (let col = 0; col < 1000; col++) {
            array[row * 1000 + col] = 1;
        }
    }
    
    console.timeEnd('linear timer');
}