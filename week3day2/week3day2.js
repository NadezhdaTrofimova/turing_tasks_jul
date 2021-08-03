"use string";

// 1.Реализуйте функцию, которая выводит в консоль переданный ей список аргументов.

function consoleLogArguments() {
    for (let i = 0; i < arguments.length; i++)
    console.log(arguments[i]);
}

//Проверка:
consoleLogArguments("1", "2", "3", "4", "5") // 1 2 3 4 5

// 2. Реализуйте функцию, которая получает на вход два числа и проверяет какое из них больше. Функция должна возвращать 1 если первое число больше второго, -1 если меньше и 0 если числа совпадают.

const CompareNumbers = (number1, number2) => (number1 > number2) ? 1 : (number2 > number1) ? -1 : 0;

//Проверка:
console.log(CompareNumbers (1, 2)); // -1
console.log(CompareNumbers (2, 1)); // 1
console.log(CompareNumbers (10, 10)); // 0
