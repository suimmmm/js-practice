let numbers = [1,2,3,4,5];
let numfilter = numbers.filter(x => x%2 === 0);
console.log(numfilter);
let nummap = numbers.map(x => x*2);
console.log(nummap);
let numforeach = numbers.forEach(x => {
    console.log("numforeach = " + x);
});

var num = function(x){return x* 2};
var a = num("2");
console.log(a);