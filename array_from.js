var arr = ["a","b","c"];

console.log(Array.from(arr));
console.log(Array.from('def'));


var m = new Map([[1,2],[3,4],[5,6]]);
console.log(m);
console.log(Array.from(m));


// Using an arrow function as the map function to
// manipulate the elements
var a1 = Array.from([1, 2, 3], x => x + x);      
// [2, 4, 6]
console.log(a1);

var a2 = Array.from({length: 5}, (v, i) => i);
console.log(a2);
// [0, 1, 2, 3, 4]



