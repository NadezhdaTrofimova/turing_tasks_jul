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
// b. Делает все первые буквы слов маленькими
// c. Возвращает количество символов в строке, не являющихся пробельными

class ChangeStringClass {
    constructor(input3) {
        this.input3 = input3;
    }

    doCapitalFirstLetter() {
        let arraySplit = this.input3.split(' ');
        let newArray = [];
        for (let i = 0; i < arraySplit.length; i++) {
            newArray.push((arraySplit[i].charAt(0).toUpperCase()) + arraySplit[i].slice(1));
            }
        this.input3 = newArray.join(' ');
        return (this.input3)
        }

    doLowerFirstLetter() {
        let arraySplit = this.input3.split(' ');
        let newArray = [];
        for (let i = 0; i < arraySplit.length; i++) {
            newArray.push((arraySplit[i].charAt(0).toLowerCase()) + arraySplit[i].slice(1));
        }
        this.input3 = newArray.join(' ');
        return (this.input3)
    }

    doStringWithoutSpaces() {
        let stringSplit = this.input3.split('');
        let counter = 0;
        for (let i = 0; i < stringSplit.length; i++) {
            if (stringSplit[i] !== ' ')
                counter++
        }
        return counter
    }

}

const String = new ChangeStringClass("меня зовут иван иванов")
const String1 = new ChangeStringClass("МЕНЯ ЗОВУТ ПЕТЯ ПЕТРОВ")
const String2 = new ChangeStringClass("Ай яй яй")
console.log(String.doCapitalFirstLetter());
console.log(String1.doLowerFirstLetter());
console.log(String2.doStringWithoutSpaces());


// 5. Наследуйте от класса Employee новый класс AccountingEmployee обладающий методом work, который выводит в консоль сообщение о том, что рабочий приступил к выполнению обязанностей. Создайте объект этого класса и используйте его метод

class EmployeeClass {
    constructor(name) {
        this.name = name;
    }
}

class AccountingEmployeeClass extends EmployeeClass {
    work() {
        console.log(`${this.name} приступил к выполнению обязанностей`);
    }
}

const Employee5 = new AccountingEmployeeClass("Тарас");
Employee5.work()

// 6. Реализуйте класс для работы с элементами DOM, который принимает в конструктор селектор и обладает следующими методами, которые можно вызывать по цепочке:
// Изменение текстового содержимого узла
// Изменение html содержимого узла
// Добавление нового узла в качестве потомка
// Добавление к началу текстового содержимого узла строки
// Добавление к концу текстового содержимого узла строки
// Изменение атрибутов элемента
// Удаление самого элемента
// Получение потомка узла посредством селектора

class InteractionDOMelement {
    constructor(selector) {
        this.DOMelement = document.querySelector('.' + selector);
    }

    changeText(value) {
        this.DOMelement.textContent = value;
        return this;
    }

    changeInnerHTML(value) {
        this.DOMelement.innerHTML = value;
        return this;
    }

    appendChild(tag, child) {
        document.createElement(tag).className = child;
        this.DOMelement.appendChild = child;
        return this;
    }

    addBefore(value) {
        this.DOMelement.prepend(value);
        return this;
}
    addAfter(value) {
        this.DOMelement.append(value);
        return this;
}
    changeAttribute(attribute, value) {
            this.DOMelement.setAttribute(attribute, value)
        return this
    }

    remove() {
        this.DOMelement.remove()
    }

    getChild(selector) {
        this.DOMelement = document.querySelector('.' + selector)
        console.log(this.DOMelement.childNodes[0])
        return this
        }
    }



const newElement = new InteractionDOMelement('element')

newElement
    .changeText('измененный текст')
    .changeInnerHTML('измененное HTML содержимое')
    .addBefore('before ')
    .addAfter(' after')
    .appendChild('div', 'class')
    .getChild('element')
    .changeAttribute('style', 'background-color: red')
    .remove()