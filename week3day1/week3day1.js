// 1. Создайте переменную и выведите её на экран с помощью alert.

let a = "string1";
alert(a);

// 2. Запишите значение в переменную с помощью функции prompt и выведите её значение посредством alert

let number1 = prompt('Enter the number');
alert(`You entered the number ${number1}`);

// 3. Создайте переменные num и str инициализированные 3 и “” соответственно. Выведите приведённое логическому типу значение этих переменных. Объясните результат

let num = 3;
let str = "";

alert(Boolean(num)); // значение переменной true, так как данные типа number при приведении к логическому типу всегда принимают значение true, кроме 0 и -0.
alert(Boolean(str));  // значение переменной false, так как пустая строка входит в список значений, которые при приведении к логическому типу дают ложное значение.

// 4. Запросите у пользователя на вход два числа и выведите их сумму.

let firstNumber = Number(prompt('Enter first number'));
let secondNumber = Number(prompt('Enter second number'));
alert(`The sum of the numbers is ${firstNumber + secondNumber}`);