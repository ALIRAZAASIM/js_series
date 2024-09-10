// let user_name = new Object() // object constructor 
// console.log(user_name);    

// let user_name = {}  //object literal
// user_name.name = "ali",
// user_name.email = "asim@gmail.com"
// console.log(user_name)

//////////////////////////object in another objects//////////////////////////

// let user_name = {
//     name : "ali",
//     id :{
//         id_no:{
//             id_no2:"123xyz",
//         }
//     }
// }
// console.log(user_name.id.id_no.id_no2);//  add . come new value

////////////////////object spread sntax//////////////////////////////


let num1 = { name : "ali", name2 : "ali2"}
let num2 = {id :12 , id2 :34}

let num3 ={...num1,...num2}
console.log(num3);


console.log(Object.keys(num3)); //////keys gave prop in []array type 

console.log(Object.values(num3));//////gave values in []arrray 

console.log(num1.hasOwnProperty("name"));////hasownproperty tells this available or not


////////////////courseinstructor /////////////////////

let user_name = {
    courseInstructor: "asim",
    reg : 123,
    uni : "ïqra uni"
}

let {courseInstructor:instructor} = user_name

//console.log(courseInstructor);
console.log(instructor);




