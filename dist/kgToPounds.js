"use strict";
const convertKgToPounds1 = (kg) => {
    if (typeof kg == 'number') {
        return kg * 2.2;
    }
    else if (typeof kg == 'string') {
        return parseInt(kg) * 2.2;
    }
    return 0;
};
function convertKgToPounds2(kg) {
    if (typeof kg == 'number') {
        return kg * 2.2;
    }
    else if (typeof kg == 'string') {
        return parseInt(kg) * 2.2;
    }
    return 0;
}
const convertKgToPounds3 = function (kg) {
    if (typeof kg == 'number') {
        return kg * 2.2;
    }
    else if (typeof kg == 'string') {
        return parseInt(kg) * 2.2;
    }
    return 0;
};
let textBox = {
    drag: () => { },
    resize: () => { },
};
let q = "cm";
const greet = (name) => {
    console.log(name);
};
greet(null);
//# sourceMappingURL=kgToPounds.js.map