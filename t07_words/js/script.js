const obj = {
    words: 'newspapers newspapers  books magazines'
};

console.log(obj);

addWords(obj, 'radio newspapers   ');
console.log(obj); // {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); // {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); // {words: "tv internet"}

function addWords(obj, wrds) {
    let arrObj = Object.values(obj);
    let arrWrds = arrObj[0].split(' ');
    let resWrds = [];
    for (let element of arrWrds.concat(wrds.split(' '))) {
        if (!resWrds.includes(element) && element != '') {
            resWrds.push(element);
        }
    }
    obj.words = resWrds.join(' ');
}

function removeWords(obj, wrds) {
    let arrObj = Object.values(obj);
    let arrWrds = arrObj[0].split(' ');
    let arrDel = wrds.split(' ');
    for (let i = 0; i < arrWrds.length; i++) {
        arrDel.forEach(element => {
            if (arrWrds[i] === element) {
                arrWrds.splice(i, 1);
            }    
        });    
    }
    obj.words = arrWrds.join(' ');
}

function changeWords(obj, oldWrds, newWrds) {
    let arrObj = Object.values(obj);
    let arrWrds = arrObj[0].split(' ');
    let arrDel = oldWrds.split(' ');
    for (let i = 0; i < arrWrds.length; i++) {
        arrDel.forEach(element => {
            if (arrWrds[i] === element) {
                arrWrds.splice(0, arrWrds.length, newWrds);
            }    
        });    
    }
    obj.words = arrWrds.join();
}