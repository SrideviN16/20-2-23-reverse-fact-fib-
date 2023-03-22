//20-2-2023 review//
//1.fiba series//
var fb=parseInt(prompt(" enter the number:"));
	   let fa=0;
	   let fc=1;
	       console.log(fa);
		   console.log(fc);
	     for (let i=0;i<=fb;i++)
		 {
             
			let fans=fa+fc;
			 fa=fc;
             fc=fans;			 
			console.log(fans);
		 }
//2 fact the number//
const number = parseInt(prompt('Enter a positive integer: '));
if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}
else if (number === 0) 
{
    console.log(`The factorial of ${number} is 1.`);
}
else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
//3.reverse a given number//
var rnummber= parseInt( prompt("enter the nuumber:")); 
	 var  reverse = 0; 


	while (rnummber>0) {
		 let remainder= rnummber%10;
		reverse = reverse * 10 + remainder;
		rnummber = rnummber-remainder/ 10;
	}

	console.log(reverse);