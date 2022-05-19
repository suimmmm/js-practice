// const memberOne = {
//   name:'ek',
//   gender:'pokemon',
//   age:58,
//   deskNumber:30,
//   glasses: true,
//   married: 'dolsing',
//   talmo:false,
//   smartphone:'folder phone'
// }

// const memberTwo = {
//   name:'el',
//   gender:'digimon',
//   age:38,
//   deskNumber:31,
//   glasses: true,
//   married: 'no',
//   talmo:false,
//   smartphone:'iphone'
// }

// console.log(memberOne.name)
// console.log(memberTwo.name)

// 생성자 함수 : constructor function
// 객체를 찍어내는 거푸집 틀
// 석고 뜨는 함수

// function Member(name, gender,age, deskNumber, glasses, married, talmo, smartphone){
//   this.name= name;
//   this.gender=gender;
//   this.age=age;
//   this.deskNumber=deskNumber;
//   this.glasses= glasses;
//   this.married= married;
//   this.talmo=talmo;
//   this.smartphone=smartphone;
// }

// const memberOne = new Member('ek','pheri',14,32,false,'marrid',false,'samsong');
// console.log(memberOne)

const testOne = new Date();
// console.log(testOne.getDate());

// function ampm(hour, msg){
//   if(hour > 12){
//     console.log('오후'+ (hour-12) + '시입니다');
//     console.log(memberOne.smartphone);
//   }
//   else{
//     console.log('오전' + hour + '시입니다.')
//   }
// }
// ampm(testOne.getHours(), '오후입니다.')
let dateA = new Date();
let day;
console.log(dateA.getDay())
switch (dateA.getDay()){
  case 0: {day = '일요일'};
  case 1: {day = '월요일'};
  case 2: {day = '화요일'};
  case 3: {day = '수요일'};
  case 4: {day = '목요일'};
  case 5: {day = '금요일'};
  case 6: {day = '토요일'};
}
console.log(day)

let dateB = new Date(dateA.getFullYear);
console.log(dateB)