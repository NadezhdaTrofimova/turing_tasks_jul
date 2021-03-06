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


// 3. Пусть даны 3 массива. Создайте коллекцию Map, сделайте ключами коллекции эти массивы, а значениями - какие-нибудь строки.

arrA = [1, 2, 6, 8, 9, 167];
arrB = [1, 2, 6, 8, 9, 167];
arrC = [1, 2, 6, 8, 9, 167];

let map3 = new Map();

map3.set(arrA, 'str1');
map3.set(arrB, 'str2');
map3.set(arrC, 'str3');

console.log(map3)

// 4. Пусть дана коллекция Map. С помощью метода keys получите массив ее ключей и переберите его циклом for-of.

let map4 = new Map();

map4.set(1, "a");
map4.set(2, "b");
map4.set(3, "c");
map4.set(4, "d");
map4.set(5, "e");

arrMap4 = map4.keys()

for (let key of arrMap4) {
    console.log(key)
}

// 5. Создайте пустую коллекцию Set. С помощью метода add добавьте в нее элементы со значениями 1, 2 и 3.

let set5 = new Set();

set5.add(1);
set5.add(2);
set5.add(3);

console.log(set5)

// 6. Создайте коллекцию Set с начальными значениями 1,2,3. С помощью метода has проверьте наличие элемента со значением 3, а затем элемента со значением 4.

let set6 = new Set([1, 2, 3]);

console.log(set6.has(3)); // true
console.log(set6.has(4)); // false

// 7. Пусть дан массив. С помощью Set получите этот же массив, но без дублирующихся элементов

arr7 = [1, 2, 3, 3, 3, 4, 5, 1];

console.log(Array.from(new Set(arr7))); // [1, 2, 3, 4, 5]


// 8. Создайте объект Map в который запишите названия дней недели на русском языке в качестве значений и соответствующие им названия дней недели на английском в качестве ключей

let map8 = new Map([
    ['Monday',  'Понедельник'],
    ['Tuesday',    'Вторник'],
    ['Wednesday', 'Среда'],
    ['Thursday',  'Четверг'],
    ['Friday ',    'Пятница'],
    ['Saturday', ' Суббота'],
    ['Sunday',  ' Воскресенье']
]);

console.log(map8);
