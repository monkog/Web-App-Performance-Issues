class LeakingLogger {
    constructor() {
        this.log(0);
    }

    log(counter) {
        setInterval(() => {
            console.log('Leaking...');
            if (counter < 10) {
                this.log(counter + 1);
            }
        }, 500);
    }
}

function createInterval() {
    new LeakingLogger();
}