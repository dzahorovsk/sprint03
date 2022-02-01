let aStorage = '';
let key = 'my';

checkStorage();

function checkStorage() {
    if (localStorage.length !== 0 ) {
        addData(localStorage.getItem(key));
    }
    else {
        document.getElementById('files').innerText = '[Empty]';
    }    
}

function addStorage() {
    if (document.getElementById('storage').value === '') {
        alert('It\'s empty. Try to input something in "Text input:"');
    }
    else {
        if (document.getElementById('files').innerText === '[Empty]') {
            document.getElementById('files').innerText = '';
            aStorage = document.getElementById('storage').value + time() + '=';
            addData(aStorage);
            localStorage.setItem(key, aStorage);
            document.getElementById('storage').value = '';
        }
        else {
            aStorage = localStorage.getItem(key) + document.getElementById('storage').value + time() + '=';
            addData(aStorage);
            localStorage.setItem(key, aStorage);
            document.getElementById('storage').value = '';
        }
    }
}

function addData(str) {
    document.getElementById('files').innerHTML = '';
    let arrStr = str.split('=');
    for (let i = 0; i < arrStr.length-1; i++) {
        let divList = document.getElementById('files');
        let div = document.createElement('div');
        div.className = 'list';
        div.innerText = `--> ${arrStr[i]}`;
        divList.append(div);
    }
}

function clearStorage() {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        let divList = document.getElementById('files');
        divList.innerText = '';
        divList.innerHTML = '[Empty]';
    } 
}

function time() {
    const d = new Date();
    let second = d.getSeconds();
    let minute = d.getMinutes();
    let hour = d.getHours();
    let year = d.toLocaleDateString();
    second = (second < 10) ? '0' + second : second;
    minute = (minute < 10) ? '0' + minute : minute;
    hour = (hour < 10) ? '0' + hour : hour;
    return ` [${year}, ${hour}:${minute}:${second}]`;
}