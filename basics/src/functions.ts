//functions
function addNum(x:number, y:number):number {
return x + y
}

//caling the function
console.log(addNum(2,2))


// interfaces
interface MathFunc {
    (x:number, y:number):number
}

//using the interface
const add: MathFunc = (x, y):number =>x + y
const sub: MathFunc = (x, y): number => x-y


