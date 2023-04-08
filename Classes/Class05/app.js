// let jan="january";
// let feb="feburary";

// let months=["January","Feburary","March","April","May"];

// let shoulIStore=prompt("Should I enter value in an array?");

// if(shoulIStore=="yes"){
//     months.push("April");
//     console.log(months);
// }else{
//     console.log(months);    
// }

// months.shift(); //removes first index

// months.unshift("jan"); //adds value on first index

// months.push("April"); add value on last+1 index

// months.pop(); removes from last index

// console.log(months.length);

// months.splice(2,2,"june","july"); // removes from anywhere in the index,yahaan 2 woh jagah hai jo 
// bataraha hai value delete krne wale ka index kidhar hai aur uske baad jo 1 hai woh batarha hai
// ke kitni delete krwaani hai values..yahaan june july index no 2 se hi aggay add hote jayenge.

// let newArr=months.slice(0,2); //gives new copy of array

// console.log(newArr);

// console.log(months);

// let arr=[1,2,3,4,5];

// arr.forEach(function(val,index){
//     console.log(index+","+val);
// });

// let arr=[1,2,3,4,5];

// let filteredarray=arr.filter(function(val){
//     return val%2==0;
//     // if(val%2==0){
//     //     return true;
//     // }else{
//     //     return false;
//     // }
// });

// console.log(filteredarray,arr);

// let arr=[5,4,3,2,1];

// let sortedarray=arr.sort(function(a,b){
//     if(a>b){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// console.log(sortedarray);

//REDUCE for Int
// let arr=[5,4,3,2,1];

// let total=arr.reduce(function(prevVal,currVal){
//     return prevVal + currVal;
// },0);


//REDUCE for string
// let arr=["Happy","Birthday","Dear"];

// let total=arr.reduce(function(prevVal,currVal){
//     return prevVal +" "+ currVal;
// },"");

// console.log(total);

let arr=["Happy","Birthday","Dear"];
let finalstring="";
arr.forEach(function(val){
    finalstring+=val;
});
console.log(finalstring);