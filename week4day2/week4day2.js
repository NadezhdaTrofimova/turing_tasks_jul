// 1. Выведите на странице часы

function zeroTime(value) {
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

console.log('Task4: ' + getRandom(1, 999));

// 5. Создайте промис, который успешно выполнится через 3 секунды

const promiseSuccess = new Promise((resolve) => {
    setTimeout(() =>
            resolve('Success!')
        , 3000);
});

promiseSuccess.then(
    result5 => console.log('Task5: ' + result5)
);


// 6. Создайте промис, который завершится с ошибкой через 3 секунды

let promiseError = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (error !== true)
            resolve('success')
        else
            reject('error');
    }, 3000);
});

promiseError.then(
    result6 => console.log('Task6: ' + result6),
    error6 => console.log('Task6: ' + error6)
);

// 7. Реализуйте функцию, возвращающую промис, в котором генерируется случайное число. Если это число оказывается больше 10 то промис должен завершиться с ошибкой.

const promise7 = () => {
    return new Promise((resolve, reject) => {

        let num = Math.floor(Math.random() * 100)
        if (num <= 10)
            resolve(`Result: ${num}`)
        else
            reject(`Error! ${num} > 10`);
    });
}

promise7()
    .then(
        result => console.log('Task7: ' + result),
        error => console.log('Task7: ' + error)
    );


// 8. Используя методы catch и then обработайте результаты вызова функции из упражнения 7

const promise8 = () => {
    return new Promise((resolve, reject) => {

        let num = Math.floor(Math.random() * 100)
        if (num <= 10)
            resolve(`Result: ${num}`)
        else
            reject(`Error! ${num} > 10`);
    });
}

promise8()
    .then(
        result => console.log('Task8: ' + result)
    )
    .catch(
        error => console.log('Task8: ' + error)
    )


// 9. Реализуйте две функции, которые посредством промисов можно вызывать по цепочке: первая на вход принимает массив чисел, и возвращает массив всех чётных чисел; вторая принимает на вход массив чисел и возвращает их сумму. Обработайте результаты вызовов посредством метода catch

function arrayEven(array) {
    let newArray = [];
    for (let i in array) {
        if (array[i] % 2 === 0)
            newArray.push(array[i])
    }
    return newArray
}


function arraySum(array) {
    let sum = 0;
    for (let i in array) {
        sum += array[i]
    }
    return sum
}

function promise9(array) {
    return new Promise((resolve, reject) => {
            (array.length >= 3) ?
                resolve(arrayEven(array)) :
                reject('array length is too small')
        }
    )

        .then((array1) => arraySum(array1))
        .then(result => console.log('Task9 Sum Even Number: ' + result))
        .catch(error => console.log('Task9: ' + error)
        )
}

promise9([1, 6, 8, 5, 10]);


// 10. Используя синтаксис async/await измените вид того, как вызываются функции из упражнения 9

async function promise10(array) {
    if (array.length >= 3) {
        const arrEv = await arrayEven(array)
        const result = await arraySum(arrEv)
        return result
    } else {
        throw Error('array length is too small')
    }
}

promise10([1, 6, 8, 5, 10])
    .then(result => console.log('Task10: ' + result))
    .catch(console.log)

// 11.Создайте промис, который завершится с ошибкой. Обработайте эту ошибку в блоке catch

let promiseError11 = new Promise((resolve, reject) => reject('error'));

promiseError11
    .catch(result => console.log('Task11: ' + result))

// 12. Реализуйте функцию, возвращающую массив промисов, каждый из которых завершается на 1 секунду позже остальных и резолвится со значением его задержки в секундах. Получите результаты
// a. Первого выполненного промиса (Promise.race)
// b. Всех промисов, которые выполнятся (Promise.all)

let array12 =[
    prom1 = new Promise(resolve => setTimeout(()=>resolve(1),1000)),
    prom2 = new Promise(resolve => setTimeout(()=>resolve(2),2000)),
    prom3 = new Promise(resolve => setTimeout(()=>resolve(3),3000))
];


Promise.race([prom1, prom2, prom3]).then(result => console.log('Task12 race: ' + result))
Promise.all([prom1, prom2, prom3]).then(result =>console.log("Task12 all: " + result))
