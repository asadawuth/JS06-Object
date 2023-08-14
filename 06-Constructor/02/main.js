function Accumulator(startingValue) {
    this.currentValue = startingValue;
    this.read = function () {
let num = +prompt("Guess Num");
    this.currentValue += Number(num);   
    }
    this.show = function () {
         alert(this.currentValue)
    };
};

let accumulator = new Accumulator(5)

accumulator.show() // 5 
accumulator.read() // -4
accumulator.show() // 1  