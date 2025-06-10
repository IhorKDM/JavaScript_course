# JavaScript Course

Welcome to the JavaScript Course! This guide will help you learn JavaScript from the basics to more advanced topics.

---

## Table of Contents

1. [Introduction](#introduction)

1. [OOP - Object-Oriented Programming](#oop---object-oriented-programming)

1. [Resources](#resources)

---

## Introduction

JavaScript is a versatile programming language used for web development, server-side applications, and [more](/00-Introduction/Intro.md).

---

## OOP - Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm that uses objects to represent data and methods. In JavaScript, OOP allows you to create reusable code and organize your programs more effectively.

### Key Concepts

- **Objects**: Collections of properties and methods.
- **Classes**: Blueprints for creating objects.
- **Inheritance**: Mechanism to create a new class based on an existing class.
- **Encapsulation**: Bundling data and methods that operate on that data within a single unit (object).
- **Polymorphism**: Ability to present the same interface for different data types.

#### Example

```javascript
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
...
```

OOP allows you to create complex applications by breaking them down into smaller, manageable pieces. You can define classes and create objects that encapsulate both data and behavior.
JavaScript supports OOP through prototypes and classes, making it easier to implement inheritance and polymorphism.

---

## Resources

- [The Complete JavaScript Course](https://www.udemy.com/course/the-complete-javascript-course/?kw=the+complete+ja&src=sac&couponCode=CP130525BRGB)
- [JavaScript Tutorial](https://www.w3schools.com/Js/)
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

---
