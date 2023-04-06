// function greet(name){
//     console.log("Hello "+name);
// } 
// greet("Asher");

// greet("hasan");

// greet(2);

// function employee(fileno){
//     return "Hello "+fileno;
// } 

// let data=employee(7);
// document.write(data);
// console.log(data);


// Recursion

// function writeData(data,times){
//     if(times>0){
//         document.write(data);
    
//         writeData("Hello",times-1);
//     }
// }

// writeData("Hello",5);


// function fact(num){
//     if(num>1){
//         return num*fact(num-1);
//     }
//     return 1;
// }

// console.log(fact(5));

//Closures

let a=7;
function print(){
    console.log(a);
}
