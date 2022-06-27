/*
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

console.log("hello, world!");

let A = 123;
console.log(A);

A = 456;
console.log(A)

let A = 789; // Syntax error

const B = 123; //상수 선언 및 값 초기화
console.log(B) //outpot: 123

const C;
C = 123;

//선언 후 할달
let hi;
hi = "holle";

//선언과 동시에 초기화
let halo = "holle!";

//한 줄에 여러번 변수 선언하고 초기화
let name = "john",
    age = 13,
    mag = "holle";

//상수는 보통 대문자로 표기
const TESTCASE = 5;
const BIRTYDAY = "2020. 1. 1"

console.log(age);
console.log(BIRTYDAY);

//using var
console.log(name_1);
var name_1 = "john";
console.log(name_1);

//hosting
var name_2;
console.log(name_2);
name_2 = "john";
console.log(name_2);

console.log(name_3);
let name_3 = "minsu";


let str = 'hello, wordl!';
console.log(typeof str);

console.log(typeof undefined);
console.log(typeof 123);
console.log(typeof 456n);
console.log(typeof 123.123);
console.log(typeof true);
console.log(typeof "hello");
console.log(typeof Symbol("id"));
console.log(typeof Math);
console.log(typeof null);
console.log(typeof console.log);


const null_check = null; //output: object <- 하우 버전 호완성으로 object 표기
console.log(null_check === null);//output: true


let mum_1 = 123.0;
let mum_2 = 123.456;

console.log(mum_1 - mum_2);
console.log((mum_1 - mum_2) .toFixed(3));
console.log(num_3);
console.log(num_1 / "hello" ); 


let str_1 = "hello";
let str_2 = "hello"

let num = 3;
let str_3 = `hello_${num}`;

console.log(str_1);
console.log(str_2);
console.log(str_3);

*/

let result = 100;

let num = 4;

let count = 0;


while (result <= 22) {

    result = result - num;

    count = count + 1;

}


console.log(count);