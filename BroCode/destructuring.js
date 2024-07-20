// destructuring = extract values from arrays and objects then assign them to varriables in a convenient way
//[] = to perform array destructuring
//{} = to perfrom object destructuring

// Ex1: swap two varriable

let a = 1;
let b = 2;
[a, b] = [b, a]; // left side is destructuring and right is create new array

// Ex2: swap 2 elements in array

const colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

//Ex 3 assign element to varribales

const [first, second, third, ...extraColors] = colors; // extract value

//Ex 4 extract value from objects

const person = {
    name : "nhat anh",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi my name is ${this.name}`);},
    eat: function(){console.log(`Eating ${this.favFood}`);}
}

const {name, favFood} = person;

//Ex 5 extract object value in function parameter

function display({name, favFood}){
    console.log(name + " " + favFood);
}

display(person);