//for loop

for (let i = 0; i < 10; i++) { 
    console.log(i);
}


//+++++++++++++++++++++ nusted loop ++++++++++++\\
// nusted loop means loop inside the loop and working multiplication etc

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}


for (let i = 0; i < 10; i++) { 
    //console.log(`outer loop;${i}`);
    for (let j = 0; j < 10; j++) {
        //console.log(`inner loop;${j}`);
    }
}


let myArray = ["ali","raza","asim"]

//console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
}


//+++++++++++++++++break and continou++++++++++++++++++++++++++++++++//

// for (let index = 0; index <= 20; index++) {
//     if (index==5) {
//         console.log(`5 is detected`);
//         break         //break used to stop/switch the execution process  when i = 5
//     }
//    console.log(index);  
// }


for (let index = 0; index <= 20; index++) {
    if (index==5) {
       // console.log(`5 is detected`);
        continue   //Skips the current iteration i =5 and moves to the next.
    }
   //console.log(index);  
}


//+++++++++++++++++++++++++++ while and do while loop ++++++++++++++++++++\\

let i = 1;
while (i<10) {
    console.log(`this is less then ${i}`);
    i++
}


let array = ["html" , "css" , "js"]

let arr = 0
while (arr<array.length) {
    console.log(array[arr]);
    arr++
}

//++++++++++++++do while+++++++++++++++//

let score = 1;
do {
    console.log(score);
    score++
    
} while (score<=10);


//in dowhile loop firstly execute then checking the condition
let scores = 11;
do {
    console.log(scores);
    scores++
    
} while (scores<=10);
//result is 11 bcz in do while condition after checking