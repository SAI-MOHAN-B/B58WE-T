function label_create(tagname,attrname,attrvalue,content){
var ele = document.createElement(tagname);
ele.setAttribute(attrname,attrvalue);
ele.innerHTML = content;
return ele;
}
// <input type="email"  id="email">
function break_create(){
    var label_break = document.createElement("br");
    return label_break
}
function input_create(tagname,attrname,attrvalue,attrname1,attrvalue1){
var input_ele = document.createElement(tagname)
input_ele.setAttribute(attrname,attrvalue)
input_ele.setAttribute(attrname1,attrvalue1);
return input_ele
}
// <label for="email">Email</label>
var email = label_create("label","for","email","Email");
var email_break = break_create();
var input_email = input_create("input","type","email","id","email")
var input_break = break_create();

var password = label_create("label","for","password","Password");
var pass_break = break_create();
var pass_inpput = input_create("input","type","password","id","password");

document.body.append(email,email_break,input_email,input_break,password,pass_break,pass_inpput)
// Firstname,Middlename,LastName,Password,FileUpload Using DOM
Async and await
It is a Syntatic sugar way of writing the promises
It helps us to write the promises easier

It is Applicable to functions!!
A normal function can be Converted into async function 
with the keyword called async

here await is used inside the async function
await helps us to wait until the promises are getting resolved
it is a replacemnet to .then()


An async function always returns the promise

async function foo(){
    var data =  await fetch("https://restcountries.com/v3.1/all");
    var data1 = await data.json();
    console.log(data1);
}

foo();


To handle resolved as well as rejected state
try-catch{}
Above statements are called as Error Handling Statements!!

function bar(){
    return new Promise((resolve,reject)=>reject("This is rejected"))
}

async function foo(){
   try {
    var res_data = await fetch("https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
    var data1 = await res_data.json();
    console.log(data1);
    var data =  await bar();
   } catch (error) {
    console.log(error);
   }
}

foo();

function foo(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(2 * num), 3000)
    })
}
// foo(5).then((data)=>{
//     console.log(data);
//     return foo(data);
// }).then((data1)=>{
//     console.log(data1);
//     return foo(data1);
// }).then((data2)=>console.log(data2))


async function bar() {
    var data1 = await foo(5);
    console.log(data1);
    var data2 = await foo(data1);
    console.log(data2);
    var data3 = await foo(data2);
    console.log(data3);
}


bar();
