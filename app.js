"use strict";
console.log("typescriptingsly");
//enum
console.log("enum");
var Color;
(function (Color) {
    Color[Color["Red"] = 10] = "Red";
    Color[Color["Green"] = 11] = "Green";
    Color[Color["Blue"] = 12] = "Blue";
    Color[Color["Pink"] = 13] = "Pink";
})(Color || (Color = {})); //set of values
var c = Color.Blue;
console.log(c); //2
// enum Colors {Red=10, Green, Blue, Pink}
var cs = Color.Pink;
console.log(cs); //14
//any
console.log("any");
var something = 12;
console.log(something + " is of type: " + typeof something);
something = "Jill";
console.log(something + " is of type: " + typeof something);
var arr = [1, true, 4, "hello"];
console.log(typeof arr); // would have expected arr to be of type array
arr.forEach(function (element) {
    console.log("typeof element:" + typeof element);
});
//void
console.log("void");
funct(); //function can be called before function declaration
function funct() {
    console.log("a function of type void returns nothing");
}
console.log("typeof function void: " + typeof funct); // expected this to return void
//typeassertions using angle-bracket syntax
console.log("typeassertions using angle-bracket syntax");
var someValue = "I am a string";
var strLength = someValue.length;
console.log("'angle-bracket syntax' ", strLength);
//typeassertions using angle-bracket syntax
console.log("//typeassertions using as syntax");
var someValued = "I am a string";
var strLengthed = someValued.length;
console.log("'as' syntax ", strLength);
//type casting +value casts this variable to type number
//template variables
var named = "Joe";
var words = "hello,\nI am " + named;
console.log(words);
window.onload = function () {
    // function greeter(person) {
    //     return "Hello, " + person;
    // }
    var user = "Joe";
    var sentence = user + " is super,\nand totally duper!";
    document.body.innerHTML = "<p><strong>" + sentence + "</strong></p>";
};
//var
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        console.log("in g() b = ", b);
        return b;
    };
}
// var g = f();
console.log(f());
//# sourceMappingURL=app.js.map