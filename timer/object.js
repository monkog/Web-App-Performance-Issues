class LeakingLogger {
    constructor() {
        this.log(0);
    }

    log(counter) {
        setTimeout(() => {
            console.log('Leaking...');
            if (counter < 10) {
                this.log(counter + 1);
            }
        }, 100);
    }
}

function createTimer() {
    new LeakingLogger();
}