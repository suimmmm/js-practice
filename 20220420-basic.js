let one = '1';
let two = 2;

// 변수 선언할때 let 변수 = value; 숫자타입의 1 값도 대입해준다 
console.log(one);
console.log(one + two)

// 변수의 데이터 타입
console.log(typeof one); // type이 매우 엄격하여 
console.log(typeof two); // type이 매우 엄격하여 


let father = "아버지"
let room = "방"

console.log( father +' 는'+ room+'에 들어가신다');
console.log(father + room);

let me = "공욱재는 미남이다" ;
if(typeof me === 'string'){
  console.log("?");
}

let suim = {
  name: 'suim',
  age: 22
}

console.log(typeof suim);
if(suim.name === 'ok'){
  console.log('ok true');
}
else if(suim.name === 'suim'){
  console.log('suim true');
}
else{
  console.log('틀림');
}

let a = 1;
let b = '1';

if(a == b){ // '==' 같다 / '===' 다름
  console.log('같다');
}
else{
  console.log('다름');
}
