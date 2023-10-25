"use strict";
function greet(name) {
    return `Hallo, ${name}!`;
}
console.log(greet("TypeScript"));
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hallo, mitt navn er ${this.name} og jeg er ${this.age} år gammel.`);
    }
}
const person = new Person("Alice", 30);
person.greet();
function draw(shape) {
    console.log(`Tegner en ${shape.color} form med bredde ${shape.width} og høyde ${shape.height}.`);
}
draw({ color: "red", width: 100 });
function calculate() {
    if (Math.random() < 0.5) {
        return 42;
    }
    else {
        return "error";
    }
}
const result = calculate();
console.log(`Resultat: ${result}`);
