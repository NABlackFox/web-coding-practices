// .filter() create news array by filtering it
// only the value that consider as true will be in the new array

let numbers = [1, 2, 3, 4, 5, 6, 7];
let copy = numbers.filter(isEven);
console.log(copy);

function isEven(element){
    return element % 2 === 0; // if true then will be in new array
}