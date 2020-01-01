function createChart() {
    let chart = document.getElementById('chart');

    for (let i = 0; i < 500; i++) {
        let bar = document.createElement('div');
        bar.classList.add('bar');
        chart.appendChild(bar);
    }
}


function forcedReflow() {
    let element = document.getElementById('message');

    console.time('forced reflow');
    let children = document.querySelectorAll('.bar');
    for(let i = 0; i < children.length; i++) {
        children[i].style.width = 200 +'px';
        requestAnimationFrame(() => {
            console.log(element.offsetWidth);
        });
    }

    console.timeEnd('forced reflow');
}

function noReflow() {
    let element = document.getElementById('message');
    let elementWidth = element.offsetWidth;

    console.time('no reflow');
    let children = document.querySelectorAll('.bar');
    for(let i = 0; i < children.length; i++) {
        children[i].style.width = (elementWidth - 1000) + 'px';
    }

    console.timeEnd('no reflow');
}