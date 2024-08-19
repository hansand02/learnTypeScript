

export const arrayMutate = (array: number[], mutate: (n: number) => number ): number[] => {
    return array.map(mutate)
}

const double = (n: number) => {
    return n*2
}

console.log(arrayMutate([1,2,3,5,6], double ))