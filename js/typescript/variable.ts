export {}
let x = 30;
const y = 20;

//let x = 20; // error

let name: string = "venkat";
let price: number = 200;
let isLoggedIn: boolean = true;
//let big: bigint = bigint(100n); 

//isLoggedIn = 20; 
//let n: null = null;
//let u: undefined = undefined; 
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3]; 
let person1: [string, number] = ["venkat", 23]; 

let randomValue: any = 10;
randomValue = "venkat";
randomValue = {};
randomValue = []; 


console.log(name);


enum Color { Red = 1, Green = 25, Blue };

let c: Color = Color.Green;
let d: string = Color[25];

console.log(d); 

let notSure: unknown = 4;
notSure = "may be sting";
//notSure = false; 

//notSure
function sum(num1: number, num2?: number): number {
  if (num2) {
    return num1 + num2
  } else {
    return num1
  }
}

console.log(sum(20,80))

// interfaces 
interface Person{
 readonly firstName: string,
  lastName?: string,
  [propName: string]: any,
  [index: number]: string,
 }
interface Product{ }

let ro: ReadonlyArray<number> = [1, 2, 3]; 

// function getinfo(person: {firstName: string, lastName: String}) {
//   return person.firstName;
// }

function getinfo(person: Person) {
  return person.firstName;
}























