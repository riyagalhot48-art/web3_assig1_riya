const operation= process.argv[2];
const num1=Number(process.argv[3]);
const num2=Number(process.argv[4]);
switch (operation){
    case "add":
        console.log("Result:",num1+num2);
        break;
    case "substract":
        console.log("Result:",num1-num2);
        break;
    default:
        console.log("Invalid operation");        
}  
