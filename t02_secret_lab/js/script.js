function transformation() {
    let box = document.getElementById('lab');
    let sub = document.getElementById('subject');
    if (sub.innerText == 'Human') {
        sub.style.fontSize = '130px';
        sub.style.letterSpacing = '6px';
        sub.innerText = 'Beast';
        box.style.background = '#70964b';
    }
    else {
        sub.style.fontSize = '60px';
        sub.style.letterSpacing = '2px';
        sub.innerText = 'Human';
        box.style.background = '#ffb300';
    }
}