// 'use strict'; // Uncomment this line to make JavaScript parsing mode more strict.

function createLocalObject() {
    const localObject = new Array(1000000).fill(1);
}

function createGlobalObject() {
    globalObject = new Array(1000000).fill(1);
}

function createGlobalObjectByThis() {
    this.globalThisObject = new Array(1000000).fill(1);
}

function createExplicitGlobalObject() {
    window.explicitGlobalObject = new Array(1000000).fill(1);
}

function createNonExistingGlobalObject() {
    if (typeof existingGlobalObject ===  'undefined') {
        existingGlobalObject = new Array(1000000);
    }

    existingGlobalObject.fill(1);
}