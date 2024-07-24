// JSON = (Javascript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files {key:values} OR [value1, value2, value3]

// JSON.stringify() = convert a JS object to a JSON string.

// JSON.parse() = convert a json string to a JS object

// const names = ["Nhat", "Kim", "Linh", "Hoa"];

// const jsonString = JSON.stringify(names);



fetch('person.json')
.then(res=> {res.json();
    return res;
})
.then(data => {console.log(data)})