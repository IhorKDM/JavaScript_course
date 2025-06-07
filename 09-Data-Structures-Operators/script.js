"use strict";

// Challenge 4: test data:
/*
underscore_case 
 first_name 
Some_Variable 
  calculate_AGE 
delayed_departure
*/

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Challenge Data
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

const weekDays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [weekDays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2}, and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//  ----------------------------------------------------------------
// |                                                                |
// |  Destructuring Arrays                                          |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[1];
  const c = arr[2];

  // Destructuring assignment
  const [x, y, z] = arr;
  console.log(x, y, z);
  console.log(arr);

  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);

  // const temp = main;
  // main = secondary;
  // secondary = temp;

  [secondary, main] = [main, secondary];
  console.log(main, secondary);

  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse);

  // Nested destructuring
  const nested = [2, 4, [5, 6]];
  const [i, , [j, k]] = nested;
  console.log(i, j, k);

  // Default values
  const [p = -1, q = -1, r = -1] = [8, 9];
  console.log(p, q, r);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Destructuring Objects                                         |
// |                                                                |
//  ----------------------------------------------------------------
/*
  restaurant.orderDelivery({
    time: "22:30",
    address: "Via del Sole, 21",
    mainIndex: 2,
    starterIndex: 2,
  });

  const { name, openingHours, categories } = restaurant;
  console.log(name, openingHours, categories);

  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  console.log(restaurantName, hours, tags);

  // Default values
  const { menu = [], starterMenu: starters = [] } = restaurant;
  console.log(menu, starters);

  // Mutating variables
  let a = 111;
  let b = 999;
  const obj = { a: 23, b: 7, c: 14 };

  ({ a, b } = obj);
  console.log(a, b);

  // Nested objects
  const {
    fri: { open: o, close: c },
  } = openingHours;
  console.log(o, c);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  The Spread Operator                                           |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const arr = [7, 8, 9];
  const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
  console.log(badNewArr);

  const newArr = [1, 2, ...arr];
  console.log(newArr);

  console.log(...newArr);

  const newMenu = [...restaurant.mainMenu, "Gnocci"];
  console.log(newMenu);

  // Copying an array
  const mainMenuCopy = [...restaurant.mainMenu];

  // Join two arrays
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
  console.log(menu);

  // Iterables: arrays, strings, maps, sets. NOT objects
  const str = "Jonas";
  const letters = [...str, " ", "S."];
  console.log(letters);
  console.log(...str);

  // Real-world example
  // const ingredients = [
  //   prompt("Let's make pasta! Ingredient 1?"),
  //   prompt("Ingredient 2?"),
  //   prompt("Ingredient 3?"),
  // ];
  // console.log(ingredients);

  // restaurant.orderPasta(...ingredients);

  // Objects
  const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Giuseppe" };
  console.log(newRestaurant);

  const restaurantCopy = { ...restaurant };
  restaurantCopy.name = "Ristorante Roma";
  console.log(restaurantCopy.name);
  console.log(restaurant.name);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Rest Pattern and Parameters                                   |
// |                                                                |
//  ----------------------------------------------------------------
/*
  // 1. Destructuring
  // SPREAD, because on RIGHT side of =
  const arr = [1, 2, ...[3, 4]];

  // REST, because on LEFT side of =
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  console.log(a, b, others);

  const [pizza, , risotto, ...otherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
  ];
  console.log(pizza, risotto, otherFood);

  // Objects
  const { sat, ...weekDays } = restaurant.openingHours;
  console.log(sat, weekDays);

  // 2. Functions
  const add = function (...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) sum += numbers[i];
    console.log(sum);
  };

  add(2, 3);
  add(2, 3, 4, 5, 6);
  add(2, 3, 4, 5, 6, 7, 8, 9);

  const x = [23, 5, 7];
  add(...x);

  restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
  restaurant.orderPizza("mushrooms");
  restaurant.orderPizza("mushrooms", "spinach");
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Short Circuiting (&& and ||)                                  |
// |                                                                |
//  ----------------------------------------------------------------
/*
  console.log("---- OR ----");
  // Use any data type, return any data type, short-circuiting
  console.log(3 || "Jonas");
  console.log("" || "Jonas");
  console.log(true || 0);
  console.log(undefined || null);

  console.log(undefined || 0 || "" || "hello" || 23 || null);

  restaurant.numGuests = 0;

  const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
  console.log(guest1);

  const guest2 = restaurant.numGuests || 10;
  console.log(guest2);

  console.log("---- AND ----");
  console.log(0 && "Jonas");
  console.log(7 && "Jonas");

  console.log("Hello" && 23 && null && "Jonas");

  if (restaurant.orderPizza) {
    restaurant.orderPizza("mushrooms", "spinach");
  }

  restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  The Nullish Coalescing Operator (??)                          |
// |                                                                |
//  ----------------------------------------------------------------
/*
  console.log("---- Nullish Coalescing Operator ----");

  // restaurant.numGuests = 0;

  const guest = restaurant.numGuests || 10;
  console.log(guest);

  const guestCorrect = restaurant.numGuests ?? 10;
  console.log(guestCorrect);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Logical Assignment Operators                                  |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const rest1 = {
    name: "Capri",
    numGuests: 0,
  };

  const rest2 = {
    name: "La Piazza",
    owner: "Giovanni Rossi",
  };

  // OR assignment
  // rest1.numGuests = rest1.numGuests || 10;
  // rest2.numGuests = rest2.numGuests || 10;
  // rest1.numGuests ||= 10;
  // rest2.numGuests ||= 10;

  // Nullish assignment operator (null or undefined)
  rest1.numGuests ??= 10;
  rest2.numGuests ??= 10;

  // AND assignment
  // rest1.owner = rest2.owner && "<ANONYMOUS>";
  // rest2.owner = rest2.owner && "<ANONYMOUS>";

  rest1.owner &&= "<ANONYMOUS>";
  rest2.owner &&= "<ANONYMOUS>";

  console.log(rest1);
  console.log(rest2);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Challenge                                                     |
// |                                                                |
//  ----------------------------------------------------------------
/*
  // 1.
  const [players1, players2] = game.players;
  console.log(players1, players2);

  // 2.
  const [gk, ...fieldPlayers] = players1;
  console.log(gk, fieldPlayers);

  // 3.

  const allPlayers = [...players1, ...players2];
  console.log(allPlayers);

  // 4.
  const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

  // 5.
  const {
    odds: { team1, x: draw, team2 },
  } = game;
  console.log(team1, draw, team2);

  // 6.
  const printGoals = function (...players) {
    console.log(players);
    console.log(`${players.length} goals were scored`);
  };

  printGoals("Davies", "Muller");
  printGoals(...game.scored);

  // 7.
  team1 < team2 && console.log("Team 1 is more likely to win");
  team1 > team2 && console.log("Team 2 is more likely to win");
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Looping Arrays: The for-of Loop                               |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

  for (const item of menu) console.log(item);

  for (const [i, el] of menu.entries()) {
    console.log(`${i + 1}: ${el}`);
  }

  // console.log([...menu.entries()]);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Optional Chaining                                             |
// |                                                                |
//  ----------------------------------------------------------------
/*
  console.log(restaurant.openingHours.mon?.open);
  console.log(restaurant.openingHours?.mon?.open);

  // Example with optional chaining
  const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  for (const day of days) {
    // console.log(day);
    const open = restaurant.openingHours[day]?.open ?? "closed";
    console.log(`On ${day}, we open at ${open}`);
  }

  // Methods
  console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
  console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

  // Arrays
  const user = [{ name: "Jonas", email: "jonas@example.com" }];

  console.log(user[0]?.name ?? "User array empty");
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Looping Objects: Object Keys, Values, and Entries             |
// |                                                                |
//  ----------------------------------------------------------------
/*
  // Property names
  const properties = Object.keys(restaurant.openingHours);
  console.log(properties);

  let openStr = `We are open on ${properties.length} days: `;
  for (const day of properties) {
    openStr += `${day}, `;
  }

  console.log(openStr);

  // Property values
  const values = Object.values(restaurant.openingHours);
  console.log(values);

  // Entire object
  const entries = Object.entries(restaurant.openingHours);
  console.log(entries);

  for (const [key, { open, close }] of entries) {
    console.log(`On ${key}, we open at ${open} and close at ${close}`);
  }
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Challenge 2                                                   |
// |                                                                |
//  ----------------------------------------------------------------
/*
  // 1.
  for (const [i, player] of game.scored.entries()) {
    console.log(`Goal ${i + 1}: ${player}`);
  }

  const odds = Object.values(game.odds);

  // 2.
  let average = 0;
  for (const add of odds) {
    average += add;
  }
  average /= odds.length;
  console.log(average);

  // 3.
  for (const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
    console.log(`Odd of ${teamStr}: ${odd}`);
  }
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Sets                                                          |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const ordersSet = new Set(["Pasta", "Pizza", "Pizza", "Risotto", "Pasta"]);
  console.log(ordersSet);

  console.log(new Set("Jonas"));

  console.log(ordersSet.size);
  console.log(ordersSet.has("Pizza"));
  console.log(ordersSet.has("Bread"));
  ordersSet.add("Garlic Bread");
  ordersSet.add("Garlic Bread"); // Will not add duplicate
  ordersSet.delete("Risotto");
  // ordersSet.clear();
  console.log(ordersSet);

  const ordersArr = [...ordersSet];
  console.log(ordersArr);

  // Example
  for (const order of ordersSet) {
    console.log(order);
  }

  const staff = ["Waiter", "Chef", "Manager", "Waiter", "Chef"];
  const staffUnique = [...new Set(staff)];
  console.log(staffUnique);

  console.log(new Set(staff).size);

  console.log(italianFoods);
  console.log(mexicanFoods);

  const commonFoods = italianFoods.intersection(mexicanFoods);
  console.log("Intersections: ", commonFoods);
  console.log([...commonFoods]);

  const italianMexicanFusion = italianFoods.union(mexicanFoods);
  console.log("Union: ", italianMexicanFusion);

  console.log(...new Set([...italianFoods, ...mexicanFoods]));

  const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
  console.log("Difference italian: ", uniqueItalianFoods);

  const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
  console.log("Difference mexican: ", uniqueMexicanFoods);

  const allUniqueFoods = italianFoods.symmetricDifference(mexicanFoods);
  console.log("Symmetric Difference: ", allUniqueFoods);

  console.log(italianFoods.isDisjoint(mexicanFoods));
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Maps                                                          |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const rest = new Map();
  rest.set("name", "Classico Italiano");
  rest.set(1, "Firenze, Italy");
  console.log(rest.set(2, "Lisbon, Portugal"));

  rest
    .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
    .set("open", 11)
    .set("close", 23)
    .set(true, "We are open")
    .set(false, "We are closed");

  console.log(rest.get("name"));
  console.log(rest.get(true));
  console.log(rest.get(1));

  const time = 24;
  console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

  console.log(rest.has("categories"));
  rest.delete(2);
  console.log(rest);
  // rest.clear();
  console.log(rest.size);

  const arr = [1, 2];
  rest.set(arr, "Test");
  rest.set(document.querySelector("h1"), "Heading");
  console.log(rest);

  console.log(rest.get(arr));

  const question = new Map([
    ["question", "What is the best programming language?"],
    [1, "C"],
    [2, "JavaScript"],
    [3, "Python"],
    [4, "Java"],
    ["correct", 2],
    [true, "Correct!"],
    [false, "Try again!"],
  ]);

  console.log(question);

  // Convert object to map
  console.log(Object.entries(openingHours));
  const hoursMap = new Map(Object.entries(openingHours));
  console.log(hoursMap);

  console.log(question.get("question"));
  for (const [key, value] of question) {
    if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
  }

  // const answer = Number(prompt("Your answer"));
  const answer = 2;
  console.log(answer);

  console.log(question.get(question.get("correct") === answer));

  // Convert map to array
  console.log(...question);
  // console.log(question.entries());
  console.log(question.keys());
  console.log(question.values());
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Challenge 3                                                   |
// |                                                                |
//  ----------------------------------------------------------------
/*
  // 1.
  const events = [...new Set(gameEvents.values())];
  console.log(events);

  // 2.
  gameEvents.delete(64);
  console.log(gameEvents);

  // 3.
  const time = [...gameEvents.keys()].pop();
  console.log(time);

  console.log(
    `An event happend on average every ${time / gameEvents.size} minutes`
  );

  // 4.
  for (const [key, value] of gameEvents) {
    const half = key <= 45 ? "FIRST" : "SECOND";
    console.log(`[${half} HALF] ${key}: ${value}`);
  }
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Working with Strings - Part 1                                 |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const airline = "TAP Air Portugal";
  const plane = "A320";

  console.log(plane[0]);
  console.log(plane[1]);
  console.log(plane[2]);
  console.log("B737"[0]);

  console.log(airline.length);
  console.log("B737".length);

  console.log(airline.indexOf("r"));
  console.log(airline.lastIndexOf("r"));
  console.log(airline.indexOf("Portugal"));

  console.log(airline.slice(4));
  console.log(airline.slice(4, 7));

  console.log(airline.slice(0, airline.indexOf(" ")));
  console.log(airline.slice(airline.lastIndexOf(" ") + 1));

  console.log(airline.slice(-2));
  console.log(airline.slice(1, -1));

  const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === "B" || s === "E") console.log("You got the middle seat");
    else console.log("You got lucky");
  };
  checkMiddleSeat("11B");
  checkMiddleSeat("23C");
  checkMiddleSeat("3E");

  console.log(new String("jonas"));
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Working with Strings - Part 2                                 |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const airline = "TAP Air Portugal";

  console.log(airline.toLowerCase());
  console.log(airline.toUpperCase());

  // Fix capitalization in name
  const passenger = "jOnAs";
  const passengerLower = passenger.toLowerCase();
  const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(passengerCorrect);

  // Comparing emails
  const email = "hello@jonas.io";
  const loginEmail = " Hello@Jonas.Io \n";

  const lowerEmail = loginEmail.toLowerCase();
  console.log(lowerEmail);
  const trimmedEmail = lowerEmail.trim();
  console.log(trimmedEmail);

  const normalizedEmail = loginEmail.toLowerCase().trim();
  console.log(normalizedEmail);
  console.log(email === normalizedEmail);

  // Replacing
  const priceGB = "288,97£";
  const priceUS = priceGB.replace("£", "$").replace(",", ".");
  console.log(priceUS);
  const announcement =
    "All passengers come to boarding door 23. Boarding door 23!";
  console.log(announcement.replace("door", "gate"));
  console.log(announcement.replaceAll("door", "gate"));

  console.log(announcement.replace(/door/g, "gate"));

  // Booleans
  const plane = "A320neo";
  console.log(plane.includes("A320"));
  console.log(plane.includes("Boeing"));
  console.log(plane.startsWith("A320"));
  console.log(plane.startsWith("Airbus"));
  console.log(plane.endsWith("neo"));

  // Practice exercise
  const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes("knife") || baggage.includes("gun")) {
      console.log("You are not allowed on board!");
    } else {
      console.log("Welcome aboard!");
    }
  };
  const baggage1 = "I have a laptop, some Food and a pocket Knife";
  const baggage2 = "Socks and camera";
  const baggage3 = "Got some snacks and a camera and a gun for protection";
  checkBaggage(baggage1);
  checkBaggage(baggage2);
  checkBaggage(baggage3);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Working with Strings - Part 3                                 |
// |                                                                |
//  ----------------------------------------------------------------
/*
  console.log("a+very+nice+string".split("+"));
  console.log("Jonas Schmedtmann".split(" "));
  const [firstName, lastName] = "Jonas Schmedtmann".split(" ");
  console.log(firstName);
  console.log(lastName);

  const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
  console.log(newName);

  const capitalizeName = function (name) {
    const names = name.split(" ");
    const namesUpper = [];

    for (const n of names) {
      // const capitalized = n[0].toUpperCase() + n.slice(1);
      namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(" "));
  };

  capitalizeName("jessica ann smith davis");
  capitalizeName("jonas schmedtmann");

  // Padding
  const message = "Go to gate 23!";
  console.log(message.padStart(25, "+").padEnd(30, "+"));

  const maskCreditCard = function (number) {
    const str = number + "";
    const last = str.slice(-4);
    return last.padStart(str.length, "*");
  };

  console.log(maskCreditCard(12345678));
  console.log(maskCreditCard(1234567890123456));
  console.log(maskCreditCard("1234 5678 9012 3456"));

  // Repeat
  const message2 = "Bad weather... All departures delayed...";
  console.log(message2.repeat(5));

  const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
  };
  planesInLine(5);
  planesInLine(3);
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  Challenge 4                                                   |
// |                                                                |
//  ----------------------------------------------------------------
/*
  document.body.append(document.createElement("textarea"));
  document.body.append(document.createElement("button"));

  document.querySelector("button").addEventListener("click", function () {
    const text = document.querySelector("textarea").value;
    const rows = text.split("\n");

    for (const [i, row] of rows.entries()) {
      const [first, second] = row.toLowerCase().trim().split("_");
      const output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.querySelector("button").click(); // Simulate a click on the new game button
    }
  });
*/

//  ----------------------------------------------------------------
// |                                                                |
// |  String Methods Practice                                       |
// |                                                                |
//  ----------------------------------------------------------------
/*
  const getCode = (str) => str.slice(0, 3).toUpperCase();

  for (const flight of flights.split("+")) {
    const [type, from, to, time] = flight.split(";");
    const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
      "_",
      " "
    )} ${getCode(from)} ${getCode(to)} (${time.replace(":", "h")})`.padStart(36);
    console.log(output);
  }
*/
