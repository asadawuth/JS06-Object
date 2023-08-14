let key = prompt("Key");
let obj = {};

while (key !== "stop") {
   let value = prompt("Value");
   obj[key] = value
   key = prompt("Key");
}
console.log(obj)