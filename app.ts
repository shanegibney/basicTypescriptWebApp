console.log("typescriptingsly");

//enum
console.log("enum");
enum Color {Red=10, Green, Blue, Pink}//set of values
let c: Color = Color.Blue;
console.log(c);//2

// enum Colors {Red=10, Green, Blue, Pink}
let cs: Color = Color.Pink;
console.log(cs);//14

//any
console.log("any");
let something: any = 12;
console.log(something +  " is of type: " + typeof something);

something = "Jill";
console.log(something + " is of type: " + typeof something);

let arr = [1,true,4,"hello"];

console.log(typeof arr);// would have expected arr to be of type array

arr.forEach(function(element){
console.log("typeof element:" + typeof element);
});

//void
console.log("void");
funct();//function can be called before function declaration
function funct(): void {
  console.log("a function of type void returns nothing");
}

console.log("typeof function void: " + typeof funct);// expected this to return void

//typeassertions using angle-bracket syntax
console.log("typeassertions using angle-bracket syntax");
let someValue: any = "I am a string";
let strLength: number = (<string>someValue).length
console.log("'angle-bracket syntax' ", strLength);

//typeassertions using angle-bracket syntax
console.log("//typeassertions using as syntax")
let someValued: any = "I am a string";
let strLengthed: number = (someValued as string).length
console.log("'as' syntax ", strLength);

//type casting +value casts this variable to type number

//template variables
let named: string = "Joe";
let words: string = `hello,
I am ${named}`
console.log(words);

window.onload = function() {
// function greeter(person) {
//     return "Hello, " + person;
// }

let user: string = "Joey";
let sentence: string = `${user} is super,
and totally duper!`;

document.body.innerHTML = "<p><strong>" + sentence + " blah blah blah</strong></p>";
}


//var
function f(){
  var a = 10;
  return function g(){
    var b = a + 1;
    console.log("in g() b = ", b)
    return b;
  }
}

// var g = f();
console.log(f());
