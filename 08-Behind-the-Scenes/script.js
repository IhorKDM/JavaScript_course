"use strict";

//  -----------------------------------------------------------------
// |                                                                 |
// |    Scope and The Scope Chain                                    |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    function calcAge(birthYear) {
    const age = 2023 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age} years old, born in ${birthYear}. Today is ${new Date().toLocaleDateString()}`;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996) {
        var millennial = true;
        const firstName = "Steven"; // This will shadow the outer firstName variable
        const str = `Oh, and You are a millennial, ${firstName}`;
        console.log(str);

        function add(a, b) {
            return a + b;
        }

        output = "NEW OUTPUT"; // This will throw an error because output is a constant
        }
        // console.log(str);
        console.log(millennial);

        console.log(output);
        // add(2, 3);
    }

    printAge();
    return age;
    }

    const firstName = "Jonas";
    calcAge(1991);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |    Hoisting and Temporal Dead Zone (TDZ)                       |
// |                                                                |
//  ----------------------------------------------------------------
/*
    // Variables
    console.log(me);
    // console.log(job);
    // console.log(year);

    var me = "Jonas";
    let job = "teacher";
    const year = 1991;

    // Functions
    console.log(addDecl(2, 3));
    // console.log(addExpr(2, 3));
    // console.log(addArrow(2, 3));

    function addDecl(a, b) {
    return a + b;
    }

    const addExpr = function (a, b) {
    return a + b;
    };

    var addArrow = (a, b) => a + b;

    // Example
    console.log(numProducts);
    if (!numProducts) {
    deleteShoppingCart();
    }

    var numProducts = 10;

    function deleteShoppingCart() {
    console.log("All products deleted!");
    }

    var x = 1;
    let y = 2;
    const z = 3;

    console.log(x === window.x);
    console.log(y === window.y);
    console.log(z === window.z);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |    The this Keyword                                            |
// |                                                                |
//  ----------------------------------------------------------------
/*
    console.log(this);

    const calcAge = function (birthYear) {
    console.log(2025 - birthYear);
    console.log(this);
    };
    calcAge(1991);

    const calcAgeArrow = (birthYear) => {
    console.log(2025 - birthYear);
    console.log(this);
    };
    calcAgeArrow(1991);

    const jonas = {
    year: 1991,
    calcAge: function () {
        console.log(2025 - this.year);
        console.log(this);
    },
    };

    jonas.calcAge();

    const matilda = {
    year: 2017,
    };

    matilda.calcAge = jonas.calcAge;
    matilda.calcAge();

    const f = jonas.calcAge;

    const cid = {
    year: 2020,
    };

    cid.f = f;
    cid.f();
*/

//  ----------------------------------------------------------------
// |                                                                |
// |    Regular Functions vs. Arrow Functions                       |
// |                                                                |
//  ----------------------------------------------------------------
/*
    var firstName = "Matilda";

    const jonas = {
    firstName: "Jonas",
    year: 1991,
    calcAge: function () {
        console.log(this);
        console.log(2025 - this.year);

        // const self = this;
        // const isMillennial = function () {
        //   console.log(self.year >= 1981 && self.year <= 1996);
        // };

        const isMillennial = () => {
        console.log(this);
        console.log(this.year >= 1981 && this.year <= 1996);
        };

        isMillennial();
    },
    greet: () => {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
    };

    jonas.greet();
    jonas.calcAge();

    const addExpr = function (a, b) {
    console.log(arguments);
    return a + b;
    };
    addExpr(2, 5);
    addExpr(2, 5, 8, 12);

    var addArrow = (a, b) => {
    console.log(arguments);
    return a + b;
    };
    addArrow(2, 5, 8);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |    Primitives vs. Objects (Primitive vs. Reference Types)      |
// |                                                                |
//  ----------------------------------------------------------------
/*
    const jessica1 = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    };

    function marryPerson(person, newLastName) {
    const originalPerson = { ...person };
    originalPerson.lastName = newLastName;
    return originalPerson;
    }

    const marriedJessica = marryPerson(jessica1, "Davis");

    // const marriedJessica = jessica1;
    // marriedJessica.lastName = "Davis";

    console.log("Before marriage:", jessica1);
    console.log("After marriage:", marriedJessica);

    const jessica = {
    firstName: "Jessica",
    lastName: "Williams",
    age: 27,
    family: ["Alice", "Bob"],
    };

    // Shallow copy
    const jessicaCopy = { ...jessica };

    // jessicaCopy.lastName = "Davis";
    // jessicaCopy.family.push("Mary");
    // jessicaCopy.family.push("John");
    // console.log("Before marriage:", jessica);
    // console.log("After marriage:", jessicaCopy);

    // Deep copy
    const jessicaClone = structuredClone(jessica);

    jessicaClone.family.push("Mary");
    jessicaClone.family.push("John");

    console.log("Before clone marriage:", jessica);
    console.log("After clone marriage:", jessicaClone);
*/
