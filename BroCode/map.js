// .map() method also go through the array but it will require a callback method and will use that method
// to applied on every element in the array and then return an array
// also provided: element, index, array

// key different, the callback .method for forEach() dont need the return but .map() does

const numbers = [1, 2, 3, 4, 5];

const copy = numbers.map(double);

console.log(copy);
function double(element){
    return element *= 2; // remember using return
}
