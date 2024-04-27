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
