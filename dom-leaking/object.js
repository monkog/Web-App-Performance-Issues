function removeDOMObject() {
    let element = document.getElementById('to-remove');
    if (element === null) {
        return;
    }

    document.body.removeChild(element);

    setInterval(() => {
        console.log(element.innerHTML);
    }, 100);
}