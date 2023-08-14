let calculator = {
    read : function read() {
        this.a = Number(prompt("Num1"))
        this.b = 1 * prompt("Num2")
    },
    sum : function sum() {
        return this.a + this.b
    },
    mul :  function mul() {
        return this.a * this.b
   }
}

object.read() //5,5
object.sum()  //10
object.mul()  //25*/

////////////////////////////////////////////////////////////////


let calculator = {
    read() {
        this.a = Number(prompt("Num1"))
        this.b = 1 * prompt("Num2")
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
   }
}

object.read() //5,5
object.sum()  //10
object.mul()  //25*/

//////////////////////////////////////////

const calculator = {
    read : read = () => {
  this.a = prompt("Num1") *1
  this.b = Number(prompt("Num2"))     
},   sum : sum = () => { return this.a + this.b },
    mul : mul = () => { return this.a * this.b }
}

