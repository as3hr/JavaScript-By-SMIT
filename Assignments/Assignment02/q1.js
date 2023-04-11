function closureHaiYeh(num1){
    let num2=10;
    return function(){
        console.log("Answer: ",num1 + num2);
    }
}

const answer=closureHaiYeh(5);

answer();