"use strict";
function add(a, b) {
    return a + b;
}
const subtract = function (a, b) {
    return a;
};
const multiply = (a, b) => {
    return a * b;
};
const divide = (a, b) => a / b;
const power = new Function('a', 'b', 'return Math.pow(a, b)');
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
};
(function () {
    console.log('Hello, IIFE!');
})();
function* generateNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}
//# sourceMappingURL=functions.js.map