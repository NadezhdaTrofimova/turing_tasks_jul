// 1. Создайте объект вида { a: 1, b: 2, c: 3 }. Напишите функцию, которая выводит в консоль ключи и значения объекта в формате “${key - value}”

obj1 = {
    a: 1,
    b: 2,
    c: 3
}

const consoleObject = (object) => {
    for(let i in object) {
    console.log(`${i} - ${object[i]}`)
    }
}

consoleObject(obj1);