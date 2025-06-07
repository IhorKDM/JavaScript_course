"use strict";

//  -------------------------------------------------------------------
// |                                                                   |
// |  Functions - Default Parameters                                   |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const bookings = [];

    const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
    ) {
    //   numPassengers = numPassengers || 1;
    //   price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
    };

    createBooking("LH123");
    createBooking("LH123", 2, 800);
    createBooking("LH123", 2);
    createBooking("LH123", undefined, 1000);

    createBooking("LH123", undefined, 1000);
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  How Pass Arguments Works: Value vs Reference                     |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const flight = "LH234";
    const jonas = {
    name: "Jonas Schmedtmann",
    passport: 123456789,
    };

    const checkIn = function (flightNum, passenger) {
    flightNum = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passport === 123456789) {
        alert("Checked in");
    } else {
        alert("Wrong passport!");
    }
    };

    // checkIn(flight, jonas);
    // console.log(flight);
    // console.log(jonas);

    const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000);
    };
    newPassport(jonas);
    checkIn(flight, jonas);
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  Functions Accepting Callback Functions                           |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const oneWord = function (str) {
    return str.replaceAll(" ", "").toLowerCase();
    };

    const upperFirstWord = function (str) {
    const [first, ...others] = str.split(" ");
    return [first.toUpperCase(), ...others].join(" ");
    };

    const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);
    };

    transformer("JavaScript is the best!", upperFirstWord);
    transformer("JavaScript is the best!", oneWord);

    // JS uses callbacks all the time
    const high5 = function () {
    console.log("👋");
    };
    document.body.addEventListener("click", high5);

    ["Jonas", "Martha", "Adam"].forEach(high5);
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  Functions Returning Functions                                    |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);

    const greeterHey = greet("Hey");
    greeterHey("Jonas");
    greeterHey("Steven");
    greet("Hello")("Jonas");
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  The Call and Apply Methods, The bind Methods                     |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightNum, name) {
        console.log(
        `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
    };

    lufthansa.book(239, "Jonas Schmedtmann");
    lufthansa.book(635, "John Smith");

    const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
    };

    // Using call method to set 'this' context
    const book = lufthansa.book;

    // book(23, "Sarah Williams");
    book.call(eurowings, 23, "Sarah Williams");
    console.log(eurowings);

    book.call(lufthansa, 239, "Mary Cooper");
    console.log(lufthansa);

    const swiss = {
    airline: "Swiss Air Lines",
    iataCode: "LX",
    bookings: [],
    };

    book.call(swiss, 42, "John Doe");
    console.log(swiss);

    // Apply method
    const flightData = [583, "George Cooper"];
    book.apply(swiss, flightData);
    console.log(swiss);

    book.call(swiss, ...flightData);

    // Bind method

    const bookEW = book.bind(eurowings);
    const bookLH = book.bind(lufthansa);
    const bookLX = book.bind(swiss);

    bookEW(23, "Steven Williams");

    const bookEW23 = book.bind(eurowings, 23);
    bookEW23("Steven Williams");
    bookEW23("Mary Cooper");
    bookEW23("John Doe");
    console.log(eurowings);

    // With Event Listeners
    lufthansa.planes = 300;
    lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
    };

    document
    .querySelector(".buy")
    .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

    // Partial application
    const addTax = (rate, value) => value + value * rate;
    console.log(addTax(0.1, 200));

    const addVAT = addTax.bind(null, 0.23);

    console.log(addVAT(100));
    console.log(addVAT(23));

    const addTaxRate = function (rate) {
    return function (value) {
        return value + value * rate;
    };
    };

    const addVAT2 = addTaxRate(0.23);
    console.log(addVAT2(100));
    console.log(addVAT2(23));
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  Challenge 1                                                      |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        // Get answer from user
        const answer = Number(
        prompt(
            `${this.question}\n${this.options.join("\n")}\n(Write option number)`
        )
        );
        console.log(answer);

        // Register answer
        typeof answer === "number" &&
        answer < this.answers.length &&
        this.answers[answer]++;

        this.displayresults();
        this.displayresults("string");
    },
    displayresults(type = "array") {
        if (type === "array") {
        console.log(this.answers);
        } else if (type === "string") {
        console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    },
    };

    document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));

    poll.displayresults.call({ answers: [5, 2, 3] }, "string");
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  Immediately Invoked Function Expressions (IIFE)                  |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const runOnce = function () {
    console.log("This will never run again");
    };
    runOnce();

    // IIFE
    (function () {
    console.log("This will never run again");
    const isPrivate = 23;
    })();

    (() => console.log("This will ALSO never run again"))();

    {
    const isPrivate = 23;
    var notPrivate = 46;
    }
    // console.log(isPrivate);
    console.log(notPrivate);
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  Closures                                                         |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    const secureBooking = function () {
    let passengerCount = 0;

    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    };
    };

    const booker = secureBooking();
    booker(); // 1 passengers
    booker(); // 2 passengers
    booker(); // 3 passengers

    console.dir(booker);

    // Example 1
    let f;

    const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2);
    };
    };

    const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2);
    };
    };

    g();
    f();
    console.dir(f);

    h();
    f();
    console.dir(f);

    // Example 2
    const boardPassengers = function (n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding all ${n} passengers`);
        console.log(`There are 3 groups, each with ${perGroup} passengers`);
    }, wait * 1000);

    console.log(`Will start boarding in ${wait} seconds`);
    };

    const perGroup = 1000;
    boardPassengers(180, 3);
*/

//  -------------------------------------------------------------------
// |                                                                   |
// |  Challenge 2                                                      |
// |                                                                   |
//  -------------------------------------------------------------------
/*
    (function () {
    const header = document.querySelector("h1");
    header.style.color = "red";
    document.querySelector("body").addEventListener("click", function () {
        header.style.color = header.style.color === "red" ? "blue" : "red";
    });
    })();
*/
