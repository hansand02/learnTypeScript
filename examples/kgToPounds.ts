
//Union types with kg: number | string
const convertKgToPounds1 = (kg: number|string) => {
    if(typeof kg == 'number') {
        return kg*2.2
    }
    else if(typeof kg == 'string') {
        return parseInt(kg) * 2.2;
    }
    return 0;
}

function convertKgToPounds2 (kg: number | string) :number {
    if(typeof kg == 'number') {
        return kg*2.2
    }
    else if(typeof kg == 'string') {
        return parseInt(kg) * 2.2;
    }
    return 0;
}

const convertKgToPounds3 = function(kg:number|string) : number {
    if(typeof kg == 'number') {
        return kg*2.2
    }
    else if(typeof kg == 'string') {
        return parseInt(kg) * 2.2;
    }
    return 0;
}

// Intersection types
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UiWidget =  Resizable & Draggable;

let textBox: UiWidget = {
    drag: () => {},
    resize: () => {},
}

// Literal types
type metric = "cm" | "in"
let q: metric = "cm"

//null safety
const greet = (name?: string | null) => {
    console.log(name)
}

greet(null)