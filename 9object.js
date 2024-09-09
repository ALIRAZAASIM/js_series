//singleton   
//object.creat -> constractor singleton become in it
const mysmbol = Symbol("key1");
let user_name ={
    name : "ali",
    age : 18 ,
    location :" kwl",
    gmail : "casim@gmail.com"
}
    //two ways of execute value
console.log(user_name.name);

console.log(user_name["name"]);
user_name.name= "raza" //change the value in object
console.log(user_name);

// Object.freeze(user_name); //freez means next value object dont change it freez

// user_name.gmail = "ali@gmail.com";
// console.log(user_name.gmail);//result comes casim@gmail.com bcz we freez seen above


user_name.greeting = function(){
    console.log("hello this is js series");
    
}
console.log(user_name.greeting());


user_name.greetingtwo = function(){
    console.log(`hello this is js series, ${this.name}`);
    
}
console.log(user_name.greetingtwo());
