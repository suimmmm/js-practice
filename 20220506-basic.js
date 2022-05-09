let value = 0;
// 선언과 동시에 값 대입 = 초기화 했다.
// initalize, init
// value = 100;
// console.log(value);

// setInterval(function(){}, interval);
// 첫번째 파라미터(매개변수) 함수, 매개변수자리에 실행할 함수가 자리잡은 것을 '콜백함수'
// callback function
// callback funcion hell : 굉장히 헷갈리는 포인트가 있것
let interval = 1000;
let fade = setInterval(function(){
  console.log(value);
  value ++;
  // value = value + 2; === value += 2;
  
  if(value === 100){
    clearInterval(fade);
  }
}, interval);

// 함수를 변수에 담는 행위 = 함수 리터럴 ( 함수 표현식 )
// 식별하기 위해 변수에 담음.