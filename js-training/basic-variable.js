console.log('test');

let one; // 값은 무엇을 가리키지 않은 상태
1;// 식별을 위해 값만 있는 상태
// * 값은 존재하는 상태
// * 활용이 안된 상태

console.log(one);

const two = 1; // 변수 선언과 동시에 값을 가지고 있어야함
console.log(two);

// var 은 유연해서 오류를 못 찾는다.
// let 은 중괄호 안에서만 효력을 발생하는 지역변수 , var 보다 명확한 구석이 있음
// --> 다루고자 하는 변수가 있다면 첫번째 let 을 권장
// const 은 변하지 않게 불변성 
// 문서 API -> 바꿀일 없다 : get 할때 무조건 const
// 에러가 나야 해결해야할 문제를 해결한다.

console.log(1 == '1'); // 데이터 타입을 안보고 내용이 같으면 true
console.log(1 === '1'); // 데이터 타입까지 보고 true => 완전 일치 연산자 

let a = 1;
let b = '2';
let changeB = String(b);
// 형변환 메서드 => 파스칼 케이스로 되어있다(첫번째 글자가 대문자 String(), Number())


console.log(typeof b);
console.log(typeof changeB);
console.log(a === b)
console.log(typeof a === typeof b) 
// 데이터타입을 바꾸는 행위 => '형변환'
// 사용자가 입력하는 데이터는 숫자가 아님 => '문자열'

let chea = null; // 비어있지만 존재하는 값 '빈공간'
// null 이라는 값은 숫자, 문자열, object 동등한 레벨 데이터타입 => 타입체크하면 object로 나오는 현샹 -> 없애지 못하는 js 버그
// null vs ''(문자열) -> 전혀다른것 
// 비어있는 값 vs 비어있는 문자열

let arr = ['피카츄','라이츄','파이리','꼬부기'];
console.log(typeof arr); // object로 반환
// arr 는 객체이고, 객체에서 순서만 필요할때 쓰려고 나누어 놓은것
console.log(Array.isArray(arr)); // boolean 으로 반환
// 배열은 객체이다. 타입체크를 다르게 해놓은것
//isArray() : is로 시작하는 메서드는 불리언으로 리턴

// -> typepf만 알면 데이터타입 구분이 가능

let txt = '나는 친구가없는 개똥벌레이다';
console.log(txt[7]); // '는'
console.log(txt.length); // 15

// 문자열 string은 순서가 있다. -> 문자 형태의 배열 -> 배열접근이 가능
// 단, char -> 그냥 문자

