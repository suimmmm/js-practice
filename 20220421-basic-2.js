/* 
* 커피원두 : 20000
* 우유 : 30000
* 물 :2000
* 설탕 : 300
* 컵 : 500
* 시럽 : 200
* 얼음 : 100


*/
const cafeMaterial = {
  coffe:20000,
  milk:30000,
  water:2000,
  sugar:300,
  cup:500,
  silup:200,
  ice:100,
  teabag:5000
}


const americano = {
  one : cafeMaterial.coffe,
  two : cafeMaterial.water,
  three : cafeMaterial.cup
}

const tea = {
  one:cafeMaterial.teabag,
  two:cafeMaterial.cup,
  three:cafeMaterial.water,
  four:cafeMaterial.ice
}

let americanoPrice = americano.one + americano.two + americano.three ;
let teaPrice = tea.one + tea.two + tea.three + tea.four;



// console.log(cafeMaterial);
// console.log(americano);
console.log(`티 값은 ${teaPrice}원 입니다.`);
console.log(`아이스 티 값은 ${teaPrice + cafeMaterial.ice}원 입니다.`);
console.log(`아이스 아메리카노 값은 ${americanoPrice + cafeMaterial.ice} 원 입니다.`);

if(americanoPrice>7500){
  console.log(`아메리카노 값은 ... ${americanoPrice}원 입니다.`);
}
else{
  console.log(`아메리카노 값은 ${americanoPrice}원 입니다.`);
}