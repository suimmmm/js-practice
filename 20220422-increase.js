const arr = ['카푸치노','아메리카노','맥주','소주','칭따오'];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr.length);

let indexValue = 0;
// 인덱스에 사칙연산을 쓰기위해 변수 선언

/*
setTimeout(function(){
  console.log(arr[indexValue]);
  indexValue++

  if(indexValue = arr.length){
    clearTimeout();
  }
},5000);
*/
let count = 0;
let timer = setInterval(function() {
  if(indexValue < arr.length){
    console.log(arr[indexValue])
    indexValue++;
  }
  else{
    indexValue = 0;
    count++;
  }
  if(count>2){
    clearInterval(timer);
  }
}, 1000);