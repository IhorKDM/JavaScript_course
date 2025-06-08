"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: "premium",
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: "premium",
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: "standard",
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: "basic",
};

const account5 = {
  owner: "Ihor Sykuta",
  movements: [1000, -500, 200, -300, 400],
  interestRate: 0.2,
  pin: 777,
  type: "basic",
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

const calcAndDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((dep) => (dep * acc.interestRate) / 100)
    .filter((int) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcAndDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();
  console.log("LOGIN");

  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(" ")[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = "";
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  //clear transfer fields
  inputTransferTo.value = inputTransferAmount.value = "";

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    // Do the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  // Clear input field
  inputLoanAmount.value = "";
});

btnClose.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  // Clear input fields
  inputCloseUsername.value = inputClosePin.value = "";
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  // Prevent form from submitting
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ["USD", "United States dollar"],
//   ["EUR", "Euro"],
//   ["GBP", "Pound sterling"],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
//  -------------------------------------------------------------
// |                                                             |
// |  Simple Array Methods                                       |
// |                                                             |
//  -------------------------------------------------------------
/*
  let arr = ["a", "b", "c", "d", "e"];

  // SLICE - NOT mutates the original array
  console.log(arr.slice(2));
  console.log(arr.slice(2, 4));
  console.log(arr.slice(-2));
  console.log(arr.slice(-1));
  console.log(arr.slice(1, -2));
  console.log(arr.slice()); // make a shallow copy
  console.log([...arr]); // also makes a shallow copy

  // SPLICE - MUTATES the original array
  console.log(arr.splice(2));
  console.log(arr);
  arr.splice(-1);
  console.log(arr.splice(1, 2));
  console.log(arr);

  // REVERSE - MUTATES the original array
  arr = ["a", "b", "c", "d", "e"];
  let arr2 = ["j", "i", "h", "g", "f"];
  console.log(arr2.reverse());
  console.log(arr2);

  // CONCAT - NOT mutates the original array
  const letters = arr.concat(arr2);
  console.log(letters);
  console.log([...arr, ...arr2]);

  // JOIN - NOT mutates the original array
  console.log(letters.join(" - "));
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The New at Methods                                         |
// |                                                             |
//  -------------------------------------------------------------
/*
  const arr = [23, 11, 64];
  console.log(arr[0]);
  console.log(arr.at(0));

  // Getting the last element
  console.log(arr[arr.length - 1]);
  console.log(arr.slice(-1)[0]);
  console.log(arr.at(-1));

  console.log("Jonas".at(0));
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Looping Arrays: forEach                                    |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  for (const movement of movements) {
    if (movement > 0) {
      console.log(`You deposited ${movement}`);
    } else {
      console.log(`You withdrew ${Math.abs(movement)}`);
    }
  }
  console.log("--------- FOREACH ---------");
  movements.forEach((mov, i, arr) => {
    console.log(
      `Movement ${i + 1}: ${
        mov > 0 ? "You deposited" : "You withdrew"
      } ${Math.abs(mov)}`
    );
    // console.log(arr);
  });
*/

//  -------------------------------------------------------------
// |                                                             |
// |  forEach with Maps and Sets                                 |
// |                                                             |
//  -------------------------------------------------------------
/*
  // Using forEach with a Map
  const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
  ]);

  currencies.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);
  });

  // Using forEach with a Set
  const currenciesUnique = new Set(["USD", "EUR", "GBP", "USD", "EUR"]);
  console.log(currenciesUnique);
  currenciesUnique.forEach((value, _, set) => {
    console.log(`${value}: ${value}`);
  });
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Challenge 1                                                |
// |                                                             |
//  -------------------------------------------------------------
/*
  // data 1: Julia [3, 5, 2, 12, 7], Kate [4, 1, 15, 8, 3]
  // data 2: Julia [9, 16, 6, 8, 3], Kate [10, 5, 6, 1, 4]

  const checkDogs = function (dogsJulia, dogsKate) {
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0, 1);
    dogsJuliaCorrected.splice(-2);
    // console.log(dogsJuliaCorrected);
    const dogs = dogsJuliaCorrected.concat(dogsKate);
    console.log(dogs);

    dogs.forEach(function (dog, i) {
      if (dog >= 3) {
        console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old.`);
      } else {
        console.log(`Dog number ${i + 1} is still a puppy 🐶`);
      }
    });
  };

  checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
  checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The map Method                                             |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  const eurToUsd = 1.1;

  const movementsUSD = movements.map((mov) => mov * eurToUsd);
  console.log(movements);
  console.log(movementsUSD);

  const movementsUSDfor = [];
  for (const mov of movements) {
    movementsUSDfor.push(mov * eurToUsd);
  }
  console.log(movementsUSDfor);

  const movementsDescriptions = movements.map(
    (mov, i) =>
      `Movement ${i + 1}: You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
        mov
      )}`
  );

  console.log(movementsDescriptions);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The filter Method                                          |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const deposits = movements.filter((mov) => mov > 0);
  console.log(deposits);

  const deps = [];
  for (const mov of movements) {
    if (mov > 0) {
      deps.push(mov);
    }
  }
  console.log(deps);

  const withdrawals = movements.filter((mov) => mov < 0);
  console.log(withdrawals);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The reduce Method                                          |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  console.log(movements);

  const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 1_000_000);
  console.log(balance);

  let balance2 = 0;
  for (const mov of movements) {
    balance2 += mov;
  }
  console.log(balance2);

  // Maximum value in an array
  const max = movements.reduce(
    (acc, mov) => (acc > mov ? acc : mov),
    movements[0]
  );
  console.log(max);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Challenge 2                                                |
// |                                                             |
//  -------------------------------------------------------------
/*
  // Test data 1: [5, 2, 4, 1, 15, 8, 3]
  // Test data 2: [16, 6, 10, 5, 6, 1, 4]

  const calcAverageHumanAge = function (ages) {
    const humanAges = ages.map((age) => (age <= 2 ? age * 2 : 16 + age * 4));
    console.log(humanAges);
    const adults = humanAges.filter((age) => age >= 18);
    console.log(adults);
    const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

    return average;
  };
  const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  console.log(average1);
  console.log(average2);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Chaining Methods                                           |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // PIPELINE
  console.log(
    movements
      .filter((mov) => mov > 0)
      .map((mov, i, arr) => {
        // console.log(arr);
        return mov * 1.1;
      })
      // .map((mov) => mov * 1.1)
      .reduce((acc, mov) => acc + mov, 0)
  );
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Challenge 3                                                |
// |                                                             |
//  -------------------------------------------------------------
/*
  // Test data 1: [5, 2, 4, 1, 15, 8, 3]
  // Test data 2: [16, 6, 10, 5, 6, 1, 4]

  const calcAverageHumanAge = (ages) =>
    ages
      .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
      .filter((age) => age >= 18)
      .reduce((acc, age, _, arr) => acc + age / arr.length, 0);

  const average1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
  const average2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
  console.log(average1);
  console.log(average2);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The find Method                                            |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  console.log(movements);

  const firstWithdrawal = movements.find((mov) => mov < 0);
  console.log(firstWithdrawal);

  console.log(accounts);

  const account = accounts.find((acc) => acc.owner === "Jessica Davis");
  console.log(account);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The findLast and findLastIndex Methods                     |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  console.log(movements);

  const lastWithdrawal = movements.findLast((mov) => mov < 0);
  console.log(lastWithdrawal);

  const lastWidthrawal = function (movements) {
    const lastWithdrawal = movements.findLast((mov) => mov < 0);
    const lastWithdrawalIndex = movements.findLastIndex((mov) => mov < 0);
    console.log(
      `Your latest large withdrawal was ${lastWithdrawal}, and it happened ${lastWithdrawalIndex} movements ago.`
    );
  };
  lastWithdrawal(movements);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The some and every Methods                                 |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  // Some: Checks if at least one element in the array passes the test
  console.log(movements);
  // Equality
  console.log(movements.includes(-130));

  // Some: Condition
  console.log(movements.some((mov) => mov === -130));

  const anyDep = movements.some((mov) => mov > 1500);
  console.log(anyDep);

  // Every: Checks if all elements in the array pass the test
  console.log(movements.every((mov) => mov > 0));
  console.log(account4.movements.every((mov) => mov > 0));

  // Separate callback
  const isDeposits = (mov) => mov > 0;

  console.log(movements.every(isDeposits));
  console.log(movements.some(isDeposits));
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The flat and flatMap Methods                               |
// |                                                             |
//  -------------------------------------------------------------
/*
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  console.log(arr.flat());

  const arrDeep = [[[1, [2]], 3], [4, [5, 6]], 7, 8];
  console.log(arrDeep.flat(3));

  const accountMovements = accounts.map((acc) => acc.movements);
  console.log(accountMovements);
  const allMovements = accountMovements.flat();
  console.log(allMovements);
  const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
  console.log(overallBalance);

  const overallBalanceFlat = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, mov) => acc + mov, 0);
  console.log(overallBalanceFlat);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Challenge 4                                                |
// |                                                             |
//  -------------------------------------------------------------
/*
  const breeds = [
    {
      breed: "German Shepherd",
      averageWeight: 32,
      activities: ["fetch", "swimming"],
    },
    {
      breed: "Dalmatian",
      averageWeight: 24,
      activities: ["running", "fetch", "agility"],
    },
    {
      breed: "Labrador",
      averageWeight: 28,
      activities: ["swimming", "fetch"],
    },
    {
      breed: "Beagle",
      averageWeight: 12,
      activities: ["digging", "fetch"],
    },
    {
      breed: "Husky",
      averageWeight: 26,
      activities: ["running", "agility", "swimming"],
    },
    {
      breed: "Bulldog",
      averageWeight: 36,
      activities: ["sleeping"],
    },
    {
      breed: "Poodle",
      averageWeight: 18,
      activities: ["agility", "fetch"],
    },
  ];

  // 1.
  const huskyWeight = breeds.find(
    (breed) => breed.breed === "Husky"
  ).averageWeight;
  console.log(huskyWeight);

  // 2.
  const dogBothActivities = breeds.find(
    (breed) =>
      breed.activities.includes("fetch") && breed.activities.includes("running")
  );
  console.log(dogBothActivities.breed);

  // 3.
  const allActivities = breeds.flatMap((breed) => breed.activities);
  console.log(allActivities);

  // 4.
  const uniqueActivities = [...new Set(allActivities)];
  console.log(uniqueActivities);

  // 5.
  const swimmingAdjacent = [
    ...new Set(
      breeds
        .filter((breed) => breed.activities.includes("swimming"))
        .flatMap((breed) => breed.activities)
        .filter((activity) => activity !== "swimming")
    ),
  ];
  console.log(swimmingAdjacent);

  // 6.
  console.log(breeds.every((breed) => breed.averageWeight >= 10));

  // 7.
  console.log(breeds.some((breed) => breed.activities.length >= 3));

  // Bonus
  const fetchBreeds = breeds
    .filter((breed) => breed.activities.includes("fetch"))
    .map((breed) => breed.averageWeight)
    .reduce((acc, weight) => (acc > weight ? acc : weight), 0);

  // const HeaviestFetchBreed = Math.max(...fetchBreeds);
  // console.log(HeaviestFetchBreed);
  console.log(fetchBreeds);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  The sort Method                                            |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

  const owners = ["Jonas", "Zach", "Adam", "Martha"];
  console.log(owners.sort()); // Mutates the original array
  console.log(owners);

  // Numbers
  console.log(movements);
  console.log(movements.sort());

  // return < 0, A, B (keep order)
  // return > 0, B, A (switch order)

  // Ascending order
  // movements.sort((a, b) => {
  //   if (a > b) return 1;
  //   if (a < b) return -1;
  //   return 0;
  // });
  movements.sort((a, b) => a - b); // Shorter version
  console.log(movements);

  // Descending order
  // movements.sort((a, b) => {
  //   if (a > b) return -1;
  //   if (a < b) return 1;
  //   return 0;
  // });
  movements.sort((a, b) => b - a); // Shorter version
  console.log(movements);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Array Grouping                                             |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  console.log(movements);

  const groupedMovements = Object.groupBy(movements, (movement) =>
    movement > 0 ? "deposits" : "withdrawals"
  );
  console.log(groupedMovements);

  const groupedByActivity = Object.groupBy(accounts, (account) => {
    const movementsCount = account.movements.length;
    if (movementsCount >= 8) return "very active";
    if (movementsCount >= 4) return "active";
    if (movementsCount >= 1) return "moderate";
    return "inactive";
  });
  console.log(groupedByActivity);

  const groupedAccounts = Object.groupBy(accounts, ({ type }) => type);
  console.log(groupedAccounts);
*/

//  -------------------------------------------------------------
// |                                                             |
// |  More Ways of Creating and Filling Arrays                   |
// |                                                             |
//  -------------------------------------------------------------
/*
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

  const x = new Array(7);
  console.log(x);
  // console.log(x.map(() => 5));
  x.fill(1, 3, 5);
  x.fill(1);
  console.log(x);

  arr.fill(23, 4, 6);
  console.log(arr);

  // Array.from
  const y = Array.from({ length: 7 }, () => 1);
  console.log(y);

  const z = Array.from({ length: 7 }, (_, i) => i + 1);
  console.log(z);

  const randomArray = Array.from(
    { length: 100 },
    () => Math.floor(Math.random() * 100) + 1
  );
  console.log(randomArray);

  labelBalance.addEventListener("click", function () {
    const movementsUI = Array.from(
      document.querySelectorAll(".movements__value"),
      (el) => Number(el.textContent.replace("€", ""))
    );
    console.log(movementsUI);
  });
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Non-Destructive Alternatives: toReversed, toSorted, with   |
// |                                                             |
//  -------------------------------------------------------------
/*
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  console.log(movements);

  console.log("-------- toReversed --------");
  // toReversed - returns a new array with the elements in reverse order
  const reversedMovements = movements.toReversed();
  console.log(reversedMovements);
  console.log(movements);

  console.log("-------- toSorted --------");
  // toSorted - returns a new array with the elements sorted
  const sortedMovements = movements.toSorted((a, b) => a - b);
  console.log(sortedMovements);
  console.log(movements);

  console.log("-------- toSpliced --------");
  // toSpliced - returns a new array with elements spliced out
  const splicedMovements = movements.toSpliced(2, 3);
  console.log(splicedMovements);
  console.log(movements);

  console.log("-------- with --------");
  const newMovements = movements.with(2, 2000);
  console.log(newMovements);
  console.log(movements);
*/

// -------------------------------------------------------------
// |                                                             |
// |  Array Methods Practice                                     |
// |                                                             |
//  -------------------------------------------------------------
/*
  // 1.
  const bankDeposits = accounts
    .flatMap((acc) => acc.movements)
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);

  console.log(bankDeposits);

  // 2.
  const numDeposits1000 = accounts
    .flatMap((acc) => acc.movements)
    .reduce((acc, mov) => (mov >= 1000 ? ++acc : acc), 0);

  console.log(numDeposits1000);

  // Prefix increment example
  let a = 10;
  console.log(++a);
  console.log(a);

  // 3.
  const { deposits, withdrawals } = accounts
    .flatMap((acc) => acc.movements)
    .reduce(
      (sums, cur) => {
        // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += Math.abs(cur));
        sums[cur > 0 ? "deposits" : "withdrawals"] += Math.abs(cur);
        return sums;
      },
      { deposits: 0, withdrawals: 0 }
    );

    console.log(deposits, withdrawals);

  // 4.
  const convertTitleCase = function (title) {
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
    const exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

    const titleCase = title
      .toLowerCase()
      .split(" ")
      .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
      .join(" ");
    return titleCase;
  };
  console.log(convertTitleCase("this is a nice title"));
  console.log(convertTitleCase("this is a LONG title but not too long"));
  console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/

//  -------------------------------------------------------------
// |                                                             |
// |  Challenge 5                                                |
// |                                                             |
//  -------------------------------------------------------------
/*
  const dogs = [
    { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
    { weight: 8, curFood: 200, owners: ["Matilda"] },
    { weight: 13, curFood: 275, owners: ["Sarah", "John", "Leo"] },
    { weight: 18, curFood: 244, owners: ["Joe"] },
    { weight: 32, curFood: 340, owners: ["Michael"] },
  ];

  // 1.
  dogs.forEach((dog) => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
  console.log(dogs);

  // 2.

  const sarahDog = dogs.find((dog) => dog.owners.includes("Sarah"));
  console.log(
    `Sarah's dog eats too ${
      sarahDog.curFood > sarahDog.recFood ? "much" : "little"
    }.`
  );

  // 3.
  const ownersEatTooMuch = dogs
    .filter((dog) => dog.curFood > dog.recFood)
    .flatMap((dog) => dog.owners);
  console.log(ownersEatTooMuch);

  const ownersEatTooLittle = dogs
    .filter((dog) => dog.curFood < dog.recFood)
    .flatMap((dog) => dog.owners);
  console.log(ownersEatTooLittle);

  // 4.
  console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much.`);
  console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little.`);

  // 5.
  console.log(dogs.some((dog) => dog.curFood === dog.recFood));

  // 6.
  const checkEatingOk = (dog) =>
    dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

  console.log(dogs.every(checkEatingOk));

  // 7.
  const dogsEatingWell = dogs.filter(checkEatingOk);
  console.log(dogsEatingWell);

  // 8.
  const dogsGroupedByPortion = Object.groupBy(dogs, (dog) => {
    if (dog.curFood > dog.recFood) return "too much";
    if (dog.curFood < dog.recFood) return "too little";
    else return "exact";
  });

  console.log(dogsGroupedByPortion);

  // 9.
  const dogsGroupedByOwners = Object.groupBy(
    dogs,
    (dog) => `${dog.owners.length}-owner${dog.owners.length > 1 ? "s" : ""}`
  );
  console.log(dogsGroupedByOwners);

  // 10.
  const dogsSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
  console.log(dogsSorted);
*/
