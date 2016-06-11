// function add (a, b) {
// 	return a + b;
// }
//
// console.log (add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Cristiano', 'Maranhao'];
// var groupB = ['Vinas'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

// 1st challenge
var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
	console.log('Hi ' + name + ', you are ' + age)
}

greet(...person);
greet(...personTwo);

// 2nd challenge
var names = ['Mike', 'Ben'];
var final = ['Renan', ...names];

final.forEach(function(name){
	console.log('Hi ' + name);
});
