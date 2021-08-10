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

div2.style.width = '200px';
div2.style.height = '300px';
div2.style.background = 'red';
document.body.appendChild(div2);

console.log(div2);



