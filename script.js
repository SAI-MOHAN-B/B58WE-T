// ES5 vs ES6
// variables
// functions
// operators 
//destrcutruing

// To overcome hoisting
// ES6 has introduced let and const
// console.log(res);
// let res;

// let and const
// let and const is considered as block scoped..
// var is considered as global scope 
let a = 32;
if (5 > 4) {
    {
        let a = 34;
        console.log(a);
    }
    console.log(a);
}

// Anonymous function
// here we are storing the function in a variable
// Syntax: var variablename = function(){}
var mul = function (a, b) {
    return a * b;
}
console.log(mul(12, 13));

function foo() {
    var res = 30;
    return "hello world";
}
console.log(foo());

// Arrow Functions
// They are introduced in ES6
// Syntax: var variablename = ()=>{}
// 2 different usecase
// 1st use case..
// Suppose if the Function is returning a single value
var res = () => "hello world";
console.log(res());

var data = (a, b) => a * b;
console.log(data(12, 13));

// if a function is returning a single value
//then there is no need of return keyword in a arrow functions


// 2nd Use case
// if a function is having the Multiple lines 
//then there is the need of return keyword...
var data_res = () => {
    var res = 30;
    return "hello world";
}

// Write a anonymous function to print the Odd numbers froim the Given array
// Input:[12,13,14,15,16,17,18];
// Output:[13,15,17];

var res = function (arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
}

// IIFE:
// Immediately Invoked Function Execution!!
(function(a,b){
    console.log(a*b);
    })(12,13)
console.log(res([12, 13, 14, 15, 16, 17, 18]));

// ES6 Operators:
// Spread and Rest Parameter..


// ...
// Expanding the arrays
let arr = ["guvi","geek","research park"]
console.log(...arr);

function foo(a,b,c){
return a+b+c;
}
console.log(foo(...arr));

//Combining the arrays
var arr1 = [12,13,14];
var arr2 = [15,16,17];
var res = [...arr1,...arr2];
console.log(res);


// ES6 Operators:
// Spread and Rest Parameter..

function data_res(a,b,...res){
    console.log(res);
  return a+b;
  }
  console.log(data_res(12,13,14,15,16,17,18));
  // rest parameter
  // rest stands for the remaining...
  // it is applicable to the functions
