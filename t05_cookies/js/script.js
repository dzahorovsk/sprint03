let key = 'my';
let end = 30;
let acookie = '';

// document.cookie = 'myz=3xcsadx4'; 
//проверка на существование более одной записи куки

checkCookie();

function checkCookie() {
    if (getCookie(key) === '') {
        document.getElementById('files').innerText = '[Empty]';
    }
    else {
        document.getElementById('files').innerText = '';
        addData(getCookie(key));
    }    
}

function getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
    return '';
}

function addCookies() {
    if (document.getElementById('cookies').value === '') {
        alert('It\'s empty. Try to input something in "Text input:"');
    }
    else {
        if (document.getElementById('files').innerText === '[Empty]') {
            document.getElementById('files').innerText = '';
            acookie = document.getElementById('cookies').value + '=';
            addData(acookie);
            setCookie(key, acookie, end);
        }
        else {
            acookie = getCookie(key) + document.getElementById('cookies').value + '=';
            addData(acookie);
            setCookie(key, acookie, end);
        }
        
    }
}

function addData(str) {
    document.getElementById('files').innerHTML = '';
    let arrStr = str.split('=');
    for (let i = 0; i < arrStr.length - 1; i++) {
        let divList = document.getElementById('files');
        let div = document.createElement('div');
        div.className = 'list';
        div.innerText = `--> ${arrStr[i]}`;
        divList.append(div);
    }
}

function clearCookies() {
    if (confirm('Are you sure?')) {
        delCookie(key);
        let divList = document.getElementById('files');
        divList.innerText = '';
        divList.innerHTML = '[Empty]';
    } 
}

function delCookie(cname) {
    const d = new Date();
    d.setTime(d.getTime() - (1 * 24 * 60 * 60 * 1000));
    let expires = ' expires = '+ d.toUTCString();
    document.cookie = cname + '=' + '' + ';' + expires;
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = 'expires ='+ d.toUTCString();
    document.cookie = cname + '=' + cvalue + '; ' + expires;
}