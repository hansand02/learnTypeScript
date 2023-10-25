
// TypeScript er et superset av JavaScript som legger til valgfri statisk skriving og andre funksjoner til språket.
function greet(name: string): string {
    return `Hallo, ${name}!`;
}

console.log(greet("TypeScript")); // Output: "hello, TypeScript!"


// Definer en klasse med en konstruktør og en metode
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hallo, mitt navn er ${this.name} og jeg er ${this.age} år gammel.`);
    }
}

// Opprett en instans av klassen og kall metoden dens
const person = new Person("Alice", 30);
person.greet();

// Definer et grensesnitt med valgfrie egenskaper
interface Shape {
    color: string;
    width?: number;
    height?: number;
}

// Definer en funksjon som tar et objekt som implementerer Shape-grensesnittet
function draw(shape: Shape) {
    console.log(`Tegner en ${shape.color} form med bredde ${shape.width} og høyde ${shape.height}.`);
}

// Kall funksjonen med et objekt som implementerer Shape-grensesnittet
draw({ color: "red", width: 100 });

// Definer en unions type
type Result = number | string;

// Definer en funksjon som returnerer en Result
function calculate(): Result {
    if (Math.random() < 0.5) {
        return 42;
    } else {
        return "error";
    }
}

// Kall funksjonen og logg resultatet
const result = calculate();
console.log(`Resultat: ${result}`);
// SLUTT: ed8c6549bwf9
