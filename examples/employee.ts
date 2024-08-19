type Entity = Person | Company;
interface Person {
  type: "person";
  name: string;
}

interface Company {
  type: "company";
  name: string;
  numberEmployees: number;
}

const isPerson = (person: Entity): person is Person => {
  return person.type === "person";
};

const handleEntity = (person: Entity) => {
    if(isPerson(person)) {
        const typeGuardIsOn = person.name
        // let error = person.numberEmployees
    } else {
        // only place this is available
        const whatIsHere = person.numberEmployees
    }
}





