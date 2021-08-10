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

// 2. Реализуйте функцию, которая принимает объект и выводит на экран все собственные свойства объекта


const displayObject = (object) => alert(Object.keys(object))


obj2 = {
    a: 1,
    b: 2,
    c: 3
}

displayObject(obj2); // a,b,c
