// In this question, you have'nt specified that what exactly we have to do,
// So I took all the marks and made the grades out of all the marks which 
// are between 60 to 100.

for(let studentMarks=60;studentMarks<=100;studentMarks++){    
if(studentMarks<60){
    console.log("Your Grade is F");
}
else if(studentMarks<70){
    console.log("Your Grade is D");
}
else if(studentMarks<80){
    console.log("Your Grade is C");
}
else if(studentMarks<90){
    console.log("Your Grade is B");
}
else if(studentMarks<100){
    console.log("Your Grade is A");
}
}