//0////////////////////////////////////////////
//arr.some()///////////////////////////////////
//Tenga en cuenta que, principalmente en esta publicación, simplificaremos la función que se pasa como parámetro.//
var myAwesomeArray = ["a", "b", "c", "d", "e"];

// Instead of using this way
myAwesomeArray.some(test => {
  if (test === "d") {
    return test;
  }
})
// We'll use the shorter one
console.log(myAwesomeArray.some(test => test === "d"));

//1////////////////////////////////////////////
//arr.some()///////////////////////////////////
myAwesomeArray = ["a", "b", "c", "d", "e"];

console.log(myAwesomeArray.some(test => test === "d"));
//-------> Output : true

//2////////////////////////////////////////////
//arr.reduce()/////////////////////////////////
myAwesomeArray = [1, 2, 3, 4, 5];

console.log(myAwesomeArray.reduce((total, value) => total * value));
// 1 * 2 * 3 * 4 * 5
//-------> Output = 120

//3////////////////////////////////////////////
//arr.every()//////////////////////////////////
myAwesomeArray = ["a", "b", "c", "d", "e"];

console.log(myAwesomeArray.every(test => test === "d"));
//-------> Output : false

myAwesomeArray2 = ["a", "a", "a", "a", "a"];

console.log(myAwesomeArray2.every(test => test === "a"));
//-------> Output : true

//4////////////////////////////////////////////
//arr.map()////////////////////////////////////
myAwesomeArray = [5, 4, 3, 2, 1];
console.log(myAwesomeArray.map(x => x * x));

//-------> Output : 25
//                  16
//                  9
//                  4
//                  1

//5////////////////////////////////////////////
//arr.flat()///////////////////////////////////
myAwesomeArray = [[1, 2], [3, 4], 5];

console.log(myAwesomeArray.flat());
//-------> Output : [1, 2, 3, 4, 5]

//6////////////////////////////////////////////
//arr.filter()/////////////////////////////////
myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
  { id: 4, name: "Mass" },
];

console.log(myAwesomeArray.filter(element => element.name === "Mass"));
//-------> Output : 0:{id: 3, name: "Mass"},
//                  1:{id: 4, name: "Mass"}

//7////////////////////////////////////////////
//arr.forEach()////////////////////////////////
myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

myAwesomeArray.forEach(element => console.log(element.name));

//8///////////////////////////////////////////
//arr.findIndex()/////////////////////////////
myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

console.log(myAwesomeArray.findIndex(element => element.id === 3));
//-------> Output : 2

console.log(myAwesomeArray.findIndex(element => element.id === 7));
//-------> Output : -1

//9//////////////////////////////////////////
//arr.find()/////////////////////////////////
myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

console.log(myAwesomeArray.find(element => element.id === 3));
//-------> Output : {id: 3, name: "Mass"}

console.log(myAwesomeArray.find(element => element.id === 7));
//-------> Output : undefined

//10//////////////////////////////////////////
//arr.sort()//////////////////////////////////
myAwesomeArray = [5, 4, 3, 2, 1];

// Sort from smallest to largest
console.log(myAwesomeArray.sort((a, b) => a - b));
//-------> Output : [1, 2, 3, 4, 5]

// Sort from largest to smallest
console.log(myAwesomeArray.sort((a, b) => b - a));
//-------> Output : [5, 4, 3, 2, 1]

//11//////////////////////////////////////////
//arr.concat()////////////////////////////////
myAwesomeArray = [1, 2, 3, 4, 5];
var myAwesomeArray2 = [10, 20, 30, 40, 50];
console.log(myAwesomeArray.concat(myAwesomeArray2));
//-------> Output : [1, 2, 3, 4, 5, 10, 20, 30, 40, 50]

//12//////////////////////////////////////////
//arr.fill()//////////////////////////////////
myAwesomeArray = [1, 2, 3, 4, 5]

// The first argument (0) is the value
// The second argument (1) is the starting index
// The third argument (3) is the ending index
console.log(myAwesomeArray.fill(0, 1, 3));
//-------> Output : [1, 0, 0, 4, 5]

//13//////////////////////////////////////////
//arr.includes()//////////////////////////////
myAwesomeArray = [1, 2, 3, 4, 5];

console.log(myAwesomeArray.includes(3));
//-------> Output : true

console.log(myAwesomeArray.includes(8));
//-------> Output : false

//14//////////////////////////////////////////
//arr.reverse()///////////////////////////////
myAwesomeArray = ["e", "d", "c", "b", "a"];

console.log(myAwesomeArray.reverse());
//-------> Output : ['a', 'b', 'c', 'd', 'e']

//15//////////////////////////////////////////
//arr.flatMap()/////////////////////////////////////
//arr.flat().map()/////////////////////////////////////

myAwesomeArray = [[1], [2], [3], [4], [5]];

console.log(myAwesomeArray.flatMap(arr => arr * 10));
//-------> Output : [10, 20, 30, 40, 50]

// With .flat() and .map()
console.log(myAwesomeArray.flat().map(arr => arr * 10));
//-------> Output : [10, 20, 30, 40, 50]




























