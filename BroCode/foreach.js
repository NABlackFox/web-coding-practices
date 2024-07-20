// forEach() method provided : element, index, array as an parameter to use in callback funtion
// use to loop through the array
// using callback function in this function

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);

numbers.forEach(display); // using call back as parameter

function double(element, index, array){
    array[index] *= 2;
}
function display(element){ // forEach funtion already provide the element
    console.log(element);
}