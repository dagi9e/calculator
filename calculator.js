
let i=1;
while (i<2){
let a= prompt("Hi there, welcome to myCalculator. Please give me your first number","");
if( a=="" ||a==null)break;

let b= prompt("Now please give me your second number number","");
if( b==""||b==null )break;

let calc= prompt("Please type what you want to do...add(+),subtract(-),divide(/),multiply(*)","");

let num1= Number(a);
let num2= Number(b);
    
    if (calc=="add"||calc=="+"){
        let result= num1 + num2;
        alert (result);
    }
    else if ( calc=="subtract"||calc=="-"){
        let result= num1 - num2;
        alert (result);
    }
    else if (calc=="multiply"||calc=="*"){
        let result = num1*num2;
        alert (result);
    }
    else if (calc=="divide"||calc=="/"){
        let result = num1/num2;
        alert (result);
    }
    else break;

}
