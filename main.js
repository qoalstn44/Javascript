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



let result = 100;

let num = 4;

let count = 0;


while (result <= 22) {

    result = result - num;

    count = count + 1;

}


console.log(count);


let x = 10,
    y = 20,
    z = 30
console
    .log(
        x,
        y,
        z,
    )
    // .a()
    // .b()
    // .c()

if (true) {
    const testName = 'hojun'
    let testAge = 10
}
if (true) {
    var testName2 = 'hojun'
    var testAge2 = 10
}

for (let x = 0; x < 100; x++) {
    if(x % 3 == 0 && x % 5 == 0){
        console.log(x)
    }
}

// 앞에 값이 널이냐를 확인하고 싶은 경우, 단락 회로 평가라고 부릅니다.
result1 = 10 || 100;
result2 = 0 && 100;
result3 = null || 100;
result4 = null && 100;

username = 'hojun';
result5 = username || '유저 이름이 없습니다';

username = undefined;
result5 = username || '유저 이름이 없습니다';

let result1;
let result2 = result1 ?? 100;

let result3 = 10;
let result4 = result3 ?? 100;

let result5 = null;
let result6 = result5 ?? 100;

10 in [10, 20, 30] // false
1 in [10, 20, 30] // true
1 in 'hello' // error
'name' in {'name':'hojun', 'age':10} //true
'length' in [10, 20, 30]; // true

parseInt('1hello world') // 1
Number('hello world') // NaN

'hello'.repeat(100)
'0'.repeat(100)
'5'.repeat(100).split('').map(Number)

['하나', '둘', '셋']
[100, 200, 300]
[{'one':1, 'two':2}, {'one':10, 'two':20}]
[[10, 20], [100, 200], [1000, 2000]]
// 3차원
let x =[[[1, 2], [10, 20], [100, 200]],
 [[3, 4], [30, 40], [300, 400]]]


 Array(100).fill(0)
Array(100).fill('hello')
Array(100).fill('hello'.repeat(2))
Array(100).fill(0).map((value, index)=> value + index)


{
    "지역이름": "전국", // key : value(2개의 집합을 가리켜 객체 프로퍼티)
    "확진자수": 24889,
    "격리해제수": 23030,
    "사망자수": 438,
    "십만명당발생율": 48.0
}
{
    'one' : 1,
    'o n e' : 1,
    '1 one' : 1
}
{
    one : 1,
    o n e : 1, // error
    1 one : 1 // error
}
let x=1, y=2, z=3
let object = {x, y, z} // {x: 1, y: 2, z: 3}

console.log(Object.getOwnPropertyDescriptor(person, 'name'));
Object.getOwnPropertyDescriptors(person)
// {10: {…}, name: {…}, age: {…}, height: {…}, weight: {…}, 이력: {…}}
// value: '이호준',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false

let map = new Map()
map.set('one', 100)
map.set('two', 200)
map.set('three', 300)
map.set('four', [10, 20])
map.set(5, [100, 200])
map.set([1, 2], [100, 200])
map.get(5)

let human = {
    name:'hojun3',
    age:30,
    local:'jeju'
}
let hojun = new Map(Object.entries(human))

let set = new Set()
set.add(1);
set.add(1);
set.add(2);
set.add(2);
set.add(3);
set.add(3);
set.add(3);
set.add(3);
set.size
// let set = new Set([1, 2, 3, 3, 3, 3])
// let set = new Set('helllllllllo')

let a = new Set([1, 2, 3])
let b = new Set([3, 4, 5])
const 합집합 = new Set([...a, ...b]);
const 교집합 = new Set([...a].filter(x => b.has(x)));
const 차집합1 = new Set([...a].filter(x => !b.has(x)));
const 차집합2 = new Set([...b].filter(x => !a.has(x)));

if(false) {
    console.log('hello 1')
}
if(false) {
    console.log('hello 2')
}
if(true) {
    console.log('hello 3')
}
if(true) {
    console.log('hello 4')
}
if(false){
    console.log('hello 1')
}
else if(false) {
    console.log('hello 2')
}
else if(true) {
    console.log('hello 3')
}
else if(true) {
    console.log('hello 4')
}
else {
    console.log('!!')
}


let result = true ? 1 : 100;

let day
switch (new Date().getDay()) {
  case 0:
    day = "일";
    break;
  case 1:
    day = "월";
    break;
  case 2:
    day = "화";
    break;
  case 3:
    day = "수";
    break;
  case 4:
    day = "목";
    break;
  case 5:
    day = "금";
    break;
  case 6:
    day = "토";
}
console.log(day)

//예제
for (let i = 0; i < 10; i++) {
    console.log(i)
}

//예제
let a = [10, 20, 30, 40];
// let a = 'hello';
// let a = '19821'
for (let i of a) {
    console.log(i);
}

//예제
let a = [10, 20, 30, 40];
for (let i in a) {
    console.log(i);
}
let a = {'one':1, 'two':2};
for (let i in a) {
    console.log(i);
}

//예제
let x = 0;
while (x < 10) {
    console.log(x);
    x++;
}

//예제
let x = 0;
do {
    console.log(x);
    x++;
} while (x < 10)

//예제
let a = [10, 20, 30, 40];
a.forEach(e => console.log(e**2));

//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}

//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) break;
    console.log(i);
}

//예제
for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
    console.log(i);
}

// 고차원 순회
let a = [[[1, 2], [10, 20], [100, 200]],
         [[3, 4], [30, 40], [300, 400]]]
for (let i of a){
    for (let j of i){
        for (let k of j){
            console.log(k)
        }
    }
}


let data = [{
    name: 'hojun',
    age:10,
    friends:[
      ['직장', '라이켓'],
      ['친구', '뮤'],
    ]
    }, {
    name: 'gildong',
    age:11,
    friends:[
      ['직장', 'gary'],
    ]
    }]

for (let i of data){
    for (let j in i){
        //console.log(i[j])
        if (j == 'friends'){
            console.log(i[j])
        }
    }
}

let 함수표현식 = function(){} // 호이스팅 X
function 함수선언식(){} // 호이스팅 O

function 땅다지기(){}
function 시멘트작업(){}
function 철근(){}
function 벽돌(){}
function 지붕(){}
땅다지기()
시멘트작업()
철근()
벽돌()
지붕()

function add(x, y){
    return x + y;
}

add(3, 5)

function add(a = 100, b = 200) {
    console.log(a, b);
    return a + b;
}

add(10, 20);
// 30
add(10);
// 210
add();
// 300
add(b=300) // a에 입력
// 500
add(undefined, 300);
// 400

function add({ a = 100, b = 200 }) {
    console.log(a+b);
}

add({b: 300}); // 400

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function cal(a, b){
    return a(10, 10) + b(10, 10);
}

cal(add, mul);

function cal(a, b){
    return a(10, 10) + b(10, 10);
}

cal((a, b) => a + b, (a, b) => a * b);

function 제곱(x) {
    return x**2
}

// 함수표현식, 호이스팅 X
let 제곱 = x => x**2;

function f(a, b) {
    let z = 10
    let result = z + a + b
    return result
}

// 함수표현식, 호이스팅 X
let f = (a, b) => {
    let z = 10
    let result = z + a + b
    return result
};

// 기명 함수
let aa = function sum(x, y) {
    return x + y
}

// 익명 함수인것 같지만 바뀜
let bb = function(x, y) {
    return x + y
}
// ES5에서는 빈 문자열이었는데 ES6에서 name 값을 가지는 것으로 바뀌었습니다.
let cc = (x, y) => x + y;

console.dir(function (x, y) {return x + y;})

- 클래스 - 붕어빵 찍는 틀, 공장
- 인스턴스 - 붕어빵, 제품
class Notice {
    constructor(title, contents, author){
        this.title = title
        this.contents = contents
        this.author = author
    }
    수정하기(title, contents, author){
        this.title = title
        this.contents = contents
        this.author = author
    }
}

dataBase = []
게시물1 = new Notice('제목1', '내용1', '저자1')
dataBase.push(게시물1)
게시물2 = new Notice('제목2', '내용2', '저자2')
dataBase.push(게시물2)
게시물3 = new Notice('제목3', '내용3', '저자3')
dataBase.push(게시물3)

dataBase.forEach(d => {
    제목 = document.createElement('h1')
    제목.textContent = d.title
    내용 = document.createElement('p')
    내용.textContent = d.contents
    저자 = document.createElement('p')
    저자.textContent = d.author
    document.body.append(제목)
    document.body.append(내용)
    document.body.append(저자)
})

// dataBase.splice()와 같은 것으로 삭제, 실제로는 mongoDB와 같은 곳에서 삭제

class Human {
    constructor() {}
    // 인스턴스 메서드, 인스턴스 프로퍼티 메서드, 프로토타입 메서드
    a() {}
    // 클래스 메서드, 클래스 프로퍼티 메서드, 정적 메서드
    static b() {}
}

hojun = new Human('호준')

typeof hojun // object
typeof Human // function

// getter - 획득
// setter - 설정
// # = private 필드
class Student {
    subject = 'javascript study'
    #level;
    constructor(level, name, skill) {
        this.#level = level;
        this.name = name;
        this.skill = skill;
    }
    get level() {
        // hojun.level로 출력
        return this.#level;
    }
    set level(level) {
        // hojun.level = 10
        this.#level = level;
    }
    attack(){
        console.log('파이어볼!')
    }
}

class Mento extends Student {
    codeReview() {
        console.log('코드리뷰를 진행합니다.');
    }
}

let hojun = new Student(999, '호준', ['python', 'js', '...생략...']);

let hojun2 = new Mento(999, '호준', ['python', 'js', '...생략...']);

class Human {
    constructor() {}
    // 인스턴스 메서드, 인스턴스 프로퍼티 메서드, 프로토타입 메서드
    a() {}
    // 클래스 메서드, 클래스 프로퍼티 메서드, 정적 메서드
    static b() {}
}

hojun = new Human('호준')

typeof hojun // object
typeof Human // function

// getter - 획득
// setter - 설정
// # = private 필드
class Student {
    subject = 'javascript study'
    #level;
    constructor(level, name, skill) {
        this.#level = level;
        this.name = name;
        this.skill = skill;
    }
    get level() {
        // hojun.level로 출력
        return this.#level;
    }
    set level(level) {
        // hojun.level = 10
        this.#level = level;
    }
    attack(){
        console.log('파이어볼!')
    }
}

class Mento extends Student {
    codeReview() {
        console.log('코드리뷰를 진행합니다.');
    }
}

let hojun = new Student(999, '호준', ['python', 'js', '...생략...']);

let hojun2 = new Mento(999, '호준', ['python', 'js', '...생략...']);
예외처리
try {
    // 코드
 } catch(e) {
    // 코드
 } finally {
    // 코드
 }
 //throw new Error(message);
 //throw new SyntaxError(message);
 //throw new ReferenceError(message);

 function f(...x){
    return x;
}

f(1, 2, 3, 4, 5)

전개구문 사용 예제
let arr1 = [1, 2, 3, 4];
let arr2 = [10, 20, 30, 40];
let arr3 = [100, ...arr1, 200, ...arr2, 300]
let arr4 = [100, arr1, 200, arr2, 300]
console.log(arr3)
Math.max(...arr3);
let [a, b, c, ...d] = [10, 20, 30, 40, 50, 60, 70]


- 리터럴은 약속된 기호를 사용해 값을 생성하는 것입니다. 예를 들어 문자를 생성하기 위해서는 작은 따옴표, 큰 따옴표, 템플릿 리터럴 중 하나를 사용하죠. 배열을 생성하려면 대괄호를, 오브젝트를 생성하려면 중괄호를 사용해야 합니다.
- new String(), new Array(), new Object()의 형식으로 만들어야 하는 것을 약속된 기호로 만들 수 있게 해준 것입니다.
- new Object() 의 리터럴 표현이 {}, new Number(1) 의 리터럴 표현이 1, new String("hello") 의 리터럴 표현이 "hello" 입니다.
- new Object()는 생성자 함수를 이용한 것이죠.
- 정규표현식 리터럴
let x = /[a-zA-Z0-9]/g

2진수, 8진수, 16진수 리터럴
let a = 0b1001 // a == 9
let b = 0o1001 // b == 513
let c = 0x1001 // c == 4097

## 사용자와 상호작용

- prompt('hello')
- confirm('hello')
- alert('hello')
*/