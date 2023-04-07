let valueOne=+prompt("Enter first number");
let valueTwo=+prompt("Enter second number");
let valueThree=+prompt("Enter Third number");
let valueFour=+prompt("Enter fourth number");
let valueFive=+prompt("Enter fifth number");

if(valueOne>valueTwo && valueOne>valueThree && valueOne>valueFour && valueOne>valueFive){
    console.log("Value One which is "+valueOne+" is the greatest");
}
else if(valueTwo>valueOne && valueTwo>valueThree && valueTwo>valueFour && valueTwo>valueFive){
    console.log("Value Two which is "+valueTwo+" is the greatest");
}else if(valueThree>valueOne && valueThree>valueTwo && valueThree>valueFour && valueThree>valueFive){
    console.log("Value Three which is "+valueThree+" is the greatest");
}else if(valueFour>valueOne && valueFour>valueTwo && valueFour>valueThree && valueFour>valueFive){
    console.log("Value Four which is "+valueFour+" is the greatest");
}else{
    console.log("Value Five which is "+valueFive+" is the greatest");
}