// function helloMachine(startValue, endValue, textValue){
//   for(let i = startValue; i<= endValue; i++){
//     console.log(textValue);
//   }
// }
// helloMachine()
// for(let i = 1; i<= 55; i++){
//   console.log('hello');
// }

let a = 1; // 전역변수
function b(){
  console.log(a); // 실행
  let c = 'hi'; // 지역변수
}
b();
// console.log(c); // 호출이 안됨