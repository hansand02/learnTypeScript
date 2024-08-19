import houses from "./houses";
import houses from "./houses";

interface House {
  name: string;
  planet: string | string[];
}

interface HouseWithID extends House {
  id: number;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(
  houses: string,
  filter: (house: House) => boolean
): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(
  input: string | House[],
  filter?: (house: House) => boolean
): HouseWithID[]; {
  const houses: House[] = typeof input === "string"
}

console.log(
  findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));
