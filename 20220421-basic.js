let nuri = "이누리";
let text = "을 좋아합니다.";
let snack = {
  chip:"과자", bab:"초밥",dirnk:"커피"
};
let stringSum =`${nuri}씨는 ${snack.chip}${text}`;

// console.log(typeof nuri);
// console.log(typeof text);
console.log(stringSum);

//변수 stringSum 은 변수 nuri + text 변수를 앞뒤로 합침
//변수에 데이터 타입을 표시하는 버릇가지면 -> 찾기 편함
//값이 중요하지 않음 / 데이터 타입이 중요함

let pokemon =['이상해씨','이상해풀', '이상해꽃' ];

console.log(pokemon);
console.log(pokemon.length);
console.log(pokemon[pokemon.length-1]);

let max = `${pokemon[0]}의 최종 진화는 ${pokemon[0+2]}이다.`
console.log(max);


let tea = ['루이보스', '녹차', '홍차', '잉글리쉬', '물'];
let random = parseInt(Math.random() * tea.length);
console.log(random);
let teatime = `오늘은 ${tea[random]} 를 마실꺼다.`;

console.log(teatime);