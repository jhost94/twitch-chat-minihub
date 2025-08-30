const id = setInterval(() => {if (docReady()) stop()}, 0);

function docReady() {
    return document.readyState === 'interactive' || document.readyState == 'complete';
}

function stop() {
    clearInterval(id);
    render();
}


function render() {
    const MAIN_DIV_ID = "main-div";
    const mainDiv = document.getElementById(MAIN_DIV_ID);

    mainDiv.setHTMLUnsafe("test");
}
