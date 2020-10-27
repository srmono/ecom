// rest and spread operator 
function total(...arr){
    var ordertotal = 0; 

    for(num of arr){
        ordertotal += num;
    }

    return ordertotal
}

console.log( total(25,35,96,89) );

// spread operator
var numbers = [25,35,96,89];
console.log( Math.max(...numbers) )
