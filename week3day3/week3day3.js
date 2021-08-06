// Упражнения. Часть 1.

// 1. Увеличьте значение переменной a инициализированной 0 в цикле до 10 (на 1 каждую итерацию). Выполните задание трижды используя циклы while (...) { *…* }, do { *...* } while(...), for (...) { *...* } соответственно

let a1 = 0;

while (a1 < 10) {
    ++a1;
    console.log(a1)
}


let a2 = 0;

do {
    ++a2;
    console.log(a2);
} while (a2 < 10);


for (let a3 = 0; a3 <= 10; ++a3) {
    console.log(a3)
}

// 2. Написать цикл, которой будет продолжать итерации пока пользователь не введёт строку “Завершить”. Для ввода используйте функцию prompt.


while (prompt("Введите что-нибудь") !== "Завершить") {
    alert("Для выхода из цикла введите 'Завершить'");
}


// 3. С помощью цикла for выведите все нечётные числа в интервале от 0 до 20

for (let i = 1; i <= 20; i = i + 2) {
    console.log(i)
}

// 4. Перепишите код из упражнения 1.1.10 таким образом, чтобы вместо группы условных инструкций использовался switch

function checkType(value) {
    switch (true) {
        case typeof value === 'number':
            alert("It's number");
            break
        case typeof value === 'string':
            alert("It's string");
            break
        case value === null:
            alert("It's null");
            break
        case typeof value === 'object':
            alert("It's object");
            break
        case typeof value === 'boolean':
            alert("It's boolean");
            break
    }
}

// Проверка:
checkType(11);  // It's number
checkType("Hello"); // It's string
checkType({a: 1}); // It's object
checkType(null); // It's null
checkType(false); // It's boolean

// 5. Поменяйте две переменные местами (это можно сделать воспользовавшись дополнительной переменной)

let var1 = 1;
let var2 = 2;
let varAdd;

varAdd = var1;
var1 = var2;
var2 = varAdd;

// Проверка:
console.log(var1, var2); // 2 1

// 6. Преобразуйте число 143.2343 к строке с точностью до 2 знака после запятой

let number6 = 143.2343;

console.log(number6.toFixed(2)); // 143.23

// 7. Округлите число 42.2654 до 1 знака после запятой

let number7 = 42.2654;

console.log(Number(number7.toFixed(1))); // 42.3

// 8. Найдите индекс первого вхождения строки “JavaScript” в строку “I learn JavaScript”

console.log("I learn JavaScript".indexOf('JavaScript')); // 8

// 9. Реализуйте функцию, которая возвращает функцию, выводящую количество собственных вызовов

let count = 0;
function funcCount() {
    count++;
    return ('Function called ' + count);
}

function funcCall() {
    return funcCount;
}

funcCount();
funcCount();
funcCount();


// 10. Реализуйте функцию, которая выводит свой текущий контекст в консоль. Вызовите её посредством call c разными значениями контекста


function funcConsoleContext() {
    console.log(this)
}

const varNew = 10;

let user = {
    name: 'name'
}


funcConsoleContext.call()
funcConsoleContext.call(varNew)
funcConsoleContext.call(user)

// 11. Функция squarePow принимает 2 параметра: число и анонимную функцию, которая возводит число в квадрат. Возведите число в 4-тую степень с помощью squarePow.


const squarePow = (number, callback) => {
    return callback(callback(number))
}

console.log(squarePow(5, (num) => num * num))

// 12. Реализуйте функцию curry (каррирование)

function funcCurry (a) {
    return function (b)  {
        return function (c)  {
            return (a + b + c);
        };
    };
}

console.log(funcCurry(2)(3)(4))



// Упражнения. Часть 2.

// 1. Создайте объект вида { a: ‘a’, b: ‘b’, c: ‘c’ }. Выведите на экран значение в поле a двумя способами: через квадратные скобки и как свойство объекта

const object1 = {
    a: 'a',
    b: 'b',
    c: 'c'
}

alert(object1['a']);
alert(object1.a)

/* 2. Создайте объект вида { a: 2, b: “Coding” }. Создайте копию этого объекта посредством
    Метода Object.assign,
    Spread-оператора
    Выводите результаты в консоль  */

const object2 = {
    a: '2',
    b: 'Coding'
}

const copy1Object2 = Object.assign({}, object2);
console.log(copy1Object2);

const copy2Object2 = {...object2}
console.log(copy2Object2);

// 3. Создайте объект вида { a: 4 }. Добавьте ему поле b содержащее число 5 и удалите поле a. На каждом этапе проверяйте наличие полей в объекте. Результаты выводите в консоль

const object3 = {
    a: 4
}

object3.b = 5;
console.log('b' in object3); // true


delete object3.a;
console.log('a' in object3); // false

// 4. Создайте пустой объект и добавьте ему поля name и lastName со значениями “Иван” и “Иванов” соответственно. Также добавьте поле salary и запишите туда любое число. Переберите свойства объекта и выведите их в консоль с помощью цикла for (... in …).

const object4 = {};

object4.name = 'Иван';
object4.lastName = 'Иванов';
object4.salary = '2000$';

for (let key in object4) {
    console.log(key + ": " + object4[key])
}

// 5. Создайте массив чисел от 0 до 10 и выведите его в консоль двумя разными способами: посредством цикла for..in и цикла for..of

const array5 = [0, 1, 2, 3, 4, 5, 6,  7, 8, 9, 10];

for (let i in array5) {
    console.log(array5[i])
}


for (let i of array5) {
    console.log(i)
}

// 6. Реализуйте функцию-конструктор, создающую объект Animal с полями name и kind

function Animal (name, kind) {
    this.name = name;
    this.kind = kind;
}

const newAnimal = new Animal ("vasya", 'cat');

console.log(newAnimal);

// 7. Реализуйте функцию сортирующую символы в строке и возвращающую отсортированную строку

let sortStr = (str7) => str7.split('').sort().join('');

console.log(sortStr('vnjsgbjk')) // bgjjknsv

// 8. Реализуйте функцию, которая сортирует передаваемый в неё массив чисел

function sortNumber(array8) {
    return array8.sort(function (a, b) {
    return a - b
    })
}

sortNumber([2, 1, 10, 203, -1]) // [-1, 1, 2, 10, 203]

// 9. Реализуйте функцию, которая находит и возвращает индекс элемента в массиве

function indexArrElem(array9, value9) {
    return array9.indexOf(value9)
}

indexArrElem([1, 2, 3, 4, 5, 8, 9], 4)  // 3

// 10. Создайте двумерный массив чисел, заполните его случайными числами от 0 до 10 и выведите его в консоль в виде таблицы

let array10 = [[5, 1, 6, 3, 8, 5, 8, 9, 2], [10, 9, 7, 7, 6, 1, 3, 8, 0]]

console.table(array10)
