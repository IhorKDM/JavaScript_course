# JavaScript Theory Lectures – Full Notes

## Watch Before You Start!
Get started with important course guidelines:
- Code along with each lesson to retain knowledge.
- Don’t rush—pause, rewind, and revisit challenging topics.
- Participate actively by trying all challenges.
- Take handwritten notes to strengthen memory.
- It’s okay not to understand everything right away—learning to code is a process!

## A Brief Introduction to JavaScript
JavaScript is a **high-level, object-oriented, multi-paradigm language** used primarily in web development.

Roles:
- Frontend: Add interactivity to websites.
- Backend: Run on servers (Node.js).
- Mobile/Desktop: Build apps (React Native, Electron).

Example:
```js
alert("Hello, JavaScript!");
```

## Data Types
JavaScript has **7 primitive data types**:
1. Number — `let x = 42;`
2. String — `let name = "Alice";`
3. Boolean — `let isLoggedIn = true;`
4. Undefined — `let y; // undefined`
5. Null — `let empty = null;`
6. Symbol — `let sym = Symbol("id");`
7. BigInt — `let big = 12345678901234567890n;`

**Objects** include arrays, functions, and regular objects:
```js
let user = { name: "Bob", age: 30 };
```

Note: JavaScript uses **dynamic typing** — variables can hold any type.

## Boolean Logic
Boolean logic is used for decision-making using:
- **AND** (`&&`) – All conditions must be true
- **OR** (`||`) – At least one condition is true
- **NOT** (`!`) – Inverts the value

Example:
```js
let age = 22;
if (age >= 18 && age < 30) {
  console.log("Young adult");
}
```

## JavaScript Releases: ES5, ES6+ and ESNext
JavaScript evolves with ECMAScript releases.

- **ES5 (2009)**: Introduced `strict mode`, array methods like `forEach`, `map`.
- **ES6 (2015)**: Major update! Added `let`, `const`, arrow functions, classes, promises, and template literals.
- **ESNext**: Ongoing proposals (like optional chaining `?.`).

Example (ES6 arrow function):
```js
const greet = name => `Hello, ${name}!`;
```

## Functions Calling Other Functions
Functions can be composed by calling one from within another. This allows modular, reusable code.

### Example:
```js
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
}

console.log(fruitProcessor(2, 3));
```

## Reviewing Functions
JavaScript functions can be defined in several ways:

### 1. Function Declaration
```js
function calcAge(birthYear) {
  return 2037 - birthYear;
}
```

### 2. Function Expression
```js
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};
```

### 3. Arrow Function
```js
const calcAge = birthYear => 2037 - birthYear;
```
Each has different implications on `this`, hoisting, and readability.

## Learning How to Code
Tips for successful learning:
- Set clear goals
- Practice regularly
- Build your own projects
- Seek community feedback

### Example Goal:
> Build a to-do list app using vanilla JS by the end of the month.

## How to Think Like a Developer
Use a 4-step framework to solve problems:
1. Understand the problem
2. Divide into sub-problems
3. Research each piece
4. Write pseudocode before coding

### Example:
```js
// Goal: reverse an array
function reverse(arr) {
  return arr.slice().reverse();
}
```

## Debugging (Fixing Errors)
Debugging involves identifying and fixing errors (bugs).

### Steps:
- Use `console.log()` or breakpoints
- Inspect variable values
- Check the call stack
- Look for syntax issues

### Example:
```js
let x = "5";
console.log(x * 2); // Implicit conversion to number, result: 10
```

## What's the DOM and DOM Manipulation
The DOM (Document Object Model) allows JS to interact with HTML.

### Selecting and modifying:
```js
const heading = document.querySelector("h1");
heading.textContent = "Changed!";
heading.style.color = "blue";
```

## An high-level Overview of JavaScript
JavaScript is:
- Interpreted
- Dynamically typed
- Multi-paradigm (supports OOP, FP, imperative)
- Event-driven (esp. in browser)

It runs inside a browser or Node.js runtime.

## The JavaScript Engine and Runtime
JavaScript engines (e.g. V8) parse, compile, and execute code.

### Components:
- Parser: converts code to AST
- Interpreter + JIT Compiler: runs code
- Call Stack: manages execution
- Heap: memory allocation

### Example:
```js
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
console.log("End");
// Output: Start -> End -> Timer
```

## Execution Contexts and The Call Stack
JavaScript uses execution contexts to manage function calls.

### Concepts:
- **Global Execution Context** is created first.
- Each function call creates a new execution context.
- Contexts are managed using the **Call Stack**.

### Example:
```js
function one() {
  two();
  console.log("One");
}

function two() {
  console.log("Two");
}

one();
// Stack: global -> one() -> two()
```

## Scope and The Scope Chain
**Scope** determines the accessibility of variables.

### Types:
- **Global scope**
- **Function scope**
- **Block scope (with let/const)**

**Scope Chain**: When accessing a variable, JavaScript searches up the scope chain.

### Example:
```js
const a = "Global";

function outer() {
  const b = "Outer";
  function inner() {
    const c = "Inner";
    console.log(a, b, c); // All accessible
  }
  inner();
}
outer();
```

## Variable environment: Hoisting and The TDZ
### Hoisting:
Variables declared with `var` are hoisted (moved to the top) and initialized as `undefined`.

```js
console.log(x); // undefined
var x = 5;
```

### TDZ (Temporal Dead Zone):
`let` and `const` are hoisted but not initialized. Accessing them before declaration causes an error.

```js
console.log(y); // ReferenceError
let y = 10;
```

## The this Keyword
`this` refers to the object that is executing the function.

### In global context:
```js
console.log(this); // window (in browser)
```

### Inside a method:
```js
const user = {
  name: "Alice",
  greet() {
    console.log(this.name);
  },
};
user.greet(); // "Alice"
```

### Arrow functions do not have their own `this`:
```js
const user = {
  name: "Alice",
  greet: () => {
    console.log(this.name); // undefined
  },
};
```

## Memory Management: Primitives vs. Objects
### Primitives:
- Stored in stack
- Copied by value

### Objects:
- Stored in heap
- Copied by reference

### Example:
```js
let x = 10;
let y = x;
y = 20;
console.log(x); // 10

const obj1 = { name: "Jon" };
const obj2 = obj1;
obj2.name = "Bob";
console.log(obj1.name); // "Bob"
```

## Summary: Which Data Structure to Use?
Choose based on use case:

- **Array**: Ordered data (list of items)
- **Object**: Key-value pairs
- **Map**: Key-value pairs with any type of keys
- **Set**: Unique values

### Example:
```js
const arr = [1, 2, 3];
const obj = { a: 1, b: 2 };
const map = new Map([["a", 1], ["b", 2]]);
const set = new Set([1, 2, 2, 3]); // {1, 2, 3}
```

## First-Class and Higher-Order Functions
### First-Class Functions
Functions in JavaScript are treated like any other value.
- Stored in variables
- Passed as arguments
- Returned from other functions

### Higher-Order Functions
A function that:
- Takes one or more functions as arguments
- Returns a function

### Example:
```js
const greet = () => console.log("Hello!");
const runTwice = fn => {
  fn();
  fn();
};
runTwice(greet);
```

## Closures
A **closure** is created when a function remembers variables from its lexical scope even when the function is executed outside that scope.

### Example:
```js
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter(); // 1
counter(); // 2
```
Closures are used in:
- Data encapsulation
- Function factories
- Async callbacks

## Data Transformations: map, filter, reduce
### `map()`
Transforms each element.
```js
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // [2, 4, 6]
```

### `filter()`
Filters based on condition.
```js
const even = nums.filter(n => n % 2 === 0); // [2]
```

### `reduce()`
Combines all values into one.
```js
const sum = nums.reduce((acc, cur) => acc + cur, 0); // 6
```

## Summary: Which Array Method to Use?
Use the right method based on task:
- `map` — transform array
- `filter` — remove unwanted items
- `reduce` — calculate summary value
- `find` — get first match
- `some` / `every` — check condition
- `forEach` — just loop

### Tip:
Avoid using `forEach` if transformation is needed — `map` is preferred.

## How the DOM Really Works
The DOM is a tree-like structure representing the HTML document.

- Each HTML tag is a **node**
- DOM methods let JS interact with it

### Example:
```js
document.querySelector("button").addEventListener("click", () => {
  alert("Clicked!");
});
```
The DOM is **live** — changes in HTML reflect in the DOM instantly.

## Event Propagation: Bubbling and Capturing
Events move through the DOM in 3 phases:
1. **Capturing Phase** (top to target)
2. **Target Phase**
3. **Bubbling Phase** (target to top)

### Example:
```js
document.querySelector(".parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
document.querySelector(".child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

Use `event.stopPropagation()` to prevent bubbling.

## Efficient Script Loading: defer and async
Modern script loading strategies improve page performance.

### Without Attributes:
```html
<script src="script.js"></script>
```
- HTML parsing pauses until script loads and executes.

### With `defer`:
```html
<script src="script.js" defer></script>
```
- Scripts load in background, execute after HTML is parsed.

### With `async`:
```html
<script src="script.js" async></script>
```
- Scripts load and execute immediately, order not guaranteed.

## What is Object-Oriented Programming?
OOP is a programming paradigm centered around **objects**.

### Key Concepts:
- **Encapsulation** – bundle data and methods
- **Inheritance** – reuse structure/behavior
- **Polymorphism** – use shared interface, different behavior
- **Abstraction** – hide complex details

Useful for large-scale applications with reusable components.

## OOP in JavaScript
JavaScript supports OOP using:
- Constructor functions
- Prototypes
- ES6 Classes

### Example:
```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }
}

const alice = new Person("Alice");
alice.greet();
```

## Prototypal Inheritance and The Prototype Chain
Each object in JavaScript has a **prototype** that it inherits from.

### Example:
```js
const person = {
  greet() {
    console.log("Hello!");
  }
};

const student = Object.create(person);
student.study = () => console.log("Studying...");
student.greet(); // Inherited
```

The lookup follows the **prototype chain**.

## Object.create
`Object.create` allows manual creation of objects with a specified prototype.

### Example:
```js
const proto = {
  greet() {
    console.log(`Hi ${this.name}`);
  }
};

const bob = Object.create(proto);
bob.name = "Bob";
bob.greet(); // "Hi Bob"
```

## Inheritance Between "Classes": Constructor Functions
Before ES6, inheritance was done via constructor functions.

### Example:
```js
function Person(name) {
  this.name = name;
}
Person.prototype.greet = function () {
  console.log(`Hi ${this.name}`);
};

function Student(name, course) {
  Person.call(this, name);
  this.course = course;
}
Student.prototype = Object.create(Person.prototype);
```

## Inheritance Between "Classes": Object.create
Inheritance can be simplified using `Object.create`.

### Example:
```js
const Person = {
  greet() {
    console.log(`Hi ${this.name}`);
  }
};

const Student = Object.create(Person);
Student.name = "Emma";
Student.study = function () {
  console.log("Studying...");
};

Student.greet();
```

## ES6 Classes summary
ES6 introduces `class` syntax for cleaner OOP.

### Features:
- Constructor
- Inheritance with `extends`
- Method definitions inside class

### Example:
```js
class Animal {
  speak() {
    console.log("Sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}
```

## Mapty Project: How to Plan a Web Project
### Key Steps in Planning:
1. Define project scope and goal
2. Sketch user interface
3. Break down features
4. Design data model

### Example:
- Mapty lets users log workouts by clicking a map
- Features: geolocation, workout form, storing data in localStorage

### Data Model:
```js
class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
}
```

## Mapty Project: Final Considerations
### Lessons from Mapty:
- Organize code using classes
- Encapsulate logic
- Persist data in `localStorage`
- Handle user inputs and events effectively

### Tools used:
- Leaflet library for maps
- Object-Oriented Programming
- Event listeners, DOM manipulation

## Asynchronous JavaScript, AJAX and APIs
### Why Asynchronous JS?
JS is single-threaded — async helps avoid blocking the main thread.

### AJAX:
- Stands for Asynchronous JavaScript and XML
- Technique to fetch data from server without reloading page

### APIs:
- Interface to access external data

```js
fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(res => res.json())
  .then(data => console.log(data));
```

## How the Web Works: Requests and Responses
### Web Flow:
1. User enters URL
2. Browser sends **HTTP request** to server
3. Server responds with **HTML/CSS/JS**
4. Browser renders response

### HTTP Request includes:
- Method (GET, POST)
- Headers (User-Agent, Content-Type)
- Body (for POST/PUT)

Use **DevTools → Network** to inspect!

## Promises and the Fetch API
### Promises:
Represent future completion of an async operation.

### Syntax:
```js
const request = fetch('https://jsonplaceholder.typicode.com/posts');
request
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

### Advantages:
- Avoids callback hell
- Chainable

## Asynchronous Behind the Scenes: The Event Loop
### Components:
- **Call Stack**
- **Web APIs** (e.g., timers, DOM events)
- **Callback Queue**
- **Event Loop**

### Example:
```js
console.log('Start');
setTimeout(() => console.log('Timer'), 0);
console.log('End');
// Output: Start → End → Timer
```

JS handles async via the **event loop**.

## An Overview of Modern JavaScript Development
### Key Practices:
- Modular code
- Separation of concerns (logic, UI)
- Use of bundlers (Parcel/Webpack)
- Source control with Git
- Package management (npm)

Modern dev tools make JS development efficient and scalable.

## An Overview of Modules in JavaScript
Modules allow breaking up code into smaller, reusable files.

### Example (ES6):
```js
// export.js
export const add = (a, b) => a + b;

// import.js
import { add } from './export.js';
console.log(add(2, 3));
```

Modules are scoped and only run once.

## Modern, Clean and Declarative JavaScript Programming
### Best Practices:
- Use const/let over var
- Use arrow functions for simple callbacks
- Prefer array methods (`map`, `filter`)
- Avoid nested callbacks
- Write pure functions

### Example:
```js
const users = [{ name: 'Jon' }, { name: 'Jane' }];
const names = users.map(u => u.name);
```

## Forkify: Project Overview and Planning
### Features:
- Search recipes from API
- Pagination, servings adjustment
- Bookmarking, upload new recipes

### Planning:
- Define UI components
- Use MVC structure
- Mockup data before real API

Involves complex UI state and user interaction.

## The MVC Architecture
### MVC Breakdown:
- **Model**: data logic (fetching, transforming)
- **View**: UI rendering and DOM updates
- **Controller**: connects model and view

Separates concerns and makes code modular.

```js
// Controller
model.loadRecipe(id).then(() => {
  recipeView.render(model.state.recipe);
});
```

## Event Handlers in MVC: Publisher-Subscriber Pattern
### Publisher-Subscriber Pattern:
- View publishes events
- Controller subscribes and reacts

```js
// View
this._parentEl.addEventListener('submit', this._handleSearch.bind(this));

// Controller
searchView.addHandlerSearch(controlSearchResults);
```

Makes code decoupled and maintainable.

## Forkify Project: Final Considerations
- Built with **ES6 Modules**, **MVC**, and **async JS**
- Used tools like **Parcel**, **NPM**, and **API services**
- Demonstrated real-world SPA techniques (Single Page Applications)

Demonstrated:
- Modular architecture
- Dynamic UI updates
- Persisting user data

## The Rise of AI Tools (ChatGPT, Copilot, Cursor AI)
AI tools are revolutionizing the developer experience.

### Popular Tools:
- **ChatGPT**: Coding help, explanations, debugging
- **GitHub Copilot**: Code suggestions in IDEs
- **Cursor**: AI-augmented code editor

### Use Cases:
- Boilerplate generation
- Code review assistance
- Learning new technologies

> Tip: Always understand and review AI-generated code!

## Memory Management: Garbage Collection
JavaScript automatically frees memory via **Garbage Collection**.

### Mechanism:
- When no references to an object exist, it's marked for deletion.
- JS engines like V8 use techniques like **Mark-and-Sweep**.

### Example:
```js
let obj = { name: 'Jon' };
obj = null; // eligible for GC
```
Efficient memory use is essential for long-running apps.

