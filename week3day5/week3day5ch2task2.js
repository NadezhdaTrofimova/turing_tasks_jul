// 2. Напишите “длинную страницу”, которая отображает на экране текущую длину прокрутки


let scrollPosition = document.querySelector('.span2');


window.addEventListener('scroll', function() {
    scrollPosition.innerHTML = pageYOffset + ' px';
});