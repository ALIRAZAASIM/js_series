//immediately invoked function expression (iife)

//used bcz 1)dont pollute in global scope fun and make another scope 2)immadiately execute from here

//     ()()

// function chai(){
//     console.log("chai with code");  
// }
// chai();

(function chai(){   //with name iffi name chai
        console.log("chai with code");  
    })
    ();  //two iffi in one files used ; this 

    //arrow fun 
    (()=> {         //without name iffi
        console.log("chai with code more");  
    })
    ();


    //iffi with variable 

   ( (name) =>{
            console.log(`the ,${name}`);      
    })
("aliraza");


    