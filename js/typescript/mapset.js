// var myMap = new Map();

// // myMap.set('1', 'str1');
// // myMap.set(true, 'num1'); 
// // myMap.set(1, "num1"); 

// myMap.set('1', 'str1')
//      .set(true, 'num1')
//      .set(1, "num1"); 


// console.log(myMap.get(1));
// console.log(myMap.size);

// let venkat = {name: "venkat"};

// let person = new Map();

// person.set(venkat, 123); 

// let veg = new Map([
//     ['cucumber', 25],
//     ['tomatos', 350],
//     ['onion',50]
// ])

//veg.get('cucumber')
// for(let v of veg.keys()){   
//     console.log(v)
// }
// for(let v of veg.values()){   
//     console.log(v)
// }

// for(let v of veg){   
//     console.log(v)
// }


// let person = {
//     name: "venkat",
//     1: "",
//     true: ""
// }
// myMap.set(key,value); //store value
// myMap.get(key); //get value by key
// myMap.has(key);
// myMap.delete(key); 
// myMap.clear() ; //removes every thing
// myMap.size


////////////////////// SET
// myset.add(value);
// myset.delete();
// myset.has(value);
// myset.clear();
// myset.size();

let myset = new Set();

let venkat = { name: "venkat"};
let sravan = { name: "sravan"};
let poorvi = { name: "poorvi"};

myset.add(venkat);
myset.add(sravan);
myset.add(poorvi);
myset.add(venkat);
myset.add(sravan);

console.log("myset size is: ", myset.size);

let fruits = new Set(["oranges", "apples", 'bananas'])

// for( let val of fruits){
//     console.log(val)
// }

fruits.forEach( (val) => {
    console.log(val)
})






















