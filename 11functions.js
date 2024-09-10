
//+++++++++++++++function in js++++++++++++++++++++++++++++//

// function user_name(){
//     console.log("aliraza");  
// }
// user_name(); //output aliraza 


// function num(num1,num2){    //(num1,num2) are called parameter
//     console.log(num1 + num2);
// }
// num(3,4);//output 7        num(3,7) values are called argument



// function num(num1,num2){    
//     // let result = num1 + num2 ;
//     // return result

//     //++++++ another step +++++++
//        return num1 + num2
// }
// let result = num(3,4);
// console.log(result); //result is 7



// function name(username){
//     return `${username} logged in`
// }

// console.log(name("ali"));


//+++++++++ function with objects and array +++++++

                 //func with object
// const user = {
//     name : "raza",
//     price : 99,
// }

// function values(anyobject){
//     return `the name is ${anyobject.name} and the price is ${anyobject.price}`
// }
//  console.log(values(user));

                //func with array

//   const user = [500,600,700,800]

//  function uservalue(getvalue){
//     return  (getvalue[0])
//  }
// console.log(uservalue(user));//500 






// ++++++++++++++++   Rest operator ++++++++++++++++++++++++++//

// function usercart (...num1){
//     return num1
// }
// console.log(usercart(100,200,300,400));//[100,200,300,400] rest operator gave all value in bundle


// function usercart (value1,vLUE2,...num1){
//     return num1
// }
// console.log(usercart(100,200,300,400));//value1 gave100 and value2 gave 200 then result
                                            //[300,400] rest operator come

