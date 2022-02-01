const images = [
    'url("assets/images/img1.jpg")', 
    'url("assets/images/img2.jpg")', 
    'url("assets/images/img3.jpg")',
];
let index = 0; //переменная содержит индекс контейнера к которому идет обращение
let sliderId; //переменная идентификатора таймера

boxList(); //формирует контейнеры с картинками на бекграунде
startSlider();
sliderImages(); 
//запускает функцию startSlider() с задержкой времени 
//с присвоением переменной значения идентификатора таймера


//остановка прокрутки при наведении на левую кнопку
document.getElementById('leftButton').onmouseover = function() {
    clearInterval(sliderId);
}
//запуск прокрутки при наведении на левую кнопку
document.getElementById('leftButton').onmouseleave = function() {
    sliderImages();
}

//остановка прокрутки при наведении на правую кнопку
document.getElementById('rightButton').onmouseover = function() {
    clearInterval(sliderId);
}
//запуск прокрутки при наведении на правую кнопку
document.getElementById('rightButton').onmouseleave = function() {
    sliderImages();
}
//запуск функции прохода по контейнеру
function sliderImages() {
    sliderId = setInterval(startSlider, 3000);
}
//останавливает вызов функции startSlider() передает индекс контейнера
//для отображения предидущего тому, что активен сейчас
//если активен первый с индексом [0], то устанавливает индекс на последний элемент
function scrollToLeft() {
    clearInterval(sliderId);
    if (index > 0) {
        index --;   
    }
    else {
        index = images.length - 1;
    }
    displayImage(index);
}
//останавливает вызов функции startSlider() передает индекс контейнера
//для отображения следующего за тем, что активен сейчас
function scrollToRight() {
    clearInterval(sliderId);
    index ++;
    displayImage(index);
}
//запускает проход по контейнерам передавая им индекс
function startSlider() {
    displayImage(index);
    index++;
}
//проходит по всем контейнерам с бекграундом 
//в зависмости от индекса контейнера назначает ему класс для отображения
//всем остальным убирает этот класс
function displayImage(id) {
    let box = document.querySelectorAll('.image');
    box.forEach((element, key) => {
        if (key === id % images.length) {
            element.classList.add('active');
        }       
        else {
            element.classList.remove('active');
        }
    });
}
//формирует создание контейнеров в зависимости от количества картинок
// и передает значение бекграунда
function boxList() {
    images.forEach((element, i)  => { 
        addBox(element);
    });
}
//созадет контейнер с бекграундом и классом
//и вставляет в контейнер окна вывода
function addBox(id) {
    let box = document.createElement('div');
    let imageBox = document.getElementsByClassName('container');
    box.className = 'image';
    box.style.backgroundImage = id;
    imageBox[0].append(box);       
}