"use strict";

//  --------------------------------------------------------------------
// |                                                                    |
// |    Constructor Functions and the new Operator                      |
// |                                                                    |
//  --------------------------------------------------------------------
/*
    const Person = function (firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    // Never do this: it's not a good practice to add methods to the constructor
    //   this.calcAge = function () {
    //     console.log(2025 - this.birthYear);
    //   }
    };

    const jonas = new Person("Jonas", 1991);
    console.log(jonas);

    // 1. New {} is created
    // 2. Function is called, this = {}
    // 3. {} linked to prototype
    // 4. Function automatically returns {}

    const matilda = new Person("Matilda", 2017);
    const jack = new Person("Jack", 1975);
    console.log(matilda);
    console.log(jack);

    console.log(jonas instanceof Person);

    // Prototypes
    console.log(Person.prototype);
    Person.prototype.calcAge = function () {
    console.log(2025 - this.birthYear);
    };

    jonas.calcAge();
    matilda.calcAge();
    jack.calcAge();

    console.log(jonas.__proto__);
    console.log(jonas.__proto__ === Person.prototype);

    console.log(Person.prototype.isPrototypeOf(jonas));

    Person.prototype.species = "Homo Sapiens";
    console.log(jonas.species);

    console.log(jonas.hasOwnProperty("firstName"));
    console.log(jonas.hasOwnProperty("species"));

    console.log(jonas.__proto__);
    // Object.prototype (top-level)
    console.log(jonas.__proto__.__proto__);
    console.log(jonas.__proto__.__proto__.__proto__);

    console.dir(Person.prototype.constructor);

    // Array.prototype
    const arr = [1, 2, 3, 4, 5, 5, 3, 3];
    console.log(arr.__proto__);
    console.log(arr.__proto__ === Array.prototype);

    console.log(arr.__proto__.__proto__);

    Array.prototype.unique = function () {
    return [...new Set(this)];
    };

    console.log(arr.unique());

    const h1 = document.querySelector("h1");
    console.dir((x) => x + 1);
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Challenge 1                                                      |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    // Data Car 1: 'BMW' going 120 km/h, 2020 model
    // Data Car 2: 'Mercedes' going 95 km/h, 2018 model

    const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
    this.year = year;
    };

    Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    const bmw = new Car("BMW", 120, 2020);
    const mercedes = new Car("Mercedes", 95, 2018);

    console.log(bmw, mercedes);

    bmw.accelerate();
    bmw.accelerate();
    bmw.brake();
    bmw.accelerate();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    ES6 Classes                                                      |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    //  Class expression
    // const PersonCl = class {}

    //  Class declaration
    class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Methods will be added to the prototype
    calcAge() {
        console.log(2025 - this.birthYear);
    }

        greet() {
            console.log(`Hey ${this.firstName}`);
        }
    }

    const jessica = new PersonCl("Jessica", 1996);
    console.log(jessica);
    jessica.calcAge();
    console.log(jessica.__proto__ === PersonCl.prototype);

    // PersonCl.prototype.greet = function () {
    //   console.log(`Hey ${this.firstName}`);
    // };

    jessica.greet();

    // 1. Classes are not hoisted
    // 2. Classes are first-class citizens
    // 3. Classes are executed in strict mode
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Setters and Getters                                              |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    const account = {
    owner: "Jonas",
    movements: [200, 450, -400, 3000],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    },
    };

    console.log(account.latest);

    account.latest = 50;
    console.log(account.movements);

    class Person {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2025 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.firstName}`);
    }

    get age() {
        return 2025 - this.birthYear;
    }

    // Setter and Getter for fullName
    set fullName(name) {
        console.log(name);
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }
    get fullName() {
        return this._fullName;
    }
        // Static method
    static (hey) {
        console.log(hey);
    }
    }
    const jessica = new Person("Jessica Davis", 1996);
    console.log(jessica);
    jessica.calcAge();
    console.log(jessica.age);

    const walter = new Person("Walter White", 1965);
    console.log(walter);

    Person.hey();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Object.create()                                                  |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    const PersonProto = {
    calcAge() {
        console.log(2025 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
    };

    const steven = Object.create(PersonProto);
    steven.name = "Steven";
    steven.birthYear = 2002;
    console.log(steven);
    steven.calcAge();
    console.log(steven.__proto__ === PersonProto);

    const sarah = Object.create(PersonProto);
    sarah.init("Sarah", 1998);
    console.log(sarah);
    sarah.calcAge();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Challenge 2                                                      |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    get speedUS() {
        return this.speed / 1.6;
    }

    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
    }

    const ford = new CarCl("Ford", 120);
    console.log(ford.speedUS);
    ford.accelerate();
    ford.accelerate();
    ford.brake();
    ford.accelerate();
    console.log(ford.speedUS);
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Inheritance Between Classes: Constructor Functions               |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    };

    Person.prototype.calcAge = function () {
    console.log(2025 - this.birthYear);
    };

    const Student = function (firstName, birthYear, course) {
    Person.call(this, firstName, birthYear);
    this.course = course;
    };

    // Linking prototypes
    Student.prototype = Object.create(Person.prototype);

    Student.prototype.introduce = function () {
    console.log(`My name is ${this.firstName} and I study ${this.course}.`);
    };

    const mike = new Student("Mike", 2000, "Computer Science");
    console.log(mike);
    mike.calcAge();
    mike.introduce();

    console.log(mike.__proto__);
    console.log(mike.__proto__.__proto__);
    console.log(mike.__proto__ === Student.prototype);

    console.log(mike instanceof Student);
    console.log(mike instanceof Person);

    Student.prototype.constructor = Student;
    console.dir(Student.prototype.constructor);
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Challenge 3                                                      |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
    };

    Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    };
    Car.prototype.brake = function () {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    };

    const EV = function (make, speed, charge) {
    Car.call(this, make, speed);
    this.charge = charge;
    };
    // Linking prototypes
    EV.prototype = Object.create(Car.prototype);

    EV.prototype.chargeBattery = function (chargeTo) {
    this.charge = chargeTo;
    };
    EV.prototype.accelerate = function () {
    this.speed += 20;
    this.charge--;
    console.log(
        `${this.make} is going at ${this.speed} km/h with a charge of ${this.charge}%`
    );
    };

    const tesla = new EV("Tesla", 120, 23);
    tesla.chargeBattery(90);
    console.log(tesla);
    tesla.brake();
    tesla.accelerate();
    tesla.accelerate();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Inheritance Between Classes: ES6 Classes                         |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2025 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age() {
        return 2025 - this.birthYear;
    }

    set fullName(name) {
        if (name.includes(" ")) this._fullName = name;
        else alert(`${name} is not a full name!`);
    }

    get fullName() {
        return this._fullName;
    }
    static hey() {
        console.log("Hey there!");
    }
    }

    class StudentCl extends PersonCl {
    constructor(fullName, birthYear, course) {
        // Always needs to happen first
        super(fullName, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`My name is ${this.fullName} and I study ${this.course}.`);
    }

    calcAge() {
        console.log(`I'm ${2025 - this.birthYear} years old.`);
    }
    }

    // const martha = new StudentCl("Martha Smith", 2000);
    const martha = new StudentCl("Martha Smith", 2000, "Computer Science");
    martha.introduce();
    martha.calcAge();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Inheritance Between Classes: Object.create()                     |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    const PersonProto = {
    calcAge() {
        console.log(2025 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
    };

    const steven = Object.create(PersonProto);

    const StudentProto = Object.create(PersonProto);
    StudentProto.init = function (firstName, birthYear, course) {
    PersonProto.init.call(this, firstName, birthYear);
    this.course = course;
    };

    StudentProto.introduce = function () {
    console.log(
        `My name is ${this.firstName} and I study ${
        this.course
        }.`
    );
    };

    const jay = Object.create(StudentProto);
    jay.init("Jay", 2001, "Mathematics");
    console.log(jay);
    jay.introduce();
    jay.calcAge();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Another Class Example                                            |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}!`);
  }

  // Public interface
  deposit(val) {
    this.movements.push(val);
  }
  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved for ${this.owner}`);
    }
  }
}

const acc1 = new Account("Jonas", "EUR", 1111);

acc1.deposit(250);
acc1.withdraw(140);
acc1.deposit(300);
acc1.withdraw(50);
acc1.requestLoan(1000);
acc1.approveLoan(1000);

console.log(acc1);

console.log(acc1.pin);
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Encapsulation: Protected Properties and Methods                  |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
    // 1) Public fields
    // 2) Private fields
    // 3) Public methods
    // 4) Private methods
    // STATIC versions

    class Account {
    locale = navigator.language;
    bank = "Bankist";
    #movements = [];
    #pin;

    constructor(owner, currency, pin) {
        this.owner = owner;
        this.currency = currency;
        this.#pin = pin;

        // this.movements = [];
        // this.locale = navigator.language;

        console.log(`Thanks for opening an account, ${owner}!`);
    }

    // Public interface (API)
    getMovements() {
        return this.#movements;
        // NOT Chainable
    }
    deposit(val) {
        this.#movements.push(val);
        return this;
    }
    withdraw(val) {
        this.deposit(-val);
        return this;
    }

    #approveLoan(val) {
        // Fake check
        return true;
    }

    requestLoan(val) {
        if (this.#approveLoan(val)) {
        this.deposit(val);
        console.log(`Loan approved for ${this.owner}`);
        }
        return this;
    }

    static helper() {
        console.log("This is a static helper method.");
    }
    }

    const acc1 = new Account("Jonas", "EUR", 1111);

    // acc1.deposit(250);
    // acc1.withdraw(140);
    // acc1.deposit(300);
    // acc1.withdraw(50);

    const movements = acc1
    .deposit(300)
    .withdraw(50)
    .requestLoan(25000)
    .withdraw(1000)
    .getMovements();

    console.log(acc1);
    console.log(movements);

    // console.log(acc1.#movements);
    // console.log(acc1.#pin);
    // console.log(acc1.movements());
    // acc.approveLoan(1000);
    // Account.helper();
*/

//  ---------------------------------------------------------------------
// |                                                                     |
// |    Challenge 4                                                      |
// |                                                                     |
//  ---------------------------------------------------------------------
/*
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed; // in km/h
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // for chaining
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
        return this; // for chaining
    }

    get speedUS() {
        return this.speed / 1.6; // convert to mph
    }
    set speedUS(speed) {
        this.speed = speed * 1.6; // convert from mph to km/h
    }
    }

    class EVCl extends Car {
    #charge;

    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge; // in percentage
    }

    accelerate() {
        this.speed += 20;
        this.#charge--;
        console.log(
        `${this.make} is going at ${this.speed} km/h with a charge of ${
            this.#charge
        }%`
        );
        return this; // for chaining
    }

    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this; // for chaining
    }
    }

    const rivian = new EVCl("Rivian", 120, 23);
    console.log(rivian);

    rivian
    .accelerate()
    .chargeBattery(50)
    .brake()
    .accelerate()
    .accelerate()
    .accelerate()
    .brake();
    console.log(rivian.speedUS);
*/
