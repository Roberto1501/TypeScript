"use strict";
let x = 20;
console.log(x);
// inferência e anotation
let firstname = "Roberto";
let age = 24;
let array = [9];
console.log(array.length);
//tuplas
let tuple = [8, "a", 6];
console.log(tuple);
const user = {
    name: "Roberto",
    age: 24,
};
console.log(user);
// union type
let id = 8;
let valor = 8000;
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    name: "Roberto",
    size: Size.G
};
console.log(camisa);
//literal type
let teste;
//funções
function soma(a, b) {
    return a + b;
}
console.log(soma(12, 12));
function greeting(name, greet) {
    if (greet) {
        console.log(`O nome é  ${greet}${name}`);
    }
    else {
        console.log(`O nome é ${name}`);
    }
}
greeting("Roberto");
greeting("Roberto", "sr.");
