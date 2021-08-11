// Упражнения. Часть 1.

// 1. Добавьте на страницу элемент div, установите ему класс container. Найдите этот элемент в DOM по классу как посредством getElementsByClassName. так и с помощью querySelector. Повторите тот же процесс но установив другой элемент div с атрибутом id равным main_containter

let element1 = document.getElementsByClassName('.container');
let element2 = document.querySelector('.container');
let element3 = document.getElementsByClassName('#main_container');
let element4 = document.querySelector('#main_container');

console.log(element1, element2, element3, element4);


// 2. Создать div и стилизовать его динамически в js коде. Для этого:
// Используйте свойство className
// Используйте свойство classList
// Установив id элемента


let div2 = document.createElement('div');

div2.className = 'div-2a';
div2.classList.add('div-2b');
div2.id = 'div-2c';

document.body.appendChild(div2);

// 3. Создайте div с заданной шириной и измените ему стили используя свойство style. Чем этот способ отличается от стилизации с помощью установки классов и id?

let div3 = document.createElement('div');

div3.style.width = '200px';
div3.style.height = '300px';
div3.style.background = 'red';

document.body.appendChild(div3);

// 4. Создайте список из 10 элементов и в JavaScript коде измените стиль каждого второго элемента таким образом, чтобы текст элемента стал жирным, а цвет фона серым

for (let i = 0; i < 10; i++) {
    let span4 = document.createElement('span');
    document.body.appendChild(span4);
    span4.classList.add('span-4');
    span4.textContent = " 4 text ";
}

let spanSpan4 = document.querySelectorAll('.span-4')


for (let i = 1; i < 11; i = i + 2) {
    spanSpan4[i].style.fontWeight = 'bold';
    spanSpan4[i].style.background = 'gray';
}

console.log(spanSpan4)

// 5. Реализуйте функцию, которая в качестве параметра принимает id инпута и возвращает значение в этом input’е

function getValueInput(idInput) {
    return document.getElementById(idInput).value;
}

console.log(getValueInput('input5'));

// 6. Реализуйте функцию, которая делает input с переданным в неё классом неактивным

function inactiveInput(classInput) {
    document.querySelector(classInput).disabled = true;
}

inactiveInput(".input6");

// 7. Добавьте элементу div в качестве потомков два элемента span с произвольным текстовым содержимым

let div7 = document.querySelector('.div7');

let span7_1 = document.createElement('span');
let span7_2 = document.createElement('span');
div7.appendChild(span7_1);
div7.appendChild(span7_2);
span7_1.textContent = " 7 Первый ";
span7_2.textContent = " 7 Второй ";

// 8. Реализуйте функцию, которая в качестве параметров принимает id элемента и строку, которую устанавливает в качестве текста в этом элементе. Для реализации используйте:
// Свойство элемента textContent
// Свойство элемента innerHTML

function setText1(id, string) {
    let elem = document.getElementById(id);
    elem.textContent = string;
}

setText1('div8-a', '8 просто строка')

function setText2(id, string) {
    let elem = document.getElementById(id);
    elem.innerHTML = string;
}

setText2('div8-b', '8 и другая строка')

// 9. Дан элемент. Найдите его первого потомка и сделайте его текст красного цвета.

let elem9 = document.querySelector('.div9')
let childElem9 = elem9.firstElementChild;

childElem9.style.color = "#fa0000";

console.log(elem9);
console.log(childElem9);

// 10. Дано три элемента. Найдите для первого элемента соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!!!'.

let elem10First = document.querySelector('.div10');
let elem10Second = elem10First.nextElementSibling;
let elem10Third = elem10Second.nextElementSibling;

elem10Third.append('!!!');

console.log(elem10First);
console.log(elem10Second);
console.log(elem10Third);