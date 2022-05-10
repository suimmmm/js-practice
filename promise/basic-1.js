function promiseA(){
  Promise.resolve('hello').then(function(value){
    console.log(value);
  })
}
promiseA();

function promiseB(){
  let promiseArr = Promise.resolve([3,5,4,1,2]);
  promiseArr.then(function(arr){
    console.log(arr.sort(function(a,b){return b-a}));
  })
}
promiseB();

function promiseC(){
  let original = Promise.resolve(33);
  let cast = Promise.resolve(original);
  cast.then(function(value){
  // 두번째
    console.log(`value : ${value}`);
  })
  // 첫번째
  console.log(`original === cast => ${original === cast}`)
}
promiseC();

function promiseD(){
  let p1 = Promise.resolve({
    then: function(onFulfill, onReject){onFulfill('HI!!!');}
  })
  console.log(p1 instanceof Promise) ;
  // -> 객체 프로토타입 체인이 존재하는가
  // * 판별할 객채 instanceof 판별 목표 함수
  
  p1.then(function(v){
    console.log(`v: ${v}`);
  }, function(e){ // 호출되지 않음
    console.log(`e: ${e}`);
  })
  
  // ? throw -> 사용자 정의 예외 발생 
  // * throw 예외발생시킬표현식(?)
  let thenAble = {then: function(resolve){
    // let TypeError: TypeErrorConstructor new (message?: string) => TypeError (+1 overload) interface TypeError
    throw new TypeError('Throwing'); // 먼저 이걸 읽어서 error로 감
    resolve('resolve');
  }}
  
  let p2 = Promise.resolve(thenAble);
  p2.then(function(value){
    console.log(`value: ${value}`);
  },function(error){
    console.log(`error: ${error}`);
  })
  
  // thenAble 와 순서가 다름
  let thenable = {then: function(resolve){
    resolve('resolve'); // 먼저 이걸 읽어서 val 에 감
    // let TypeError: TypeErrorConstructor(생성자) new (message?: string) => TypeError (+1 overload) -> interface TypeError
    throw new TypeError('Throwing');
  }}
  
  let p3 = Promise.resolve(thenable);
  p3.then(function(val){
    console.log(`val: ${val}`);
  },function(err){
    console.log(`error: ${err}`);
  })
}
promiseD();
// * promise.then(참으로 결과 나올곳,error)