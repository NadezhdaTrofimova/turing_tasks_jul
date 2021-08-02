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

// 5. Найдите остаток от деления введённых пользователем чисел a на b

let divident = Number(prompt('Enter divident'));
let divisor = Number(prompt('Enter divisor'));
alert(`The remainder of division is ${divident % divisor}`);

// 6. Чем отличается постфиксная форма инкремента от префиксной? Поясните разницу примером в коде.

// При использовании префиксного оператора инкремента значение переменной возвращает новое значение, например:

let x1 = 2;
let x2 = ++x1;

console.log(x1, x2); // 3 3, т.е. сначала выполняется х1 = х1 + 1, затем х2 = х1;

// При использовании постфиксного оператора инкремента значение переменной возвращает первоначальное значение, например:

let y1 = 2;
let y2 = y1++;

console.log(y1, y2);  // 3 2, т.е. сначала выполняется у2 = у1, и только потом у1 = у1 + 1;

// 7. Напишите условие, которое проверяет что введённое пользователем число является чётным (условие чётности - деление числа на два без остатка


let number7 = prompt('Enter the integer');
    if (number7 % 2 === 0) {
        alert(`Число ${number7} четное`);
    } else if (number7 % 2 === 1) {
        alert(`Число ${number7} нечетное`);
    } else {
        alert("You entered not an integer!");
    }

// 8. Сравните 1 и ‘1’  используя строгое и нестрогое сравнения. Сравните 0 и false используя строгое и нестрогое сравнения. Объясните результат.

let result1 = (1 === '1');
console.log(result1); // false

let result2 = (1 == '1');
console.log(result2); // true

let result3 = (0 === false);
console.log(result3); // false

let result4 = (0 == false);
console.log(result4); // true

/* Как можно увидеть в вышеприведенных сравнениях при нестрогом сравнении данных разного типа происходит преобразование типа одного значения к типу другого. В наших примерах при нестрогом неравенстве число 1 преобразовывается в строку '1', а булево значение false преобразовывается в число 0. В результате преобразования значения оказываются равны. При строгом сравнении приведение типов не происходит и данные разных типов всегда будут возвращать false. */

/* 9. Используйте условную инструкцию if/else чтобы вывести пользователю тип следующих значений:
    11
    “Hello”
    { a: 1 }
    null
    false                      */

let typeCheck = (value) => (value === null) ? "It's null" : `It's ${typeof value}`;


alert (typeCheck(11)); // It's number
alert (typeCheck("Hello")); // It's string
alert (typeCheck({a: 1})); // It's object
alert (typeCheck(null)); // It's null
alert (typeCheck(false)); // It's boolean


/* 10. Перепишите условие
	const  A = 201;
	if (A % 2) {
		alert(“A нечётное”);
	} else {
		alert(“A чётное”);
	}
с использованием тернарного оператора ?: */

const A = 201;
A % 2 ? alert('A нечетное') : alert ("A чётное")

