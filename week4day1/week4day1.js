// 1. Реализуйте класс Employee. У класса должны иметься следующие свойства: name, age, salaryPerHour, hours. Также должен быть метод getSalary, возвращающий текущую зарплату в зависимости от отработанных часов. Используйте этот класс для создания двух рабочих и выведите зарплату каждого из них

class Employee {
    constructor(name, age, salaryPerHour, hours) {
        this.name = name;
        this.age = age;
        this.salaryPerHour = salaryPerHour;
        this.hours = hours;
    }
    getSalary() {
        return `${this.name} has a salary of ${this.salaryPerHour * this.hours} rub.`;
    }
}

const firstEmployee = new Employee('Gena', 43, 500, 160);
const secondEmployee = new Employee('Vasya', 27, 400, 183);

console.log(firstEmployee.getSalary()) // Gena has a salary of 80000 rub.
console.log(secondEmployee.getSalary()) // Vasya has a salary of 73200 rub.

// 2. Опишите все свойства класса из предыдущего упражнения как приватные, а для доступа к ним реализуйте геттеры и сеттеры

class EmployeePrivat {
    #name;
    #age;
    #salaryPerHour;
    #hours;
        constructor(name, age, salaryPerHour, hours) {
            this.#name = name;
            this.#age = age;
            this.#salaryPerHour = salaryPerHour;
            this.#hours = hours;
    }

    get name() {
        return this.#name
    }

    get age() {
        return this.#age
    }

    get salaryPerHour() {
        return this.#salaryPerHour
    }

    get hours() {
        return this.#hours
    }

}

const thirdEmployee = new EmployeePrivat('Galya', 35, 650, 120);

console.log(thirdEmployee.name);  //  Galya
console.log(thirdEmployee.age);  // 35
console.log(thirdEmployee.salaryPerHour);  // 650
console.log(thirdEmployee.hours);  //120

// 3. Реализуйте класс, который валидирует числа и имеет набор методов для проверки следующего


// a.Является ли число чётным

class Evennumber {
    constructor(input) {
        this.input = input;
    }
    set input(value) {
        if (value % 2 === 0) {
            this._input = value;
        } else {
            console.log(`${value} is odd number!`);
        }
    }

    get input() {
        return this._input;
    }

    consoleInput() {
        console.log(`You entered ${this.input}`)
    }
}

const numberOdd1 = new Evennumber(25)
const numberOdd2 = new Evennumber(26)

numberOdd1.consoleInput()
numberOdd2.consoleInput()

// b.Является ли число целым или числом с плавающей точкой

class Integernumber {
    constructor(input1) {
        this.input1 = input1;
    }
    set input1(value) {
        if (Number.isInteger(value) === false) {
            console.log('Number is float!');
        } else {
            return this._input1 = value
        }
    }
    get input1() {
        return this._input1;
    }

    consoleInput1() {
        console.log(`${this.input1} is integer`)
    }
}

const numberOdd3 = new Integernumber(7)
const numberOdd4 = new Integernumber(1.55)

numberOdd3.consoleInput1()
numberOdd4.consoleInput1()


// c.Является ли число положительным или отрицательным

class Positivenumber {
    constructor(input2) {
        this.input2 = input2;
    }
    set input2(value) {
        if (value === 0) {
            console.log('You entered 0');
        } else if (value < 0) {
            console.log('You entered negative number');
        } else {
            return this._input2 = value;
        }
    }
    get input2() {
        return this._input2;
    }

    consoleInput2() {
        console.log(`${this.input2} is positive number`)
    }
}

const numberOdd5 = new Positivenumber(5)
const numberOdd6 = new Positivenumber(-5)
const numberOdd7 = new Positivenumber(0)

numberOdd5.consoleInput2()
numberOdd6.consoleInput2()
numberOdd7.consoleInput2()

// 4. Реализуйте класс, который принимает на вход некоторую строку и имеет следующий набор методов:


// a. Делает все первые буквы слов заглавными

class ToCapitalFirstLetterClass {
    constructor(input3) {
        this.input3 = input3;
    }

    set input3(value) {
        let arraySplit = value.split(' ');
        let newArray = [];
        for (let i = 0; i < arraySplit.length; i++) {
            newArray.push((arraySplit[i].charAt(0).toUpperCase()) + arraySplit[i].slice(1));
        }
        this._input3 = newArray.join(' ');
    }
    get input3() {
        console.log(this._input3);
    }

}

const String = new ToCapitalFirstLetterClass("меня зовут иван иванов")

String.input3

// b. Делает все первые буквы слов маленькими

class ToLowerFirstLetterClass {
    constructor(input4) {
        this.input4 = input4;
    }

    set input4(value) {
        let arraySplit = value.split(' ');
        let newArray = [];
        for (let i = 0; i < arraySplit.length; i++) {
            newArray.push((arraySplit[i].charAt(0).toLowerCase()) + arraySplit[i].slice(1));
        }
        this._input4 = newArray.join(' ');
    }
    get input4() {
        console.log(this._input4);
    }

}

const String1 = new ToLowerFirstLetterClass("МЕНЯ ЗОВУТ ПЕТЯ ПЕТРОВ")

String1.input4


// c. Возвращает количество символов в строке, не являющихся пробельными

class StringWithoutSpacesClass {
    constructor(input5) {
        this.input5 = input5;
    }

    set input5(value) {
        let stringSplit = value.split('');
        let counter = 0;
        for (let i = 0; i < stringSplit.length; i++) {
            if (stringSplit[i] !== ' ')
                counter++
        }
        this._input5 = counter;
    }
    get input5() {
        console.log(this._input5);
    }

}

const String2 = new StringWithoutSpacesClass("Ай яй яй")

String2.input5

