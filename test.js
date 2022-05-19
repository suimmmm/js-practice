// console.log('test');
// console.log(8*5*4);

// let a = [4, 5, 6, 7];

// a.forEach(i =>{
//   console.log(i);
// })

const arrExample = ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란" , "피존투", "또가스", "우린", "서로", "모습은", "달라도"]

// arrExample.forEach(x => {
//   console.log(x)
// })
// arrExample.push('엑')
// let a = arrExample.unshift()
// console.log(arrExample.indexOf('또가스'))
// arrExample.splice(1, 2);
// console.log(arrExample.slice(1,2))
// let map = arrExample.map(x=>{return x})
// console.log(map === arrExample)
// console.log(arrExample.reduce((arr,cur,i) => {return arr += cur;}, '초기값'))
// console.log(arrExample.join('또가스'))
// arrExample.findIndex(function(){if(arrExample.length > 5){console.log(arrExample)}})
// console.log(arrExample.filter(function(){return arrExample.indexOf('또가스') < 2}))
// console.log(arrExample.some((ele)=>ele.length % 3 === 0))
// let count = 0;
// console.log(arrExample.values().next())
// for(let value of arrExample.values()){
//   console.log(count)
//   count++;
//   console.log(value)
// }
// console.log(Array.from(arrExample))
// console.log(arrExample === Array.from(arrExample))
// console.log(arrExample.at(8))
// console.log(arrExample.concat('에엑1'))
// console.log(arrExample.concat('에엑2'))
// console.log(arrExample.every())
// console.log(Array.isArray(arrExample))


let obj = {
  a:1,
  b:2,
  c:1,
  d:2,
  sum : function(one, two){
    if(typeof one === 'number' && typeof two === 'number'){
      return one + two;
    }
    else{
      console.error('데이터 타입값 잘못됨');
    }
  }
}
console.log(obj.a === obj.b || obj.a === obj.c)
console.log(obj.a === obj.b && obj.a === obj.c)
// === : 값으면 참 / 다르면 거짓
// !== : 다르면 참 / 같으면 거짓
// || or 연산자
// && and 연산자
console.log(obj.sum(obj.a, obj.b))
// 타입스크립 기본문법
