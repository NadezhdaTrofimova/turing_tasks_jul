"use string";

// 1.Реализуйте функцию, которая выводит в консоль переданный ей список аргументов.

function consoleLogArguments() {
    for (let i = 0; i < arguments.length; i++)
    console.log(arguments[i]);
}

consoleLogArguments("1", "2", "3", "4", "5") // 1 2 3 4 5

// 2.