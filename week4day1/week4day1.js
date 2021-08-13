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

