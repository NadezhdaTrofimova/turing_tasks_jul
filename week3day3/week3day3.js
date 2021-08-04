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

