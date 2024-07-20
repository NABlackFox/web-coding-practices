const person = {
    name : "nhat anh",
    favFood: "pizza",
    sayHello: function(){console.log(`Hi my name is ${this.name}`);},
    eat: function(){console.log(`Eating ${this.favFood}`);}
}

person.sayHello();
person.eat();

// constructor

function Car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You drive ${this.model} model`);}
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1);
car1.drive();