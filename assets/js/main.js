const oldText = document.getElementById('old-text');
const newText = 'smk perjuangan bangsa ligung';
const originaltext = oldText.textContent;
let index = 0;

function changeText() {
    if( index < newText.length ){
        oldText.textContent = originaltext.substring(0, index) + newText[index];
        index++;
        requestAnimationFrame(changeText);
    }
}

changeText();