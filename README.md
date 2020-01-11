# Performance issues in web applications

This repository contains a number of simple examples that will show performance and memory issues that may occur in web applications. Each example contains a walthrough of how to identify such issue using Chrome DevTools.

Remember to run examples in the *incognito*. Alternatively you can clear your cache first and disable all Chrome extensions, as they may create noise in the performance measurements.

## Memory leaks

1. [DOM leaking](./dom-leaking/README.md)
2. [Accidental global objects](./global-object/README.md)
3. [Closure leaking](./closure/README.md)
4. [Forgotten Callback / Timer](./timer/README.md)

## Performance issues

1. [Data locality](./data-locality/README.md)
2. [Forced reflow](./forced-reflow/README.md)