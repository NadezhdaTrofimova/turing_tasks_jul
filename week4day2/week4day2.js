// 1. Выведите на странице часы

function zeroTime (value) {
    return ((value < 10) ? (value = '0' + value) : value);
}
function timePage(selector) {
    let currentTime = new Date();
    let hours = zeroTime(currentTime.getHours());
    let minutes = zeroTime(currentTime.getMinutes());
    document.querySelector('.' + selector).innerHTML = hours + ':' + minutes;
}


timePage("hours");


// 2. Выведите на странице данные о количестве секунд, оставшихся до конца дня. Данные должны обновляться динамически

function secondsToTheEndOfTheDay() {
    let currentTime = new Date();
    let endDay = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate() + 1);
    let seconds = Math.round((endDay - currentTime) / 1000);
    setTimeout('secondsToTheEndOfTheDay()', 1000)
    document.querySelector('.seconds').innerHTML = 'До конца дня осталось: ' + seconds + " секунд";
}

secondsToTheEndOfTheDay()

// 3. Выведите на странице инпут и кнопку. В инпут вводится число. По нажатию на кнопку запускается таймер с количеством секунд, равным числу, введенному пользователем

const timer = document.querySelector('.timer');
const newInput = document.createElement('input');
const newButton = document.createElement('button');
const result = document.createElement('div');

timer.append(newInput);
timer.append(newButton);
timer.append(result);

result.style.border = '1px solid black';
result.style.width = '200px';
result.style.height = '20px';
result.style.marginTop = '5px';
newButton.innerHTML = "Запустить таймер";


newButton.onclick = () => {
    let numberInput = Number(newInput.value);
    const timer = setInterval(function () {
        console.log(numberInput);
        result.textContent = numberInput--;

        if (numberInput < 0) {
            clearInterval(timer);
        }
        }, 1000)

}

// 4. Реализуйте функцию, которая возвращает случайное число в диапазоне от первого переданного в неё параметра до второго

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

console.log(getRandom(1, 999));

// 5. Создайте промис, который успешно выполнится через 3 секунды

const promiseResolve = new Promise((resolve) => {
    setTimeout(() =>
            resolve('Success!')
        , 3000);
});

promiseResolve.then(
    result => console.log(result)
);
