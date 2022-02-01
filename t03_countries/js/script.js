correctErrors();
function correctErrors() {
    let countLi = document.getElementById('countries').getElementsByTagName('li').length;
    let liList = document.getElementsByTagName('li');
    let liClass = ['americas', 'asia', 'oceania', 'europe', 'africa'];
        for (let i = 0; i < countLi; i++) {
        if (!liList[i].className || !liClass.includes(liList[i].className)) {
            liList[i].className = 'europe'; 
        }
        if (liList[i].getAttribute('data-feature') == null) {
            liList[i].setAttribute('data-feature', 'none'); 
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            div1.classList.add('feature', 'none');
            div2.classList.add('line');
            div2.style.top = '24px';
            div2.style.left = '62px';
            liList[i].innerText += '\n';
            liList[i].append(div2);
            liList[i].append(div1);
        }
        if (liList[i].getAttribute('data-feature') == 'mountains') {
            let div = document.createElement('div');
            div.classList.add('feature', 'mountains');
            liList[i].innerText += '\n';
            liList[i].append(div);
        }
        if (liList[i].getAttribute('data-feature') == 'beach mountains') {
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');
            div1.classList.add('feature', 'mountains');
            div2.classList.add('feature', 'beach');
            liList[i].innerText += '\n';
            liList[i].append(div2);
            liList[i].append(div1);
        }
        if (liList[i].getAttribute('data-feature') == 'beach') {
            let div = document.createElement('div');
            div.classList.add('feature', 'beach');
            liList[i].innerText += '\n';
            liList[i].append(div);
        }
    }
}