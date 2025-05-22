//  -----------------------------------------------------------------
// |                                                                 |
// |    Starting with JavaScript                                     |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    let js = "amazing";
    // alert(js === "amazing" ? "JavaScript is fun!" : "JavaScript is boring!");
    console.log(40 + 8 + 23 - 10);

    // Values and Variables
    console.log("Jonas");
    console.log(23);

    let firstName = "Matilda";

    console.log(firstName);
    console.log(firstName);
    console.log(firstName);

    Variable name conventions
    let jonas_matilda = 'JM';
    let $function = 27;
    // let firstName = "Jonas";
    let person = "jonas";
    let PI = 3.1415;

    let myFirstJob = "Coder";
    let myCurrentJob = "Teacher";

    let job1 = "Programmer";
    let job2 = "Teacher";

    console.log(myFirstJob);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Values and Variables                   |
// |                                                                 |
//  -----------------------------------------------------------------
/*

    // Declare variables called country, continent and population and assign their values according to your own country (population in millions).

    // Log their values to the console.




    let country = "Ukraine";
    let continent = "Europe";
    let population = 44;

    console.log(
    `${country} is in ${continent}, and its population is ${population} millions`
    );
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Data Types                                                   |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    let javaScriptIsFun = true;
    console.log(javaScriptIsFun);

    // console.log(typeof true);
    console.log(typeof javaScriptIsFun);
    // console.log(typeof 23);
    // console.log(typeof "Jonas");

    javaScriptIsFun = "YES!";
    console.log(typeof javaScriptIsFun);

    let year;
    console.log(year);
    console.log(typeof year);

    year = 1991;
    console.log(typeof year);

    console.log(typeof null); // object
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Data Types                             |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.

    // Log the types of isIsland, population, country and language to the console.


    let isIsland = false;
    let language;
    let population = 44;
    let country = "Ukraine";
    console.log(
    typeof isIsland,
    typeof population,
    typeof country,
    typeof language
    );
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    let, const and var                                           |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    let age = 30;
    age = 31;

    const birthYear = 1991;
    // birthYear = 1990;

    // const job;

    var job = "programmer";
    job = "teacher";

    lastName = "Schmedtmann";
    console.log(lastName);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: let, const and var                     |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Set the value of language to the language spoken where you live (some countries have multiple languages, but just choose one).

    // Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.

    // Try to change one of the changed variables now, and observe what happens.


    let language = "Ukrainian";
    const country = "Ukraine";
    const continent = "Europe";
    const isIsland = false;
    let population = 44;
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Basic Operators                                              |
// |                                                                 |
//  -----------------------------------------------------------------
/*
        // Math Operators
    const now = 2037;
    const ageJonas = now - 1991;
    const ageSarah = now - 2018;
    console.log(ageJonas, ageSarah);

    console.log(ageJonas * 2, ageJonas / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

    const firstName = "Jonas";
    const lastName = "Schmedtmann";
    console.log(firstName + " " + lastName); // concatenation

        // Assignment Operators
    let x = 10 + 5; // 15
    x += 10; // x = x + 10
    x *= 4; // x = x * 4
    x++; // x = x + 1
    x--; // x = x - 1
    x--;
    console.log(x);

        // Comparison Operators
    console.log(ageJonas > ageSarah); // >, <, >=, <=
    console.log(ageSarah >= 18);

    const isFullAge = ageSarah >= 18;
    console.log(now - 1991 > now - 2018); // false
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Operators Precedence                                         |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

    const now = 2037;
    const ageJonas = now - 1991;
    const ageSarah = now - 2018;

    console.log(now - 1991 > now - 2018);

    console.log(25 - 10 - 5);

    let x, y;
    x = y = 25 - 10 - 5;
    console.log(x, y);

    const averageAge = (ageJonas + ageSarah) / 2;
    console.log(ageJonas, ageSarah, averageAge);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Operators                              |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // If your country split in half, and each half would contain half the population, then how many people would live in each half?

    // Increase the population of your country by 1 and log the result to the console.

    // Finland has a population of 6 million. Does your country have more people than Finland?

    // The average population of a country is 33 million people. Does you country have less people than the average country?

    // Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.


    const myCountry = "Ukraine";
    const myLanguage = "Ukrainian";
    const myContinent = "Europe";
    const myPopulation = 44;
    const halfMyPopulation = myPopulation / 2;
    const newMyPopulation = myPopulation + 1;
    const finlandPopulation = 6;
    const averagePopulation = 33;
    const ukrAgainstFinlandPopulation = myPopulation > finlandPopulation;
    const ukrAgainstAveragePopulation = myPopulation < averagePopulation;
    const description = `${myCountry} is in ${myContinent}, and its ${myPopulation} million people speak ${myLanguage}.`;

    console.log(description);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    CHALLENGE 1                                                  |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height) (mass in kg and height in meters).

    // Your task is to write some code to help them:

    // Store Mark's and John's mass and height in variables called massMark, heightMark, massJohn and heightJohn.

    // Calculate both their BMIs using the formula, and store the results in two variables called BMIMark and BMIJohn.

    // Log the value of BMIMark and BMIJohn to the console.

    // BONUS: Create a boolean variable markHigherBMI containing information about whether Mark has a higher BMI than John. Log it to the console too

    // TEST DATA 1: Marks weighs 78 kg and is 1.69 m tall. John weighs 92 kg and is 1.95 m tall.

    // TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.


    const massMark = 95;
    const heightMark = 1.88;
    const massJohn = 85;
    const heightJohn = 1.76;

    const BMIMark = massMark / (heightMark * heightMark);
    const BMIJohn = massJohn / (heightJohn * heightJohn);
    console.log(BMIMark, BMIJohn);
    const markHigherBMI = BMIMark > BMIJohn;
    console.log(markHigherBMI);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Strings and Template Literals                                |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const firstName = "Jonas";
    const job = "teacher";
    const birthYear = 1991;

    const jonas =
    "I'm " + firstName + ", a " + (2037 - birthYear) + " years old " + job + "!";
    console.log(jonas);

    const jonasNew = `I'm ${firstName}, a ${2037 - birthYear} years old ${job}!`;
    console.log(jonasNew);

    console.log(`Just a regular string...`);
    console.log(
    "String with \n\
    multiple \n\
    lines"
    );

    console.log(`String with
    multiple
    lines`);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Strings and Template Literals          |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Recreate the description variable from the last assignment, this time using the template literal syntax.


    const myCountry = "Ukraine";
    const myLanguage = "Ukrainian";
    const myContinent = "Europe";
    const myPopulation = 44;
    const description = `${myCountry} is in ${myContinent}, and its ${myPopulation} million people speak ${myLanguage}.`;
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Taking Decisions: if / else Statements                       |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const age = 15;
    const isOldEnough = age >= 18;

    if (isOldEnough) {
    console.log("Sarah can start driving license 🚗");
    } else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
    }

    const birthYear = 2020;
    let century;
    if (birthYear <= 2000) {
    century = 20;
    } else {
    century = 21;
    }
    console.log(century);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Taking Decisions: if / else Statements |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // If your country's population is greater than 33 million, log a string like this to the console: "Portugal's population is 22 million below average" (the 22 is the average of 33 minus the country's population).

    // After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


    let myCountry = "Ukraine";
    let myLanguage = "Ukrainian";
    let myContinent = "Europe";
    let myPopulation = 44;
    const averagePopulation = 33;
    const populationDifference = myPopulation - averagePopulation;
    const isAboveAverage = myPopulation > averagePopulation;

    if (isAboveAverage) {
    console.log(
        `${myCountry}'s population is ${populationDifference} million above average`
    );
    } else {
    console.log(
        `${myCountry}'s population is ${-populationDifference} million below average`
    );
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    CHALLENGE 2                                                  |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

    // 1. Print a nice output to the console, telling the user who has the higher BMI. The message can be either:

    // "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!".

    // 2. Modify the outputs above to use template literals to include the BMI values in the outputs.

    // Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or "John's BMI (29.1) is higher than Mark's (27)!".

    // Note: Don't round the BMI values. Leave them as they are.


    const massMark = 95;
    const heightMark = 1.88;
    const massJohn = 85;
    const heightJohn = 1.76;

    const BMIMark = massMark / (heightMark * heightMark);
    const BMIJohn = massJohn / (heightJohn * heightJohn);

    if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
    } else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Type Conversion and Coercion                                 |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const inputYear = "1991";
    console.log(Number(inputYear), inputYear);
    console.log(Number(inputYear) + 18);
    console.log(Number("Jonas"));
    console.log(typeof NaN); // Not a Number
    console.log(String(23), 23);

    console.log("I am " + 23 + " years old");
    console.log("I am " + String(23) + " years old");
    console.log("23" - "10" - 3);
    console.log("23" * "2");
    console.log("23" / "2");

    let n = "1" + 1; // 11
    n = n - 1; // 10
    console.log(n); // 10
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Type Conversion and Coercion           |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    console.log("9" - "5"); // -> 4
    console.log("19" - "13" + "17"); // -> 617
    console.log("19" - "13" + 17); // -> 23
    console.log("123" < 57); // -> false
    console.log(5 + 6 + "4" + 9 - 4 - 2); // -> 1143
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Truthy and Falsy Values                                      |
// |                                                                 |
//  -----------------------------------------------------------------
/*
        // 5 Falsy values: 0, "", undefined, null, NaN

    console.log(Boolean(0));
    console.log(Boolean(undefined));
    console.log(Boolean("jonas"));
    console.log(Boolean({}));

    const money = 100;
    if (money) {
      console.log("Don't spend it all ;)");
    } else {
      console.log("You should get a job!");
    }

    let height = 0;
    if (height) {
      console.log("YAY! Height is defined");
    } else {
      console.log("Height is UNDEFINED");
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Equality Operators: == vs. ===                               |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const age = 18;
    if (age === 18) console.log("You just became an adult :D (strict)");

    if (age == 18) console.log("You just became an adult :D (loose)");

    const favorite = Number(prompt("What's your favorite number?"));
    console.log(favorite);
    console.log(typeof favorite);

    if (favorite === 23) {
      console.log("Cool! 23 is an amazing number!");
    } else if (favorite === 7) {
      console.log("7 is also a cool number");
    } else {
      console.log("Number is not 23 or 7");
    }

    if (favorite !== 23) console.log("Why not 23?");
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Equality Operators: == vs. ===         |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Declare a variable numNeighbours based on a prompt input like this:

    // prompt('How many neighbour countries does your contry have?');

    // If there is only 1 neighbour, log to the console 'Only 1 border!' (use loose equality == for now).

    // Use an else-if block to log 'More than 1 border' in case numNeighbours is greater than 1.

    // Use an else block to log 'No borders' (this block will be executed when numNeighbours is 0 or any other value).

    // Test the code with different values of numNeighbours, including 1 and 0.

    // Change == to ===, and test the code again, with the same values of numNeighbours. Notice what happens when there is exactly 1 border! Why is this happening?

    // Finally, convert numNeighbours to a number, and watch what happens now when you input 1.

    // Reflect on why we should use the === operator and type conversion in this situation.


    const numNeighbours = Number(
      prompt("How many neighbour countries does your country have?")
    );
    
    if (numNeighbours === 1) {
      console.log("Only 1 border!");
    } else if (numNeighbours > 1) {
      console.log("More than 1 border");
    } else {
      console.log("No borders");
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Logical Operators                                            |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const hasDriversLicense = true; // A
    const hasGoodVision = true; // B

    console.log(hasDriversLicense && hasGoodVision);
    console.log(hasDriversLicense || hasGoodVision);
    console.log(hasDriversLicense && !hasGoodVision);

    // if (hasDriversLicense && hasGoodVision) {
    //   console.log("Sarah is able to drive!");
    // } else {
    //   console.log("Someone else should drive...");
    // }

    const isTired = true; // C
    console.log(hasDriversLicense && hasGoodVision && isTired);

    if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
    } else {
    console.log("Someone else should drive...");
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Logical Operators                      |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Comment out the previous code so the prompt doesn't get in the way.

    // Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.

    // Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.

    // If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.

    // Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).

    const myCountry = "Ukraine";
    const myLanguage = "Ukrainian";
    const myContinent = "Europe";
    const myPopulation = 44;
    const isMyCountrySpeakingEnglish = false;
    const isMyCountryAnIsland = false;
    
    if (isMyCountrySpeakingEnglish && myPopulation < 50 && !isMyCountryAnIsland) {
        console.log(`You should live in ${myCountry} :)`);
    } else {
        console.log(`${myCountry} does not meet your criteria :(`);
}
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    CHALLENGE 3                                                  |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

    // Your tasks:

    // 1. Calculate the average score for each team, using the test data included below. The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

    // 2. Compare the team's average scores to determine the winner of the competition, and print to the console:

    // "Dolphins win the trophy" if Dolphins win, or

    // "Koalas win the trophy" if Koalas win, or

    // "Both win the trophy" if their average scores are equal.

    // TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

    
    const scoreDolphins = (96 + 108 + 89) / 3;
    const scoreKoalas = (88 + 91 + 110) / 3;
    
    console.log(`Dolphins: ${scoreDolphins} Koalas: ${scoreKoalas}`);
    
    if (scoreDolphins > scoreKoalas) {
        console.log("Dolphins win the trophy");
    } else if (scoreKoalas > scoreDolphins) {
        console.log("Koalas win the trophy");
    } else {
        console.log("Both win the trophy");
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Switch Statement                                             |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const day = "monday";

    switch (day) {
        case "monday":
            console.log("Сьогодні понеділок");
            break;
        case "tuesday":
            console.log("Сьогодні вівторок");
            break;
        case "wednesday":
            console.log("Сьогодні середа");
            break;
        case "thursday":
            console.log("Сьогодні четвер");
            break;
        case "friday":
            console.log("Сьогодні п'ятниця");
            break;
        case "saturday":
            console.log("Сьогодні субота");
            break;
        case "sunday":
            console.log("Сьогодні неділя");
            break;
        default:
            console.log("Невідомий день");
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: Switch Statement                       |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Use a switch statement to log the following string for the given language:

    // chinese or mandarin: 'MOST number of native speakers!';

    // spanish: '2nd place in number of native speakers';

    // english: '3rd place';

    // hindi: 'Number 4';

    // arabic: '5th most spoken language';

    // for all other simply log 'Great language too :D'.

    let language = "Ukrainian";

    switch (language) {
    case "chinese":
    case "mandarin":
        console.log("MOST number of native speakers!");
        break;
    case "spanish":
        console.log("2nd place in number of native speakers");
        break;
    case "english":
        console.log("3rd place");
        break;
    case "hindi":
        console.log("Number 4");
        break;
    case "arabic":
        console.log("5th most spoken language");
        break;
    default:
        console.log("Great language too :D");
    }
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Statements and Expressions                                   |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    3 + 4
    1991
    true && false && !false

    if (23 > 10) {
    const str = "23 is bigger";
    console.log(str);
    }

    const me = "Jonas";
    console.log(`I'm ${2037 - 1991} years old`);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    The Conditional (Ternary) Operator                           |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    const age = 23;
    // age >= 18
    //   ? console.log("I like to drink wine 🍷")
    //   : console.log("I like to drink water 💧");

    const drink = age >= 18 ? "wine 🍷" : "water 💧";
    console.log(drink);

    let drink2;
    if (age >= 18) {
    drink2 = "wine 🍷";
    } else {
    drink2 = "water 💧";
    }

    console.log(drink2);

    console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    Practice Assignments: The Conditional (Ternary) Operator     |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!

    // After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.


    const myCountry = "Ukraine";
    const myLanguage = "Ukrainian";
    const myContinent = "Europe";
    const myPopulation = 44;
    const averagePopulation = 33;

    console.log(
    `${myCountry}'s population is ${
        myPopulation > averagePopulation ? "above" : "below"
    } average`
    );
*/

//  -----------------------------------------------------------------
// |                                                                 |
// |    CHALLENGE 4                                                  |
// |                                                                 |
//  -----------------------------------------------------------------
/*
    // Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

    // Your tasks:

    // Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

    // Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

    // Example: The bill was 275, the tip was 41.25, and the total value 316.25.

    // Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

    // TEST DATA: Test with different bill values: 275, 40, and 430

    // HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

    // HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

    
    const bill = 40;
    const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    const total = bill + tip;
    
    console.log(
        `The bill was ${bill}, the tip was ${tip}, and the total value ${total}`
    );
 */
