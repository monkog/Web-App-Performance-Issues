class LeakingLogger {
    constructor() {
        this.log(0);
    }

    log(counter) {
        setTimeout(() => {
            console.log('Leaking...');
            if (counter < 5) {
                this.log(counter + 1);
            }
        }, 100);
    }
}

function createTimer() {
    new LeakingLogger();
}