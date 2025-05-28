//  -------------------------------------------------------
// |                                                       |
// |    Activating Strict Mode                             |
// |                                                       |
//  -------------------------------------------------------
// ######################################################
/* ############# */ "use strict"; /* ############# */
// ######################################################
/*
    let hasDriversLicense = false;
    let passTest = true;

    if (passTest) hasDriversLicense = true;
    if (hasDriversLicense) console.log("I can drive :D");

    const interface = "Audio";
*/

// --------------------------------------------------------
// |                                                       |
// |    Functions                                          |
// |                                                       |
//  -------------------------------------------------------
/*
    function logger() {
    console.log("My name is Jonas");
    }
    // Calling / Running / Invoking the function
    logger();
    logger();
    logger();

    function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} ${
        apples === 1 ? "apple" : "apples"
    } and ${oranges} ${oranges === 1 ? "orange" : "oranges"}.`;
    return juice;
    }

    const appleJuice = fruitProcessor(5, 0);
    console.log(appleJuice);
    console.log(fruitProcessor(2, 4));

    const appleOrangeJuice = fruitProcessor(2, 3);
    console.log(appleOrangeJuice);
*/

// --------------------------------------------------------
// |                                                       |
// |    Function Declarations vs. Expressions              |
// |                                                       |
//  -------------------------------------------------------
/*
    // Function Declaration
    function calcAge1(birthYear) {
    return 2023 - birthYear;
    }

    const age1 = calcAge1(1991);

    // Function Expression
    const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
    };

    const age2 = calcAge2(1991);
    console.log(age1, age2);
*/

// --------------------------------------------------------
// |                                                       |
// |    Arrow Functions                                    |
// |                                                       |
//  -------------------------------------------------------
/*
    const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
    };

    const calcAge3 = (birthYear) => 2037 - birthYear;
    const age3 = calcAge3(1991);
    console.log(age3);

    const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
    };

    console.log(yearsUntilRetirement(1991, "Jonas"));
    console.log(yearsUntilRetirement(1980, "Bob"));
*/

// --------------------------------------------------------
// |                                                       |
// |    Functions Calling Other Functions                  |
// |                                                       |
//  -------------------------------------------------------
/*
    function cutFruitPieces(fruit) {
    return fruit * 4;
    }

    function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} ${
        applePieces === 1 ? "apple" : "apples"
    } and ${orangePieces} ${orangePieces === 1 ? "orange" : "oranges"}.`;
    return juice;
    }

    console.log(fruitProcessor(2, 3));
*/

// --------------------------------------------------------
// |                                                       |
// |    Reviewing Functions                                |
// |                                                       |
//  -------------------------------------------------------
/*
    const calcAge = (birthYear) => 2037 - birthYear;

    const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`);
        return -1;
    }
    };

    yearsUntilRetirement(1991, "Jonas");
    yearsUntilRetirement(1970, "Mike");
*/

// --------------------------------------------------------
// |                                                       |
// |    Challenge 1                                        |
// |                                                       |
//  -------------------------------------------------------
/*
    // Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

    // Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

    // A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!

    // Your tasks:

    // Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

    // Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

    // Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

    // Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

    // Ignore draws this time. Instead, log No team wins... to the console if there is no winner.

    // TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

    // TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.


    const calcAverage = (a, b, c) => (a + b + c) / 3;
    console.log(calcAverage(3, 4, 5));

    let scoreDolphins = calcAverage(44, 23, 71);
    let scoreKoalas = calcAverage(65, 54, 49);
    console.log(scoreDolphins, scoreKoalas);

    const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No team wins...");
    }
    };
    checkWinner(scoreDolphins, scoreKoalas);

    scoreDolphins = calcAverage(85, 54, 41);
    scoreKoalas = calcAverage(23, 34, 27);
    console.log(scoreDolphins, scoreKoalas);
    checkWinner(scoreDolphins, scoreKoalas);
*/

// --------------------------------------------------------
// |                                                       |
// |    Introduction to Arrays                             |
// |                                                       |
//  -------------------------------------------------------
/*
    const friend1 = "Michael";
    const friend2 = "Steven";
    const friend3 = "Peter";

    const friends = ["Michael", "Steven", "Peter"];
    console.log(friends);

    const years = new Array(1991, 1984, 2008, 2020);

    console.log(friends[0]);
    console.log(friends[2]);
    console.log(friends.length);

    console.log(friends[friends.length - 1]);

    friends[2] = "Jay";
    console.log(friends);

    const firstName = "Jonas";
    const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", friends];
    console.log(jonas);
    console.log(jonas.length);

    // Exercise: Array Methods
    const calcAge = function (birthYear) {
    return 2023 - birthYear;
    };
    const yearsArray = [1991, 1967, 2010, 2018, 1990];

    const age1 = calcAge(yearsArray[0]);
    const age2 = calcAge(yearsArray[1]);
    const age3 = calcAge(yearsArray[2]);
    const age4 = calcAge(yearsArray[yearsArray.length - 1]);
    console.log(age1, age2, age3, age4);

    const ages = [
    calcAge(yearsArray[0]),
    calcAge(yearsArray[1]),
    calcAge(yearsArray[2]),
    calcAge(yearsArray[yearsArray.length - 1]),
    ];
    console.log(ages);
*/

// --------------------------------------------------------
// |                                                       |
// |    Basic Array Operations                             |
// |                                                       |
//  -------------------------------------------------------
/*
    const friends = ["Michael", "Steven", "Peter"];

    // Add elements to the end of the array
    const newLength = friends.push("Jay");
    console.log(friends);
    console.log(newLength);

    // Add elements to the beginning of the array
    friends.unshift("John");
    console.log(friends);

    // Remove the last element from the array
    friends.pop();
    const popped = friends.pop();
    console.log(friends);
    console.log(popped);

    // Remove the first element from the array
    friends.shift();
    console.log(friends);

    console.log(friends.indexOf("Steven"));
    console.log(friends.indexOf("Bob"));

    console.log(friends.includes("Steven"));
    console.log(friends.includes("Bob"));

    if (friends.includes('Steven')) {
    console.log("You have a friend called Steven");
    }
*/

// --------------------------------------------------------
// |                                                       |
// |    Challenge 2                                        |
// |                                                       |
//  -------------------------------------------------------
/*
    // Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

    // Your tasks:

    // 1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

    // 2. And now let's use arrays! So, create an array called bills containing the test data below.

    // 3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

    // BONUS: Create an array totals containing the total values, so the bill + tip.

    // TEST DATA: 125, 555, and 44.


    const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    };

    const bills = [125, 555, 44];
    const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
    const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
    console.log(bills, tips);
*/

// --------------------------------------------------------
// |                                                       |
// |    Introduction to Objects                            |
// |                                                       |
//  -------------------------------------------------------
/*
    const jonasArray = [
        'Jonas',
        'Schmedtmann',
        2037 - 1991,
        'teacher',
        ['Michael', 'Peter', 'Steven']
    ];

    const jonas = {
        firstName: 'Jonas',
        lastName: 'Schmedtmann',
        age: 2037 - 1991,
        job: 'teacher',
        friends: ['Michael', 'Peter', 'Steven']
    };
*/

// --------------------------------------------------------
// |                                                       |
// |    Dot vs. Bracket Notation                           |
// |                                                       |
//  -------------------------------------------------------
/*
    const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    age: 2037 - 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    };
    console.log(jonas);

    console.log(jonas.lastName);
    console.log(jonas["lastName"]);

    const nameKey = "Name";
    console.log(jonas["first" + nameKey]);
    console.log(jonas["last" + nameKey]);

    const interestedIn = prompt(
    "What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends"
    );

    if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
    } else {
    console.log(
        "Wrong request! Choose between firstName, lastName, age, job, and friends"
    );
    }

    jonas.location = "Portugal";
    jonas["twitter"] = "@jonasschmedtman";
    console.log(jonas);

    // Challenge: "Jonas has 3 friends, and his best friend is called Michael"
    console.log(
    `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
    );
*/

// --------------------------------------------------------
// |                                                       |
// |    Object Methods                                     |
// |                                                       |
//  -------------------------------------------------------
/*
    const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann",
    birthYear: 1991,
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriversLicense: true,

    //   calcAge: function (birthYear) {
    //     return 2023 - birthYear;
    //   },

    //   calcAge: function () {
    //     // console.log(this);
    //     return 2023 - this.birthYear;
    //   },

    calcAge: function () {
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year-old ${
        this.job
        }, and he ${
        this.hasDriversLicense ? "has" : "does not have"
        } a driver's license.`;
    },
    };

    console.log(jonas.calcAge());

    console.log(jonas.age);
    console.log(jonas.age);
    console.log(jonas.age);

    // Challenge: "Jonas is a 32-year-old teacher, and he has a driver's license"
    console.log(jonas.getSummary());
*/

// --------------------------------------------------------
// |                                                       |
// |    Challenge 3                                        |
// |                                                       |
//  -------------------------------------------------------
/*
    // Let's go back to Mark and John comparing their BMIs!

    // This time, let's use objects to implement the calculations! Remember: BMI = mass / (height * height) (mass in kg and height in meters).

    // Your tasks:

    // 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

    // 2. Create a calcBMI method on each object to calculate the BMI (the same method on both objects). Assign the BMI value to a property called bmi (lowercase), and also return it from the method.

    // 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

    // TEST DATA: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.


    const mark = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
    };

    const john = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
    };

    mark.calcBMI();
    john.calcBMI();

    console.log(mark.bmi, john.bmi);

    if (mark.bmi > john.bmi) {
    console.log(
        `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`
    );
    } else if (john.bmi > mark.bmi) {
    console.log(
        `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`
    );
    }
*/

// --------------------------------------------------------
// |                                                       |
// |    Iteration: The for Loop                            |
// |                                                       |
//  -------------------------------------------------------
/*
    // console.log("Lifting weights repetition 1");
    // console.log("Lifting weights repetition 2");
    // console.log("Lifting weights repetition 3");
    // console.log("Lifting weights repetition 4");
    // console.log("Lifting weights repetition 5");
    // console.log("Lifting weights repetition 6");
    // console.log("Lifting weights repetition 7");
    // console.log("Lifting weights repetition 8");
    // console.log("Lifting weights repetition 9");
    // console.log("Lifting weights repetition 10");

    // console.log("-------------------");

    for (let rep = 10; rep >= 1; rep--) {
    console.log("Lifting weights repetition " + rep);
    }
*/

// --------------------------------------------------------
// |                                                       |
// |    Looping Arrays, Breaking and Continuing            |
// |                                                       |
//  -------------------------------------------------------
/*
    const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    ];

    const types = [];

    for (let i = 0; i < jonasArray.length; i++) {
    console.log(jonasArray[i]);

    //   types.push(typeof jonasArray[i]);
    types[i] = typeof jonasArray[i];
    }

    console.log(types);

    const years = [1991, 1967, 2002, 2010, 2018];
    const ages = [];

    for (let i = 0; i < years.length; i++) {
    ages[i] = 2037 - years[i];
    }
    console.log(ages);

    // Continue and Break
    for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== "string") continue;
    console.log(jonasArray[i], typeof jonasArray[i]);
    }

    console.log("--- ------- ---");

    for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === "number") break;
    console.log(jonasArray[i], typeof jonasArray[i]);
    }
*/

// --------------------------------------------------------
// |                                                       |
// |    Looping Backwards and Loops in Loops               |
// |                                                       |
//  -------------------------------------------------------
/*
    const jonasArray = [
    "Jonas",
    "Schmedtmann",
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    ];

    for (let i = jonasArray.length - 1; i >= 0; i--) {
    console.log(jonasArray[i]);
    }

    for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`--------- Starting exercise ${exercise} ---------`);

        for (let rep = 1; rep < 6; rep++) {
            console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
        }
    }
*/

// --------------------------------------------------------
// |                                                       |
// |    The while Loop                                     |
// |                                                       |
//  -------------------------------------------------------
/*
    for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
    }

    let rep = 1;
    while (rep <= 10) {
    console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
    }

    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    while (dice !== 6) {
    console.log(`You rolled a ${dice}. Rolling again...`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`You rolled a ${dice}. Loop ends.`);
    }
    }
*/

// --------------------------------------------------------
// |                                                       |
// |    Coding Challenge 4                                 |
// |                                                       |
//  -------------------------------------------------------
/*
    // Let's improve Steven's tip calculator even more, this time using loops!

    // Your tasks:

    // 1. Create an array called bills containing all 10 test bill values.

    // 2. Create empty arrays for the tips and the totals (tips and totals)

    // 3. Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



    // TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.



    // BONUS:

    // 1. Write a function calcAverage which takes an array called arr as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it if you feel like it:

    // 2. First, you will need to add up all values in the array. To do the addition, start by creating a variable sum that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the sum variable. This way, by the end of the loop, you have all values added together.

    // 3. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements).

    // 4. Call the function with the totals array.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));
