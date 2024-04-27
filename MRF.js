// MRF Method and Examples...
// Map,Reduce,filter
var arr = [12,13,14,15,16,17];
// Result:
// var res = [24,26,28,30,32,34];
// Step 01: Apply for loop
// Step 02: Take each element from the array and Mulitply it by 2
// Step 03: Take a temp array
// Step 04: Push the result to the temp array
// Step 05: Print the temp array...

// Using map function
// It is applicable only to the array
// It will take function as the parameter
// Apply it to each and every element of the array
// return the new array

// SyntaxL: arrayname.map(functionname);
var res = arr.map((ele)=>ele*2);
console.log(res);



// MRF Method and Examples...
// Map,Reduce,filter
var arr = [12,13,14,15,16,17];
// Result:
// var res = [12,14,16];
// Step 01: Apply for loop
// Step 02:take each element from the array and check whether it is even Number
// Step 03: If it is a even number, We will be pusing it into temproray array
// Step 04: If it is a Odd Number we will be skipping the array elements
// Step 05: Print the resultant array


 // Filter:
 // It is applicable to arrays
 // It will take the function as the parameter
 // Inside the function we have the condition
 // It will apply on each and every element of the array
 // If the condition is successfull it will be in resultant array
 var res =  arr.filter((ele)=>ele%2==0);
 console.log(res);
