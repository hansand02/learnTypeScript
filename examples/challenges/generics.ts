// Challenge:
// Reproduce foreach, filter, map, with reduce.
// Has to be type safe.

const map = <T, K>(items: T[], callback: (item: T) => K) : K[] => {
  return (items.reduce<K[]>((previousValue, currentValue, index, array) => {
    return [...previousValue, callback(currentValue)]
  }, []));

};

const forEach = <T>(items: T[], callback: (item: T) => void) : void => {
  items.reduce((_, currentValue) => {
    callback(currentValue);
    return undefined
  }, undefined);
}

const filter = <T>(items: T[], callback: (item: T) => boolean) : T[] => {
  return items.reduce<T[]>((previousValue, currentValue) => {
    if(callback(currentValue)) {
      return [...previousValue, currentValue]
    }
    return previousValue
  }, [])
}


const items: number[] = [1,2,3,4,5,6,7];
let itemsArraya: number[] = []
forEach(items, (item) => {itemsArraya.push(item*2)})
const oddNumbers = filter(items, (num)=> num % 2 == 1)
const mappedOne = map(items, (item) =>  [item, 'tall'])

console.log(itemsArraya)
console.log(oddNumbers)
console.log(mappedOne)
