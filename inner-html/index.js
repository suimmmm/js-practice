const root = document.getElementById('root')
const ul = document.createElement('ul')

root.appendChild(ul)
// -> 동적으로 생성

// for(let i =0; i< 10; i++){
//   const li = document.createElement('li');
//   li.textContent = i;
//   ul.appendChild(li);
// }
// -> createElement 이용

// let liElement = [];
// for(let i = 0; i < 10; i++){
//   liElement.push(`<li> ${i} </li> `);
// }
// console.log(liElement.join(''));
// ul.innerHTML = liElement.join('');
// -> innerHTML 이용

// innerHTMl , .outHTML -> html 해석한다.
// DOM 