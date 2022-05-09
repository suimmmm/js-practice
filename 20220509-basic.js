let a = 1;
let b = 1;
let c = 2;

function valueTest(){
  if(typeof a === 'number'){
    console.log('변수 a 는 데이터타입이 숫자입니다.')
  }
  else {
    console.log('변수 a 는 데이터타입이 숫자가 아닙니다.')
  }
  if(typeof b === 'number'){
    console.log('변수 b 는 데이터타입이 숫자입니다.')
  }
  else {
  console.log('변수 b 는 데이터타입이 숫자가 아닙니다.')
  }
  /*
  if/else 중 하나가 메인 알고리즘 인 경우가 많음 

  if(){}
  else{if(){}}
  => else if(){} -> 조건식이 까다로워짐

  else if(typeof b === 'number'){
    console.log('변수 b 는 데이터타입이 숫자입니다.')
  }
  */
}
// valueTest();

function valueTestTwo(){
  if(typeof a === 'number' && typeof b === 'number'){
    console.log('변수 a, b는 데이터타입이 숫자입니다.')
  }
  // && and , || or  -> 조건식이 길수록 뚜렷한 초점이 존재함
}
valueTestTwo();