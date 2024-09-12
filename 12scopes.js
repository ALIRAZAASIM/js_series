// {} called block scope in js 

if (true){
    // let a = 10;//undefine
    // const b = 20;//unndefine
    var c = 30;// 30 bcz var
}
// console.log(a);
// console.log(b);

//console.log(c);
//let and const are block-scoped, so they cannot be accessed outside the block they were declared in.
//var is either function-scoped or globally scoped, so in this case, c is accessible outside the if block.



    if(true){
        const user_name = "ali"
        if (user_name==="ali"){
            const website = "youtube"
      //console.log(user_name + website);//result aliyoutube
}
        //  console.log(website);//error bcz outside the block
         }
        //  console.log(user_name);//error bcz outside the block

//++++++++++++++++++++++ intresting +++++++++++++++++++++++++++++++++

        console.log(addnum(5));  //easily run and result 6
        
         function addnum(num){
            return num + 1
        }
         
        

        addnum2(5);//eror bcz before decleration dont use variable type this is hoisting
        
        const addnum2 = function(num2){
            return num2 + 1
        }


