const head = [
    'Planet',
    'Diameter, km',
    'Day, in Earth days',
    'Year, in Earth years',
    'Moons',
    'Distance from Sun, AU'
];

const mercury = {0: 'Mercury', 1: '4879', 2: '58.6', 3: '0.24', 4: '0', 5: '0.4'};
const venus = {0: 'Venus', 1: '12100', 2: '243', 3: '0.6', 4: '0', 5: '0.7'};
const earth = {0: 'Earth', 1: '12742', 2: '1', 3: '1', 4: '1', 5: '1'};
const mars = {0: 'Mars', 1: '6780', 2: '1.03', 3: '1.88', 4: '2', 5: '1.5'};
const jupiter = {0: 'Jupiter', 1: '142984', 2: '0.41', 3: '11.86', 4: '79', 5: '5.2'};
const saturn = {0: 'Saturn', 1: '116464', 2: '0.45', 3: '29.45', 4: '62', 5: '9.5'};
const uranus = {0: 'Uranus', 1: '50724', 2: '0.72', 3: '84', 4: '27', 5: '19.8'};
const neptune = {0: 'Neptune', 1: '49244', 2: '0.67', 3: '164.81', 4: '14', 5: '30.1'};

let arr = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune];

let index = 0;

addTable();



function addTable() {
    let tableBox = document.getElementById('placeholder');
    let tbl = document.createElement('table');
    tableBox.innerHTML = '';
    tbl.className = 'tablePlanet';
    for(let i = 0; i < 9; i++){
        let tr = tbl.insertRow();
        for(let j = 0; j < 6; j++){
            let td = tr.insertCell();
            let pl = arr[i-1];
            if (i == 0) {
                td.className = 'tableHead';
                td.appendChild(document.createTextNode(`${head[j]}`));
                td.onclick = function() {
                    tableClick(j);
                };
            }
            else {
                td.appendChild(document.createTextNode(`${pl[j]}`));
                td.className = 'tableCell';
            }
        }
    }
    tableBox.appendChild(tbl);

    function tableClick(params) {
        if (params === 0) {
            if (index === 0) {
                arr.sort((a, b) => a[params] > b[params] ? 1 : -1);
                addTable(); 
                document.getElementById('notification').innerHTML = `Sorting by ${head[params]}, order: "ASC"`;
                index = 1;
            }
            else {
                arr.sort((a, b) => a[params] < b[params] ? 1 : -1);
                addTable();
                document.getElementById('notification').innerHTML = `Sorting by ${head[params]}, order: "DESC"`;
                index = 0;
            }
        } 
        else {
            if (index === 0) {
                arr.sort((a, b) => +a[params] > +b[params] ? 1 : -1);
                addTable(); 
                document.getElementById('notification').innerHTML = `Sorting by ${head[params]}, order: "ASC"`;
                index = 1;
            }
            else {
                arr.sort((a, b) => +a[params] < +b[params] ? 1 : -1);
                addTable();
                document.getElementById('notification').innerHTML = `Sorting by ${head[params]}, order: "DESC"`;
                index = 0;
            }
        } 
    } 
}