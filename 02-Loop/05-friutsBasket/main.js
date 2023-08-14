/*const fruits = {};

let key= prompt("Enter fruit");
let value = prompt("Enter Quatity");


if(value == 1) {
  fruits[key] = value;
} else if (value > 1 ) {
    fruits[`$[key]s`] = value;
}

console.log(fruits); */
///////////////////////////////////////////////////////////

/*let key= prompt("Enter fruit");
let value = prompt("Enter Quatity"); */

const TERMINATE = 'stop'
const fruits = {};

let key;
let value;

do {
    key= prompt("Enter fruit");
    value = prompt("Enter Quatity");

if(+value == 1) {
  fruits[key] = value;
} else if (+value > 1 ) {
    fruits[`${key}`] = value;
} 
}while (key != TERMINATE && value != TERMINATE );

console.log(fruits);