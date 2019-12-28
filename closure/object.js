function createLeakingClosure() {
    const localObject = new Array(1000000).fill(1);
    setInterval(() => {
        console.log(localObject.length);
    }, 100);
}