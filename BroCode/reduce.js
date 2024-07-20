// .reduce() method use to result a single result from an array

let prices = [1, 2, 3, 4, 5];
total = prices.reduce(sum);

console.log(total);
function sum(accoumulator, element){
    return accoumulator + element;
}

let numbers = [5, 30, 10, 25, 15, 20];
let maximum = numbers.reduce(max);
console.log(maximum);

function max(accoumulator, element){
    return Math.max(accoumulator, element);
}