// Remember, we're gonna use strict mode in all scripts now!
'use strict';

//  -----------------------------------------------------------
// |                                                           |
// |    Problem solving: Using Google, StackOverflow, and MDN  |
// |                                                           |
//  -----------------------------------------------------------
/*
    // PROBLEM 1:
    // We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

    const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

    // 1. Understanding the problem
    // - What is the temperature amplitude? Answer: The difference between the highest and lowest temperature.
    // - How to compute the maximum and minimum temperatures in an array?
    // - What does 'sensor error' mean? Answer: It means that the value is not a number and should be ignored in calculations.

    // 2. Breaking it down into sub-problems
    // - How to ignore non-number values in the array?
    // - Find the maximum temperature in the array.
    // - Find the minimum temperature in the array.
    // - Calculate the amplitude by subtracting the minimum from the maximum.

    const calcTempAmplitude = function (temps) {
    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max);
    console.log(min);
    return max - min;
    };

    const amplitude = calcTempAmplitude(temperatures);
    console.log(amplitude);

    // PROBLEM 2:
    // Function should now receive two arrays of temperatures.

    // 1. Understanding the problem
    // - With 2 arrays, should we implement the same logic twice? No! Just merge the arrays first.

    // 2. Breaking it down into sub-problems
    // - How to merge two arrays?

    const calcTempAmplitudeNew = function (temps1, temps2) {
    const temps = temps1.concat(temps2);
    console.log(temps);

    let max = temps[0];
    let min = temps[0];
    for (let i = 0; i < temps.length; i++) {
        const currentTemp = temps[i];

        if (typeof currentTemp !== 'number') continue;

        if (currentTemp > max) max = currentTemp;
        if (currentTemp < min) min = currentTemp;
    }
    console.log(max);
    console.log(min);
    return max - min;
    };

    const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
    console.log(amplitudeNew);
*/

//  -----------------------------------------------------------
// |                                                           |
// |    Debugging: Finding errors in code                      |
// |                                                           |
//  -----------------------------------------------------------
/*
    const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        value: prompt('Enter the temperature in Celsius: '),
    };

    // B) Find
    console.log(measurement);
    console.table(measurement);

    //   console.log(measurement.value);
    //   console.warn(measurement.value);
    //   console.error(measurement.value);

    // C) Fix
    const kelvin = Number(measurement.value) + 273;
    return kelvin;
    };

    // A) Identify the problem
    console.log(measureKelvin());
*/

//  -----------------------------------------------------------
// |                                                           |
// |    Challenge 1                                            |
// |                                                           |
//  -----------------------------------------------------------
/*
    // Given an Array of forecasted maximum temps, the thermometer displays a string with these temperatures.

    // Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in a 3 days ..."

    // Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

    // Use the problem-solving framework: Understand the problem and break it up into sub-problems!

    // TEST DATA 1: [17, 21, 23]
    // TEST DATA 2: [12, 5, -5, 0, 4]


    // 1) Understanding the problem
    // - Array transformed to string, separated by ...
    // - What is the X days? Answer: index + 1

    // 2) Breaking up into sub-problems
    // - Transform array into string
    // - Transform each element to string with ºC
    // - Strings needs to contain day (index + 1)
    // - Add ... between elements and start and end of string

    const data1 = [17, 21, 23];
    const data2 = [12, 5, -5, 0, 4];

    `... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`;

    const printForecast = function (arr) {
    let str = '... ';
    for (let i = 0; i < arr.length; i++) {
        str = str + `${arr[i]}ºC in ${i + 1} days ... `;
    }
    console.log(str);
    };

    printForecast(data1);
*/

//  -----------------------------------------------------------
// |                                                           |
// |    Challenge 2                                            |
// |                                                           |
//  -----------------------------------------------------------

/*
    // Let's say you're building a time tracking application for freelancers. At some point in building this app, you need a function that receives daily work hours for a certain week, and returns:
    // 1. Total hours worked
    // 2. Average hours worked per day
    // 3. Days worked (number of days with non-zero hours)
    // 4. Numbers of days worked
    // 5. Whether the week was full-time (worked 35 hours or more)

    // TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]


    function analyzeWorkWeek(dailyHours) {
    const totalHours = dailyHours.reduce((sum, hours) => sum + hours, 0);

    const averageHours = Math.round((totalHours / dailyHours.length) * 10) / 10;

    const maxHours = Math.max(...dailyHours);
    const maxDay = dailyHours.indexOf(maxHours);

    const daysWorked = dailyHours.filter(hours => hours > 0).length;

    const isFullTime = totalHours >= 35;

    return {
        totalHours,
        averageHours,
        maxDay,
        daysWorked,
        isFullTime,
    };
    }

    const weeklyHours = [7.5, 8, 6.5, 0, 8.5, 5, 0];

    const analysis = analyzeWorkWeek(weeklyHours);
    console.log(analysis);
*/
