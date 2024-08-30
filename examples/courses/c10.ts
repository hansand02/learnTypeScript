interface Cat {
  name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>

const makeCat = (name: string, breed:string): ReadonlyCat=> {
  return { name, breed } as const
};

const cat = makeCat("Hans", "blå") 

// gives an error because it is readonly
// cat.name = 'g'
console.log(cat)


// two ways to make readonly array
function makeCoordinate(
    x: number,
    y:number,
    z:number
) : readonly [number, number, number] { // could also do Readonly<[number, number, number]>
    return [x,y,z]
}

const oslo = makeCoordinate(59.9139, 10.7522, 0)
const reallyConst = [1,2,3] as const
console.log(oslo)