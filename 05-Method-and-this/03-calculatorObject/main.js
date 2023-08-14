let calculator = {
    read() {
       this.a = +prompt("num1");
       this.b = +prompt("num2");
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
  };

  calculator.read()
  console.log(calculator.sum());
  console.log(calculator.mul());