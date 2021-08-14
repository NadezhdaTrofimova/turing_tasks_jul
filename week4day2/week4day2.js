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
    setTimeout('secondsToTheEndOfTheDay()', 500)
    document.querySelector('.seconds').innerHTML = 'До конца дня осталось: ' + seconds + " секунд";
}

secondsToTheEndOfTheDay()

// 3. Выведите на странице инпут и кнопку. В инпут вводится число. По нажатию на кнопку запускается таймер с количеством секунд, равным числу, введенному пользователем
//
// const timer = document.querySelector('.timer');
// const newInput = document.createElement('input');
// const newButton = document.createElement('button');
// const result = document.createElement('span');
//
// timer.appendChild(newInput);
// timer.appendChild(newButton);
// timer.appendChild(result);
//
// result.style.border = '2px solid black';
//
// newButton.innerHTML = "Запустить таймер";
//
// newButton.onclick = function () {
//     let inputValue = newInput.value;
//     console.log(inputValue)
//     let startTime = new Date().getTime() + inputValue;
//     let endTime = new Date();
//     console.log(startTime);
//     console.log(endTime);
//     console.log(diff);
//     // let diff = new Date() - inputValue -
//     //
//     // let hours = Math.floor(inputValue / 3600);
//     // let minutes = Math.floor((inputValue / 60) - hours * 3600);
//     // let seconds = inputValue - hours * 3600 - minutes * 60;
//     // result.textContent = hours + ":" + minutes + ':' + seconds;
// }
//


