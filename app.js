const isEven=require("./modules/iseven");
const logger=require("./modules/logger");
const number=Number(process.argv[2]);

logger("Checking whether the number is even or odd.");

if(isEven(number)){
    console.log(number+" is Even");
} else{
    console.log(number+" is Odd"); 
};
