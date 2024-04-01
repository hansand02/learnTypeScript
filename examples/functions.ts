// Function declaration
function add(a: number, b: number): number {
    return a + b;
}

// Function expression
const subtract = function(a: number, b: number): number {
    return a ;
};

// Arrow function expression
const multiply = (a: number, b: number): number => {
    return a * b;
};

// Arrow function expression with implicit return
const divide = (a: number, b: number): number => a / b;

// Function constructor (not recommended)
const power = new Function('a', 'b', 'return Math.pow(a, b)');

// Method syntax
const calculator = {
    add(a: number, b: number): number {
        return a + b;
    },
    subtract(a: number, b: number): number {
        return a - b;
    },
};

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log('Hello, IIFE!');
})();

// Generator function
function* generateNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}