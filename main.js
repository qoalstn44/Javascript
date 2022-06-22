const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf8")

console.log(input);

let 안녕 = "하세요";
let hi = "hello";
let HI = "HELLO";

console.log(안녕);
console.log(hi);
console.log(HI);

console.log("hello, world!"); //이것은 단일행 주석입니다.
//console.log("hello, world!")

/* multi-line comments
어떤 문자가 와도 
개행이 되어도 주석처리가 된다.
console.log("hello, world!");
*/
console.log("hello, world!");