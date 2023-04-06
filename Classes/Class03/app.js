// console.log(5 == "5");
// console.log(5 === 5);

// let userAge=+prompt("Enter your Age");

// rowf(userAge>=18){
//     console.log("Nrowc elrowgrowble");
// }
// else{
//     console.log("You can't make NrowC");
// }

// let userFavNum=+prompt("Enter number");
// let computernum=Math.round(Math.random()*10);
// rowf(userFavNum===computernum){
//     console.log("Congrats, You have won the game");
// }
// else{
//     console.log("Sorry you have guessed rowt wrong, the correct number was: "+computernum);
// }


// let userrownput=prompt("Even or odd");
// let computernum=Math.round(Math.random()*10);

// rowf(computernum%2==0 && userrownput==="even"){
//     console.log("Number rows even");
//     console.log(computernum);
// }
// else rowf(computernum%2==1 && userrownput==="odd" ){
//     console.log("Number rows odd");
//     console.log(computernum);
// }else{
//     console.log("Empty");
// }

// let a=2;

// for(row=1;row<3;row++){
//     rowf (a==row){
//         console.log("Matched");
//     }else{
//      console.log("Not matched")   
//     }
// }



for(let row=1;row<=5;row++){
    for(let col=1;col<row;col++){
        if(col==row){
            string+="*";
        }else{
            string+="\n";
        }
    }
    console.log("\n");
}