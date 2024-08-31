//there are two types of data type premetive and non premetive 

//>>>>premitive data types are seven

// let name = "ali" //string type

// const num = 1234 //number type

// let isFollow= yes //boolean type

// let oxygenCome = none //non type

// let  oxygen;//undefine bcz value not define

// let uniqueId = Symbol('id');// symbol type

// let bigNumber = 1234567890123456789012345678901234567890n; //bignit not mostly used

//>>>>>>>non premitive data type or refrence type 

// object array and function

// let name ={
//     name :"ali",
//     regId : 123,
// }                       //< this is object


// let fullName= ["ali", "raza" , "asim"]
// console.log(fullName);        //< this is array


// let fun = function(){
//     console.log("hello world")
// }
// fun();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

////////stack(premitive) and heap(refrence or non premitive)

//stack means copy value        &        //heap means oiginal value


// let name = "ali"

// let anotherName = name;
// anotherName = "raza"

// console.log(anotherName);//raza bcz it is stack means copy 


//heap (non premitive)

// let nameOne ={
//      fullName : "ali" ,
//      id : 123 ,
// }

// let nameTwo = nameOne 

// nameOne.fullName = "raza"

// console.log(nameOne);
// console.log(nameTwo);

