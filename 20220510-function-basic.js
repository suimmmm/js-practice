// 함수 선언
function typeA(){}
typeA();
// 전역 스코프

// 익명함수(anonymous function) / 함수 리터럴 : 직접 새긴다
// 함수표현식 (function expression)
const typeB = function(){}
typeB();

// 제작자는 알지만 외부가 모르는 방식 : 권장되는 방식

// 화살표 함수 (arrow function)
// 함수표현식과 같은 기능 (축약형) -> 최신문법
const typeC = ()=>{} 
typeC();

// a 라는 매개변수 하나일때 가능
const typeD = a => {}
typeD();

// => 함친것
(function() {})();

let test;
test.addEventListener('type', function() {});
// 함수의 매개변수 자리에 함수가 들어가 있는 것 '콜백함수'
// 익명이 기본
// 많이 쓰기 때문에 눈에 익혀야함.