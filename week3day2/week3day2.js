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

/* 3. Используя стрелочные функции запишите следующие функции:
    а. Функция суммирования двух чисел
    b. Функция разности двух чисел
    c. Функция умножения двух чисел
    d. Функция деления двух чисел   */

// а. Функция суммирования двух чисел:
const calculateTheSum = (number1, number2) => number1 + number2;


// Проверка:
console.log(calculateTheSum(5,7));  // 12

// b. Функция разности двух чисел:
const calculateTheResidual = (number1, number2) => number1 - number2;

// Проверка:
console.log(calculateTheResidual(5,7));  // -2

// c. Функция умножения двух чисел:
const calculateTheProduct = (number1, number2) => number1 * number2;

// Проверка:
console.log(calculateTheProduct(5,7));  // 35

// d. Функция деления двух чисел:
const calculateTheQuotient = (number1, number2) => number1 / number2;

// Проверка:
console.log(calculateTheQuotient (5,7));  // 0.7142857142857143

// 4. Реализуйте функцию, которая выводит в консоль сообщение “Здравствуйте, (name)”, где name - параметр функции. Сделайте так, чтобы параметром этой функции по-умолчанию было слово “гость”.

const greetTheGuest = (name = "гость") => console.log(`Здравствуйте, ${name}`)

// Проверка:
greetTheGuest("Мария") // Здравствуйте, Мария
greetTheGuest() // Здравствуйте, гость
