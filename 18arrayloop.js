//for of loop

let num = [1,2,3,4,5]
for (const numbers of num) {
    //console.log(numbers);
}

//for on string

  let nam="hello world"
  for (const names of nam) {
     //console.log(names);
 }

//+++++++++++++ MAP IN JS +++++++++++++++++++++//

// Creating a new Map
const person= new Map();

// Adding key-value pairs

person.set('name', 'Muneeb Kiyan');
person.set('age', 25);
person.set('profession', 'Poet');

// Accessing values

// console.log(person.get('name'));        // Output: Muneeb Kiyan
// console.log(person.get('age'));         // Output: 25
// console.log(person.get('profession'));  // Output: Poet

// Checking for a key

//console.log(person.has('profession'));  // Output: true

// Deleting a key-value pair

person.delete('age');
//console.log(person.has('age'));         // Output: false

// Iterating over the Map

for (const [key, value] of person) {
   // console.log(`${key}: ${value}`);
}

// Getting the size of the Map

//console.log(person.size);                // Output: 2


//+++++++++++++++++++ FOR IN LOOP ++++++++++++++++++//
//for object
let newPerson = {
    js : "javascript",
    html : "hyper text markup language"
}
for (const key in newPerson) {
 //console.log(`${key} short form of ${newPerson[key]}`)
}

//for array

let arr = ["javascript","hyper text markup language"]
for (const key in arr) {
    console.log(arr[key]);
}

//+++++++++++++++++++++++++ FOREACH LOOP IN JS +++++++++++++++++++//

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )
    
       //For arrow function

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

//+++++++++++++++++[{},{},{}] means takes multiple values in diff [] array++++++++++++++++++++//

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )