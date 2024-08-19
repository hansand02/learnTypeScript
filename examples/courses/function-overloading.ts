interface Coordinate {
  x: number;
  y: number;
}


const objectIsCoordinate = (obj: unknown): obj is Coordinate => {
    return typeof obj === 'object' && (obj as Coordinate)?.x !== undefined && (obj as Coordinate)?.y !== undefined
}

function parseCoordinate(obj: Coordinate): Coordinate
function parseCoordinate(x:number, y?:number): Coordinate
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    }
    if(objectIsCoordinate(arg1)) {
        coord = {
            ...arg1
        }
    } else {
        coord = {
            x: arg1 as number,
            y: arg2 as number
        }
    }
    return coord
}

const coord: Coordinate = { x: 12, y: 23 };
console.log(coord);
