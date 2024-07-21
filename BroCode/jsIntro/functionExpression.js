// function expression = a way to define a function as values or varriables

// instead of declera a function, we pass function as an argument
// using this when the function u want to use is only use one and 
// dont need to declare it to save the name and space for others function

const numbers = [1, 2, 3, 4, 5];
const square = numbers.map(function(element){
    return Math.pow(element, 2);
});

console.log(square);

// it is the same as
const numbers1 = [1, 2, 3, 4, 5];
const square1 = numbers1.map(pow);

function pow(element){
    return Math.pow(element, 2);
}

console.log(square1);


