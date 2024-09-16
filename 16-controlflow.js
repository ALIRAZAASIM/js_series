
//if statement 

// if (true){

// }

// const userloggedin = true;
// if(userloggedin){
//     console.log(`something you want,${userloggedin}`);
// }

//in if statement code run if condition is true.code only run whose {} in this not outsider 

//lets see more conditional stat

// < , > , <= , >= , == ,!= , === , !== 

// strict equal === check is it equal plus check data type 

// const num = 2
// if(2 === "2"){
//     console.log(`yes equal , ${num}`);
// }// 2 === "2" no result bcz num not equal to string so === check data type


//!== strict equal used to check true and false value
// let a = 5;
// let b = '5';

// console.log(a !== b); // true
//If the values or types are different, it returns true; otherwise, it returns false.

// let username = "ali";

// if(username=="ali"){
//     console.log("present")}
//     else{
//          console.log("not present");        
//     } 

    // const score = 200;
    // if(score > 300){
    //     let user= "false"
    //     console.log(`score is greater 300,${user}`);  
    // }else{
    //     let user = "true"
    //     console.log(`score less then 300,${user}`);
    // }
    //result score less then 300,true
     
     //if we use var instead of let then console.log(`var not use ${user}`); it run
    //note we use let or const bcz work inside scope{}. dont use var bcz var excess value outside the scope {}.

 //short key to use if stat

//  let score = 500;
//  if(score>200) console.log("true");


//++++++++++if else-if else function +++++++++++++//

// let score =  800;
// if (score>900){
//     console.log("if run");   
// }else if(score >800){
//     console.log("else if first run");
// }else if(score>700){
//     console.log("else if second run");
// }
// else{
//     console.log("else run");
// }
 //result else if second run.


//++++++++and && use case ++++++++++++//

// let userloggedin ="iphone";
// let  location = "pakistan";
// if(userloggedin == "iphone" && location == "pakistan"){
//     console.log("welcome to our website"); 
// }else{
//     console.log("warning")
// };


//++++++++++++ or  || condition ++++++++++//

// let student = "iqra uni";
// let marks = 50;
// if(student == "iqra uni" || marks == 50 ){
//     console.log("discount done");
// }else[
//     console.log("not done")
// ]

// let num = 3; //if used name "ali" this type then we used in case string 
// switch (num) {
//     case 1:
//         console.log("1");
        
//         break;
//         case 2:
//         console.log("2");
        
//         //break;
//         case 3:
//         console.log("3");
        
//          break; //if it comment // all nextvalue also excute so keep mind 
//         case 4:
//         console.log("4");
        
//         break;

//     default:
//         console.log("no value");
        
//         break;
// }

//+++++++++++++++++++++ truthy and false values++++++++++++++++++++//
// let username = []
// if (username) {
//     console.log("compile"); 
// }//           result compile bcz truthy value

//truthy values
//       [] , 'false' , 0 , "", {} ,  function(){}

//falsy value
//  false ,  0 , -1 , biginit 0n , nan , undefine , null

// who to check arrays empty or not
// if (username.length === 0) {
//     console.log("empty");   
// }

//how to check object empty or not
// let username = {}
// if (Object.keys(username).length === 0){
//     console.log("empty");
    
// }

//    Nullish coalascing operator (??) null and undefine

let val1;
//val1 = 15 ?? 10 // 15

//val1 = null ?? 8 // 8

//val1 = undefined ?? 10 //10

val1 = undefined ?? 5 ??20 //5


console.log(val1);   


//////////++++++++++++++terniary operator +++++++++++++

//condition ? true : false



