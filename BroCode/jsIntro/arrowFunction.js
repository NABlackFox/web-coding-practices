// arrow functions = a shoter way to write a function expresstion for a simple function only use one
// the syntax: (paremeters) => some function

const hello = (name) =>{
    console.log(`hello ${name}`)
};

hello(`Anh`);

setTimeout(() => {
    console.log(`hello 1`);
}, 3000);

setTimeout(function(){
    console.log(`Hello 2`);
}, 3000);

const numbers = [1, 2, 3, 4, 5];
const square = numbers.map((element) => Math.pow(element, 2));

console.log(square);