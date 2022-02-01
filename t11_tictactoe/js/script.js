let count = 0;
let ver1 = '';
let ver2 = '';
let pl1 = document.getElementById('player1');
let pl2 = document.getElementById('player2');
let cells = document.querySelectorAll('.cell');

const win = ['1,2,3', '4,5,6', '7,8,9', '1,5,9', '3,5,7', '1,4,7', '2,5,8', '3,6,9'];

start();

function start() {
    count = 0;
    ver1 = '';
    ver2 = '';
    document.getElementById('counter').innerText = `${count}`;
    document.getElementById('sidebar').style.backgroundColor = 'rgb(216, 211, 211)';
    document.getElementById('winner').style.color = '';
    document.getElementById('numb').style.color = '';
    document.getElementById('counter').style.color = '';
    document.getElementById('winner').innerText = '';
    pl1.className = 'active';
    pl2.className = 'noactive';
    cells.forEach(element => {
        element.innerText = '';
        element.style.backgroundColor = 'rgb(216, 211, 211)';   
        element.addEventListener('click', click);
    });

}

function click(p) {
    let el = p.currentTarget.id;
    let cell = cells[el-1];
    if (cell.innerText === '' && count % 2 === 0 && count < 9) {
        pl2.className = 'active';
        pl1.className = 'noactive';
        cell.innerText = 'x';
        count++;
        document.getElementById('counter').innerText = `${count}`;
        ver1 += `${el}`; 
        if (count > 4) {
            winner(ver1);
        }
    }
    if (cell.innerText === '' && count % 2 === 1 && count < 8) {
        pl1.className = 'active';
        pl2.className = 'noactive';
        cell.innerText = 'o';
        count++;
        document.getElementById('counter').innerText = `${count}`;
        ver2 += `${el}`; 
        if (count > 5) {
            winner(ver2);
        }
    }
    if (count === 9) {
        count++;
        draw();
    }
}

function winner(ver) {
    win.forEach(element => {
        let arrstr = element.split(',');
        let numb = 0;
        for (let i = 0; i< arrstr.length; i++) {
            if (ver.includes(arrstr[i])) {
                numb++;
            }
        }
        if (numb === 3 && count % 2 === 1) {
            count = 11;
            won(1,element);
        }
        if (numb === 3 && count % 2 === 0) {
            count = 10;
            won(2,element);
        }
    });
}
    
function draw() {
    pl1.className = 'noactive';
    pl2.className = 'noactive';
    document.getElementById('sidebar').style.backgroundColor = 'chocolate';
    document.getElementById('winner').innerText = `It's a draw!`;
}

function won(num,dot) {
    let arrDot = dot.split(',');
    for (let i = 0; i < arrDot.length; i++) {
        let elem = arrDot[i];
        document.getElementById(`${elem}`).style.backgroundColor = 'green';        
    }
    pl1.className = 'noactive';
    pl2.className = 'noactive';
    document.getElementById('sidebar').style.backgroundColor = 'green';
    document.getElementById('winner').innerText = `Player ${num} won!`;
    document.getElementById('winner').style.color = 'white';
    document.getElementById('numb').style.color = 'white';
    document.getElementById('counter').style.color = 'white';
}