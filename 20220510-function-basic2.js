// 고차 함수 (higher order function) : 제작자가 만드는 것 => 알고리즘 제작법

function typeA(){
  console.log('typeA');
}

function typeB(){
  console.log('엑');
  // 함수 알고리즘은 무슨 문자열을 콘솔 찍은 다음 typeA 함수 호출
  typeA();
}
typeB();
// => 고차함수 기본형

function typeC(target){
  target.addEventLisetener('click', ()=>{});
  target.addEventLisetener('scroll', ()=>{});
  target.addEventLisetener('wheel', ()=>{});
}

// typeC(root);
/*
1차 함수(한개만 있는 함수)

고차함수 (함수 여러개를 묶어서 작동시키는 방식)
-> 바인딩

함수로 묶이는 경우 
객체로 묶이는 경우 (메서드화 됨)
*/

typeP = {
  objectA:function(){},
  objectB:() => {}
}
// typeP.objectA();

// console.log(console);