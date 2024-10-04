// let name = ["html", "css", "js"];
// let newName = name.forEach((item) => {
//     //console.log(item);
//     return item;
// });
// console.log(newName);   //result undefined


//++++++++++++++++++++++++ FILTER IN ARRAY +++++++++++++++++++++//

let num = [1,2,3,4,5,6,7,8,9,10]

 let newNUM = num.filter( (key) =>{
  return key>5
})
//console.log(newNUM);

let people = [
    { name: "Ali", age: 17 },
    { name: "Sara", age: 21 },
    { name: "Ahmed", age: 19 }
];

let newPeople = people.filter( (value) => value.age >18)

//console.log(newPeople);


//++++++++++++++++++++ MAP IN ARRAY +++++++++++++++//

const number = [1,2,3,4,5]
const newNumber = number.map( (values)=>{
  return values + 10
})
//console.log(newNumber);


// one or more maps with filter

let numb =[1,2,3,4,5,6,7]
let numbers = numb.map( (value) => {
  return value+3
  console.log(value);
} )

//console.log(numbers);

const newNum = numbers.filter( (key) =>{
  return key > 5
  console.log(key);
} )
console.log(newNum);



//+++++++++++++++++++++++ REDUCE IN ARRAY +++++++++++++++++++++++++//

//ACUMULATOR AND CURRENT VALUE 

let score = [ 1,2,3]

let totalScore = score.reduce( (accum,curr) =>{
  return accum + curr
},0 )
console.log(totalScore)  // result 6




let shoppingCard = [
  {
    name : "webdev"
    price : "3000"
  },
  {
    name : "appdev"
    price : "5000"
  },
  {
    name : "data science"
    price : "8000"
  }
]
let total = shoppingCard.reduce( (accum,item)=>{
  return accum + item.price
},0)
console.log(total);
