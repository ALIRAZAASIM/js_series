let heroes = ["batman","spiderman"]

let heroes2 = [ "ironman","sigmaman"]

// heroes.push(heroes2)
// console.log(heroes);//[ 'batman', 'spiderman', [ 'ironman', 'sigmaman' ] ] array push another in it

/////////////////////////////+///////////////////////////////////

// let allheroes = heroes.concat(heroes2);
// console.log(allheroes); //[ 'batman', 'spiderman', 'ironman', 'sigmaman' ] this correct 

///////////////spread/////////////////////////////

// let allheroes = [...heroes,...heroes2]
// console.log(allheroes);  //[ 'batman', 'spiderman', 'ironman', 'sigmaman' ] its also good same as concate

//////////////////////////flat////////////////////////////////

// let number = [1,2,3,[4,5,[6,7,8]]] //array in which more array

// let new_number = number.flat(Infinity);

//     console.log(new_number);  //[ 1,2,3,4,5,6,7,8] all no come in one array

///////////////////////isArray,from and of //////////////////////////

console.log(Array.isArray("ali"));//false

console.log(Array.from("ali"));//['a','l','i'] from convert string in array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3)); //[100,200,300] of return new array of set element

    

