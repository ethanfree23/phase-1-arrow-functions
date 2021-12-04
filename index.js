// Code below to practice, hoe!

const divide = function(){
    return 2000/100;
}

const square = x => x*x

const add = (x, y) => x+y

// function divide() {
//     return 2000/100;
// }

// const square = (num1) => num1**num1;
// const add = (num1, num2) => num1+num2;


/*
review:
function declaration => function foo() {return 'foo'}
function expression => const foo = function () {return 'foo'}

function() {...} to the right of = is function expression

^^ we can use either; its preferential.

Arrow functions:
ie. const add = (parameter1, parameter2) => parameter1 + parameter2;
add(2,3); //=> 5

(parameter1, parameter2) => parameter1 + parameter2;
// Parameter list ^^^^^   // Function Body ^^^^^^^^

First note: if the function body consist of a single expression, we do not need {} (only if there are multiple expressions, because it is how we separate them)

Second note: when there are no {}, arrow functions have an implicit return (automatic return)

** this is the only time in JS a function does not require return

if the arrow function only has one parameter, the () is optional
ie. const twoAdder = x => x + 2;
// is the same as
const twoAdder = (x) => x + 2;

if more than one expression, we need {} and return
ie. const sum = (parameter1, parameter2) => {
  console.log(`Adding ${parameter1}`);
  console.log(`Adding ${parameter2}`);
  return parameter1 + parameter2;
}
sum(1,2); //=> 3

when are arrow functions used? in iterator methods
an iterator is a method that allows you to deal with a set of data, one at a time

A map() method is called on an array, and takes a function as an argument, then adds the return value to a NEW array
ie. const nums = [1,2,3]; //array
const squares = nums.map(x => x ** 2); //array name.map(parameter => parameter to do something)
squares; //=> [1,4,9]
nums; //=> [1,2,3]

//^ basically, squares is a new array we want to create, that squares the values of the num array, and then returns those values that we can access later as the squares array


*/